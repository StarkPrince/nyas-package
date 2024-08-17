"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScheduleDuration = exports.getFieldEngineerSuffix = void 0;
exports.getReferenceFields = getReferenceFields;
exports.getIndexedFields = getIndexedFields;
exports.processReferences = processReferences;
const mongoose_1 = require("mongoose");
// export const detectScheduleConflict = (
//   schedules: ScheduleFieldEngineerCreationType[]
// ): Array<{
//   schedule1: any;
//   schedule2: any;
// }> => {
//   const conflicts: Array<{ schedule1: any; schedule2: any }> = [];
//   // Extract schedules for easier comparison
//   const schedules = scheduleFieldEngineers.map((item) => item.schedule);
//   schedules.sort((a, b) => {
//     if (a.day < b.day) return -1;
//     if (a.day > b.day) return 1;
//     return a.starttime.localeCompare(b.starttime);
//   });
//   for (let i = 0; i < schedules.length; i++) {
//     for (let j = i + 1; j < schedules.length; j++) {
//       const schedule1 = schedules[i];
//       const schedule2 = schedules[j];
//       if (schedule1.day !== schedule2.day) {
//         break;
//       }
//       const start1 = Date.parse(`1970-01-01T${schedule1.starttime}Z`);
//       const end1 = Date.parse(`1970-01-01T${schedule1.endtime}Z`);
//       const start2 = Date.parse(`1970-01-01T${schedule2.starttime}Z`);
//       const end2 = Date.parse(`1970-01-01T${schedule2.endtime}Z`);
//       // Check for overlap
//       if (start1 < end2 && start2 < end1) {
//         conflicts.push({ schedule1, schedule2 });
//       }
//     }
//   }
//   return conflicts;
// };
const getFieldEngineerSuffix = (index) => {
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
exports.getFieldEngineerSuffix = getFieldEngineerSuffix;
const getScheduleDuration = (schedule) => {
    const start = Date.parse(`1970-01-01T${schedule.starttime}Z`);
    const end = Date.parse(`1970-01-01T${schedule.endtime}Z`);
    return (end - start) / 1000 / 60;
};
exports.getScheduleDuration = getScheduleDuration;
function calculatePrice(timePeriod, rateDetails) {
    const { additionalRates, outOfWorkingHoursRate, nightRate } = rateDetails;
    const startTime = new Date(`${timePeriod.day}T${timePeriod.starttime}`);
    const endTime = new Date(`${timePeriod.day}T${timePeriod.endtime}`);
    const getHour = (date) => date.getHours() + date.getMinutes() / 60;
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
        if ((startHour >= nightStart && startHour < dayEnd) ||
            endHour <= nightEnd) {
            const nightHours = Math.min(totalHours, endHour - startHour);
            totalPrice += nightHours * nightRate;
            totalHours -= nightHours;
        }
        else {
            // Apply out of working hours rate
            const outOfWorkingHours = Math.min(totalHours, endHour - startHour);
            totalPrice += outOfWorkingHours * outOfWorkingHoursRate;
            totalHours -= outOfWorkingHours;
        }
    }
    return Math.round(totalPrice * 1000) / 1000;
}
function isSchemaTypeArray(schemaType) {
    return schemaType instanceof mongoose_1.Schema.Types.Array;
}
function isSchemaTypeObjectId(schemaType) {
    return schemaType instanceof mongoose_1.Schema.Types.ObjectId;
}
function isRefField(schemaType) {
    // Check if it's a direct ObjectId reference
    if (isSchemaTypeObjectId(schemaType) &&
        schemaType.options &&
        typeof schemaType.options.ref === "string") {
        return true;
    }
    // Check if it's an array of ObjectIds
    if (isSchemaTypeArray(schemaType) &&
        isSchemaTypeObjectId(schemaType.caster) &&
        schemaType.caster.options &&
        typeof schemaType.caster.options.ref === "string") {
        return true;
    }
    return false;
}
// Utility function to get reference fields from a schema
function getReferenceFields(schema) {
    const refFields = [];
    schema.eachPath((path, type) => {
        // @ts-ignore
        if (isRefField(type)) {
            refFields.push(path);
        }
    });
    return refFields;
}
function getIndexedFields(schema) {
    const indexes = schema.indexes();
    const indexedFields = [];
    indexes.forEach((index) => {
        const fields = Object.keys(index[0]);
        indexedFields.push(...fields);
    });
    return indexedFields;
}
function processReferences(data_1, schema_1, models_1) {
    return __awaiter(this, arguments, void 0, function* (data, schema, models, userId = undefined) {
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
                        yield processNestedReferences(item, fieldSchema, models);
                        const filter = {};
                        indexedFields.forEach((indexField) => {
                            if (item[indexField] !== undefined) {
                                filter[indexField] = item[indexField];
                            }
                        });
                        try {
                            const existingDoc = yield model.findOne(filter);
                            if (existingDoc) {
                                data[field][i] = existingDoc._id;
                            }
                            else {
                                const newDoc = yield model.create(item);
                                data[field][i] = newDoc._id;
                            }
                        }
                        catch (error) {
                            console.error(`Error processing item in array for field ${field}:`, error);
                        }
                    }
                    else if (typeof item === "string") {
                        continue;
                    }
                }
                const bulkOps = data[field].map((item) => ({
                    updateOne: {
                        filter: { _id: item },
                        update: { $set: { _id: item } },
                        upsert: true,
                    },
                }));
                try {
                    yield model.bulkWrite(bulkOps);
                }
                catch (error) {
                    console.error(`Error in bulk operation for field ${field}:`, error);
                }
            }
            else if (typeof data[field] === "object" && data[field] !== null) {
                yield processNestedReferences(data[field], fieldSchema, models, userId);
                const indexedFields = getIndexedFields(fieldSchema);
                const query = {};
                indexedFields.forEach((indexField) => {
                    if (data[field][indexField] !== undefined) {
                        query[indexField] = data[field][indexField];
                    }
                });
                try {
                    const existingDoc = yield model.findOne(query);
                    if (existingDoc) {
                        data[field] = existingDoc._id;
                    }
                    else {
                        const doc = yield model.create(data[field]);
                        data[field] = doc._id;
                    }
                }
                catch (error) {
                    console.error(`Error processing document for field ${field}:`, error);
                }
            }
            else if (typeof data[field] === "string") {
                continue;
            }
        }
        if (userId) {
            data.createdBy = userId;
        }
        return data;
    });
}
function processNestedReferences(data, schema, models, userId) {
    return __awaiter(this, void 0, void 0, function* () {
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
                        yield processNestedReferences(item, fieldSchema, models);
                        const filter = {};
                        indexedFields.forEach((indexField) => {
                            if (item[indexField] !== undefined) {
                                filter[indexField] = item[indexField];
                            }
                        });
                        try {
                            const existingDoc = yield model.findOne(filter);
                            if (existingDoc) {
                                data[field][i] = existingDoc._id;
                            }
                            else {
                                const newDoc = yield model.create(item);
                                data[field][i] = newDoc._id;
                            }
                        }
                        catch (error) {
                            console.error(`Error processing item in array for field ${field}:`, error);
                        }
                    }
                    else if (typeof item === "string") {
                        continue;
                    }
                }
            }
            else if (typeof data[field] === "object" && data[field] !== null) {
                yield processNestedReferences(data[field], fieldSchema, models);
                const indexedFields = getIndexedFields(fieldSchema);
                const query = {};
                indexedFields.forEach((indexField) => {
                    if (data[field][indexField] !== undefined) {
                        query[indexField] = data[field][indexField];
                    }
                });
                try {
                    const existingDoc = yield model.findOne(query);
                    if (existingDoc) {
                        data[field] = existingDoc._id;
                    }
                    else {
                        const doc = yield model.create(data[field]);
                        data[field] = doc._id;
                    }
                }
                catch (error) {
                    console.error(`Error processing document for field ${field}:`, error);
                }
            }
            else if (typeof data[field] === "string") {
                continue;
            }
        }
    });
}
