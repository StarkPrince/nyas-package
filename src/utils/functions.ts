import { Schema } from "mongoose";
import { ModelSchemaEntry, ScheduleType } from "..";

export const detectScheduleConflict = (
  schedules: ScheduleType[]
): Array<{
  schedule1: ScheduleType;
  schedule2: ScheduleType;
}> => {
  const conflicts: Array<{ schedule1: ScheduleType; schedule2: ScheduleType }> =
    [];

  schedules.sort((a, b) => {
    return a.startdatetime.localeCompare(b.startdatetime);
  });

  for (let i = 0; i < schedules.length; i++) {
    for (let j = i + 1; j < schedules.length; j++) {
      const schedule1 = schedules[i];
      const schedule2 = schedules[j];

      const start1 = Date.parse(schedule1.startdatetime);
      const end1 = Date.parse(schedule1.enddatetime);
      const start2 = Date.parse(schedule2.startdatetime);
      const end2 = Date.parse(schedule2.enddatetime);

      if (start1 < end2 && start2 < end1) {
        conflicts.push({ schedule1, schedule2 });
      }
    }
  }

  return conflicts;
};

export const getFieldEngineerSuffix = (index: number): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const base = alphabet.length;

  let suffix = "";
  let num = index;

  while (num >= 0) {
    suffix = alphabet[num % base] + suffix;
    num = Math.floor(num / base) - 1;
  }

  return suffix;
};

export const getScheduleDuration = (schedule: ScheduleType): number => {
  const start = Date.parse(schedule.startdatetime);
  const end = Date.parse(schedule.enddatetime);

  return (end - start) / 1000 / 60;
};

export const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Utility function to create an HTML email template
export const createHtmlTemplate = (
  title: string,
  userName: string,
  body: string,
  linkText: string,
  linkUrl: string
) => {
  return `
    <h1>${title}</h1>
    <p>Hello ${userName},</p>
    <p>${body}</p>
    <a href="${linkUrl}">${linkText}</a>
  `;
};

export const isSchemaTypeArray = (
  schemaType: any
): schemaType is Schema.Types.Array => {
  return schemaType instanceof Schema.Types.Array;
};

export const isSchemaTypeObjectId = (
  schemaType: any
): schemaType is Schema.Types.ObjectId => {
  return schemaType instanceof Schema.Types.ObjectId;
};

export const isRefField = (schemaType: {
  options: any;
  caster: { options: any };
}): boolean => {
  if (
    isSchemaTypeObjectId(schemaType) &&
    schemaType.options &&
    typeof schemaType.options.ref === "string"
  ) {
    return true;
  }
  if (
    isSchemaTypeArray(schemaType) &&
    isSchemaTypeObjectId(schemaType.caster) &&
    schemaType.caster.options &&
    typeof schemaType.caster.options.ref === "string"
  ) {
    return true;
  }
  return false;
};

// Utility function to get reference fields from a schema
export const getReferenceFields = (schema: Schema): string[] => {
  const refFields: string[] = [];
  schema.eachPath((path, type) => {
    if (isRefField(type as any)) {
      refFields.push(path);
    }
  });
  return refFields;
};

export const getIndexedFields = (schema: Schema): string[] => {
  const indexes = schema.indexes();
  const indexedFields: Set<string> = new Set();

  indexes.forEach((index) => {
    const fields = Object.keys(index[0]);
    fields.forEach((field) => indexedFields.add(field));
  });

  return Array.from(indexedFields);
};

export const processReferences = async (
  data: any,
  schema: Schema,
  models: { [key: string]: ModelSchemaEntry },
  userId: string | undefined = undefined
): Promise<any> => {
  const referenceFields = getReferenceFields(schema);

  for (const field of referenceFields) {
    const modelEntry = models[field];
    if (!modelEntry) {
      console.error(`No model found for field: ${field}`);
      continue;
    }
    const { model, schema: fieldSchema } = modelEntry;
    if (!model || !fieldSchema) {
      console.error(`No model or schema found for field: ${field}`); // !handle this error
      continue;
    }
    if (Array.isArray(data[field])) {
      const indexedFields = getIndexedFields(fieldSchema);
      for (let i = 0; i < data[field].length; i++) {
        const item = data[field][i];
        if (typeof item === "object" && !item._id) {
          await processNestedReferences(item, fieldSchema, models);
          const filter: any = {};
          indexedFields.forEach((indexField) => {
            if (item[indexField] !== undefined) {
              filter[indexField] = item[indexField];
            }
          });
          try {
            const existingDoc = await model.findOne(filter);
            if (existingDoc) {
              data[field][i] = existingDoc._id;
            } else {
              const newDoc = await model.create(item);
              data[field][i] = newDoc._id;
            }
          } catch (error) {
            console.error(
              `Error processing item in array for field ${field}:`,
              error
            );
          }
        } else if (typeof item === "string") {
          continue;
        }
      }

      const bulkOps = data[field].map((item: any) => ({
        updateOne: {
          filter: { _id: item },
          update: { $set: { _id: item } },
          upsert: true,
        },
      }));

      try {
        await model.bulkWrite(bulkOps);
      } catch (error) {
        console.error(`Error in bulk operation for field ${field}:`, error);
      }
    } else if (typeof data[field] === "object" && data[field] !== null) {
      await processNestedReferences(data[field], fieldSchema, models, userId);

      const indexedFields = getIndexedFields(fieldSchema);
      const query: any = {};

      indexedFields.forEach((indexField) => {
        if (data[field][indexField] !== undefined) {
          query[indexField] = data[field][indexField];
        }
      });

      try {
        const existingDoc = await model.findOne(query);

        if (existingDoc) {
          data[field] = existingDoc._id;
        } else {
          const doc = await model.create(data[field]);
          data[field] = doc._id;
        }
      } catch (error) {
        console.error(`Error processing document for field ${field}:`, error);
      }
    } else if (typeof data[field] === "string") {
      continue;
    }
  }

  if (userId) {
    data.createdBy = userId;
  }

  return data;
};

export const processNestedReferences = async (
  data: any,
  schema: Schema,
  models: { [key: string]: ModelSchemaEntry },
  userId?: string
) => {
  const referenceFields = getReferenceFields(schema);

  for (const field of referenceFields) {
    const modelEntry = models[field];
    if (!modelEntry) {
      console.error(`No model found for field:2 ${field}`);
      continue;
    }

    const { model, schema: fieldSchema } = modelEntry;

    if (Array.isArray(data[field])) {
      const indexedFields = getIndexedFields(fieldSchema);

      for (let i = 0; i < data[field].length; i++) {
        const item = data[field][i];
        if (typeof item === "object" && !item._id) {
          await processNestedReferences(item, fieldSchema, models);

          const filter: any = {};
          indexedFields.forEach((indexField) => {
            if (item[indexField] !== undefined) {
              filter[indexField] = item[indexField];
            }
          });

          try {
            const existingDoc = await model.findOne(filter);
            if (existingDoc) {
              data[field][i] = existingDoc._id;
            } else {
              const newDoc = await model.create(item);
              data[field][i] = newDoc._id;
            }
          } catch (error) {
            console.error(
              `Error processing item in array for field ${field}:`,
              error
            );
          }
        } else if (typeof item === "string") {
          continue;
        }
      }
    } else if (typeof data[field] === "object" && data[field] !== null) {
      await processNestedReferences(data[field], fieldSchema, models);

      const indexedFields = getIndexedFields(fieldSchema);
      const query: any = {};

      indexedFields.forEach((indexField) => {
        if (data[field][indexField] !== undefined) {
          query[indexField] = data[field][indexField];
        }
      });

      try {
        const existingDoc = await model.findOne(query);

        if (existingDoc) {
          data[field] = existingDoc._id;
        } else {
          const doc = await model.create(data[field]);
          data[field] = doc._id;
        }
      } catch (error) {
        console.error(`Error processing document for field ${field}:`, error);
      }
    } else if (typeof data[field] === "string") {
      continue;
    }
  }
};
