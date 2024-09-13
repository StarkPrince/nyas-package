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
exports.processNestedReferences = exports.processReferences = exports.getIndexedFields = exports.getReferenceFields = exports.isRefField = exports.isSchemaTypeObjectId = exports.isSchemaTypeArray = exports.createHtmlTemplate = exports.capitalizeWords = exports.getScheduleDuration = exports.getFieldEngineerSuffix = exports.detectScheduleConflict = void 0;
const mongoose_1 = require("mongoose");
const detectScheduleConflict = (schedules) => {
    const conflicts = [];
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
exports.detectScheduleConflict = detectScheduleConflict;
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
    const start = Date.parse(schedule.startdatetime);
    const end = Date.parse(schedule.enddatetime);
    return (end - start) / 1000 / 60;
};
exports.getScheduleDuration = getScheduleDuration;
const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
exports.capitalizeWords = capitalizeWords;
// Utility function to create an HTML email template
const createHtmlTemplate = (title, userName, body, linkText, linkUrl) => {
    return `
    <h1>${title}</h1>
    <p>Hello ${userName},</p>
    <p>${body}</p>
    <a href="${linkUrl}">${linkText}</a>
  `;
};
exports.createHtmlTemplate = createHtmlTemplate;
const isSchemaTypeArray = (schemaType) => {
    return schemaType instanceof mongoose_1.Schema.Types.Array;
};
exports.isSchemaTypeArray = isSchemaTypeArray;
const isSchemaTypeObjectId = (schemaType) => {
    return schemaType instanceof mongoose_1.Schema.Types.ObjectId;
};
exports.isSchemaTypeObjectId = isSchemaTypeObjectId;
const isRefField = (schemaType) => {
    if ((0, exports.isSchemaTypeObjectId)(schemaType) &&
        schemaType.options &&
        typeof schemaType.options.ref === "string") {
        return true;
    }
    if ((0, exports.isSchemaTypeArray)(schemaType) &&
        (0, exports.isSchemaTypeObjectId)(schemaType.caster) &&
        schemaType.caster.options &&
        typeof schemaType.caster.options.ref === "string") {
        return true;
    }
    return false;
};
exports.isRefField = isRefField;
// Utility function to get reference fields from a schema
const getReferenceFields = (schema) => {
    const refFields = [];
    schema.eachPath((path, type) => {
        if ((0, exports.isRefField)(type)) {
            refFields.push(path);
        }
    });
    return refFields;
};
exports.getReferenceFields = getReferenceFields;
const getIndexedFields = (schema) => {
    const indexes = schema.indexes();
    const indexedFields = new Set();
    indexes.forEach((index) => {
        const fields = Object.keys(index[0]);
        fields.forEach((field) => indexedFields.add(field));
    });
    return Array.from(indexedFields);
};
exports.getIndexedFields = getIndexedFields;
const processReferences = (data_1, schema_1, models_1, ...args_1) => __awaiter(void 0, [data_1, schema_1, models_1, ...args_1], void 0, function* (data, schema, models, userId = undefined) {
    const referenceFields = (0, exports.getReferenceFields)(schema);
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
            const indexedFields = (0, exports.getIndexedFields)(fieldSchema);
            for (let i = 0; i < data[field].length; i++) {
                const item = data[field][i];
                if (typeof item === "object" && !item._id) {
                    yield (0, exports.processNestedReferences)(item, fieldSchema, models);
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
            yield (0, exports.processNestedReferences)(data[field], fieldSchema, models, userId);
            const indexedFields = (0, exports.getIndexedFields)(fieldSchema);
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
exports.processReferences = processReferences;
const processNestedReferences = (data, schema, models, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const referenceFields = (0, exports.getReferenceFields)(schema);
    for (const field of referenceFields) {
        const modelEntry = models[field];
        if (!modelEntry) {
            console.error(`No model found for field:2 ${field}`);
            continue;
        }
        const { model, schema: fieldSchema } = modelEntry;
        if (Array.isArray(data[field])) {
            const indexedFields = (0, exports.getIndexedFields)(fieldSchema);
            for (let i = 0; i < data[field].length; i++) {
                const item = data[field][i];
                if (typeof item === "object" && !item._id) {
                    yield (0, exports.processNestedReferences)(item, fieldSchema, models);
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
            yield (0, exports.processNestedReferences)(data[field], fieldSchema, models);
            const indexedFields = (0, exports.getIndexedFields)(fieldSchema);
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
exports.processNestedReferences = processNestedReferences;
