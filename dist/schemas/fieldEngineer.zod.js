"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldEngineerUpdateLocationZodSchema = exports.fieldEngineerGetSubTicketsZodSchema = exports.fieldEngineerGetTicketsZodSchema = exports.fieldEngineerStatusZodSchema = exports.fieldEngineerCreationZodSchema = exports.fieldEngineerZodSchema = exports.locationZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
const ticket_zod_1 = require("./ticket.zod");
const user_zod_1 = require("./user.zod");
exports.locationZodSchema = zod_1.z.object({
    lat: zod_1.z.number(),
    long: zod_1.z.number(),
});
exports.fieldEngineerZodSchema = zod_1.z
    .object({
    user: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid user ID"),
    vendorContracts: zod_1.z
        .array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid vendor ID"))
        .default([]),
    location: exports.locationZodSchema.optional(),
    tickets: zod_1.z.array(ticket_zod_1.ticketZodSchema).default([]),
    subtickets: zod_1.z
        .array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid subticket Id"))
        .default([]),
    address: common_zod_1.addressZodSchema,
    yearsOfExperience: zod_1.z.number().default(0),
    rating: zod_1.z.number().default(5),
    loginTokens: zod_1.z.array(zod_1.z.string().min(1, "Token cannot be blank")).optional(),
})
    .strip();
exports.fieldEngineerCreationZodSchema = zod_1.z
    .object({
    user: user_zod_1.userZodSchema,
    vendorContracts: zod_1.z
        .array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid vendor ID"))
        .default([]),
    location: exports.locationZodSchema.optional(),
    tickets: zod_1.z.array(ticket_zod_1.ticketZodSchema).default([]),
    subtickets: zod_1.z
        .array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid subticket Id"))
        .default([]),
    address: common_zod_1.addressZodSchema,
    yearsOfExperience: zod_1.z.number().default(0),
    rating: zod_1.z.number().default(5),
    loginTokens: zod_1.z.array(zod_1.z.string().min(1, "Token cannot be blank")).optional(),
})
    .strip();
exports.fieldEngineerStatusZodSchema = zod_1.z
    .object({
    workStatus: zod_1.z.nativeEnum(enums_1.FieldEngineerWorkStatusEnum),
    location: exports.locationZodSchema,
    timestamp: zod_1.z.string().min(1, "Timestamp cannot be blank"),
})
    .strip();
exports.fieldEngineerGetTicketsZodSchema = zod_1.z
    .object({
    input_date: zod_1.z
        .string()
        .min(1, "Input date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
})
    .strip();
exports.fieldEngineerGetSubTicketsZodSchema = zod_1.z
    .object({
    input_date: zod_1.z
        .string()
        .min(1, "Input date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
})
    .strip();
exports.fieldEngineerUpdateLocationZodSchema = zod_1.z
    .object({
    subticketId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid user Id"),
    lat: zod_1.z.number(),
    long: zod_1.z.number(),
    event: zod_1.z.nativeEnum(enums_1.FieldEngineerWorkStatusEnum),
})
    .strip();
