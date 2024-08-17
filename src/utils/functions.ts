import { Schema } from "mongoose";
import { IBillingDetail, ISchedule, ModelSchemaEntry, ScheduleType } from "..";

export const detectScheduleConflict = (
  schedules: ScheduleType[]
): Array<{
  schedule1: any;
  schedule2: any;
}> => {
  const conflicts: Array<{ schedule1: any; schedule2: any }> = [];

  // Extract schedules for easier comparison

  schedules.sort((a, b) => {
    if (a.day < b.day) return -1;
    if (a.day > b.day) return 1;
    return a.starttime.localeCompare(b.starttime);
  });

  for (let i = 0; i < schedules.length; i++) {
    for (let j = i + 1; j < schedules.length; j++) {
      const schedule1 = schedules[i];
      const schedule2 = schedules[j];

      if (schedule1.day !== schedule2.day) {
        break;
      }

      const start1 = Date.parse(`1970-01-01T${schedule1.starttime}Z`);
      const end1 = Date.parse(`1970-01-01T${schedule1.endtime}Z`);
      const start2 = Date.parse(`1970-01-01T${schedule2.starttime}Z`);
      const end2 = Date.parse(`1970-01-01T${schedule2.endtime}Z`);

      // Check for overlap
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

export const getScheduleDuration = (schedule: any): number => {
  const start = Date.parse(`1970-01-01T${schedule.starttime}Z`);
  const end = Date.parse(`1970-01-01T${schedule.endtime}Z`);

  return (end - start) / 1000 / 60;
};

export const calculatePrice = (
  timePeriod: ISchedule,
  rateDetails: IBillingDetail
): number => {
  const { additionalRates, outOfWorkingHoursRate, nightRate } = rateDetails;

  const startTime = new Date(`${timePeriod.day}T${timePeriod.starttime}`);
  const endTime = new Date(`${timePeriod.day}T${timePeriod.endtime}`);

  const getHour = (date: Date) => date.getHours() + date.getMinutes() / 60;

  let totalHours = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);

  // Initialize the total price
  let totalPrice = 0;

  for (const rate of additionalRates) {
    const hours = Math.min(totalHours, rate.hours);
    totalPrice += hours * rate.rate;
    totalHours -= hours;

    if (totalHours <= 0) {
      return Math.round(totalPrice * 1000) / 1000;
    }
  }

  const nightStart = 22; // 10 PM
  const nightEnd = 5; // 5 AM
  const dayEnd = 24; // Midnight

  while (totalHours > 0) {
    const startHour = getHour(startTime);
    const endHour = getHour(endTime);

    if (
      (startHour >= nightStart && startHour < dayEnd) ||
      endHour <= nightEnd
    ) {
      const nightHours = Math.min(totalHours, endHour - startHour);
      totalPrice += nightHours * nightRate;
      totalHours -= nightHours;
    } else {
      // Apply out of working hours rate
      const outOfWorkingHours = Math.min(totalHours, endHour - startHour);
      totalPrice += outOfWorkingHours * outOfWorkingHoursRate;
      totalHours -= outOfWorkingHours;
    }
  }

  return Math.round(totalPrice * 1000) / 1000;
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
  // Check if it's a direct ObjectId reference
  if (
    isSchemaTypeObjectId(schemaType) &&
    schemaType.options &&
    typeof schemaType.options.ref === "string"
  ) {
    return true;
  }

  // Check if it's an array of ObjectIds
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
    // @ts-ignore
    if (isRefField(type)) {
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
      console.error(`No model found for field:1 ${field}`);
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
