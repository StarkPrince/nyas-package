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

export const createOnBoardingTemplate = (
  user: {
    name: string;
    role: string;
    password: string;
  },
  title: string,
  linkText: string,
  linkUrl: string
) => {
  const body = `
    Welcome to the team! We're thrilled to have you as ${user.role} on board. 
    You're now part of a team composed of smart, talented, and motivated individuals. 
    We're excited to have you contribute your unique skills and abilities to the team. 
    We hope you'll do some amazing work here.
  `;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <!--[if mso]>
      <style type="text/css">
        table, td, div, h1, p {font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}
      </style>
      <![endif]-->
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px; line-height: 1.6; color: #333333; background-color: #f6f9fc;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td align="center" style="padding: 40px 0;">
            <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <tr>
                <td style="padding: 40px 30px; text-align: center; background-color: #4f46e5; background-image: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);">
                  <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">${title}</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 40px 30px;">
                  <p style="margin: 0 0 20px; font-size: 20px; font-weight: 600; color: #4f46e5;">Dear ${user.name},</p>
                  <p style="margin: 0 0 20px; color: #4b5563;">${body}</p>
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                    <tr>
                      <td style="padding: 20px; background-color: #f3f4f6; border-radius: 8px; text-align: center;">
                        <p style="margin: 0 0 10px; font-size: 18px; font-weight: 600; color: #4b5563;">Your login credentials</p>
                        <p style="margin: 0; font-size: 16px; color: #6b7280;">Username: <strong>${user.name}</strong></p>
                        <p style="margin: 10px 0 0; font-size: 16px; color: #6b7280;">Password: <strong style="color: #4f46e5; background-color: #e0e7ff; padding: 2px 6px; border-radius: 4px;">${user.password}</strong></p>
                      </td>
                    </tr>
                  </table>
                  <table role="presentation" style="width: 100%;">
                    <tr>
                      <td align="center">
                        <a href="${linkUrl}" target="_blank" style="display: inline-block; padding: 14px 30px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; background-color: #4f46e5; border-radius: 6px; transition: background-color 0.3s ease;">
                          ${linkText}
                        </a>
                      </td>
                    </tr>
                  </table>
                  <p style="margin: 30px 0 0; font-size: 14px; color: #6b7280; text-align: center;">If you have any questions, please don't hesitate to contact our support team.</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px 30px; text-align: center; background-color: #f9fafb;">
                  <p style="margin: 0; font-size: 14px; color: #6b7280;">&copy; 2023 Your Company Name. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
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
