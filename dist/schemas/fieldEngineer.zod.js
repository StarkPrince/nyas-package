"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkedInZodSchema = exports.fieldEngineerUpdateLocationZodSchema = exports.fieldEngineerGetSubTicketsZodSchema = exports.fieldEngineerGetTicketsZodSchema = exports.cancelSubticketZodSchema = exports.fieldEngineerStatusZodSchema = exports.fieldEngineerCreationZodSchema = exports.feUserCreationZodSchema = exports.fieldEngineerZodSchema = exports.locationZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
const ticket_zod_1 = require("./ticket.zod");
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
    rating: zod_1.z
        .number()
        .min(1, "Rating cannot be less than 1")
        .max(5, "Rating cannot be more than 5")
        .default(5),
    loginTokens: zod_1.z.array(zod_1.z.string().min(1, "Token cannot be blank")).optional(),
    devices: zod_1.z
        .array(zod_1.z.string().min(1, "Device cannot be blank"))
        .default([])
        .optional(),
})
    .strip();
exports.feUserCreationZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name cannot be blank"),
    email: zod_1.z.string().email("Invalid email address"),
    phoneNumber: zod_1.z.string().min(1, "Phone number cannot be blank"),
    password: zod_1.z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .optional(),
});
exports.fieldEngineerCreationZodSchema = zod_1.z
    .object({
    user: exports.feUserCreationZodSchema,
    vendorContracts: zod_1.z
        .array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid vendor ID"))
        .optional(),
    location: exports.locationZodSchema.optional(),
    tickets: zod_1.z.array(ticket_zod_1.ticketZodSchema).optional().default([]),
    subtickets: zod_1.z
        .array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid subticket Id"))
        .optional()
        .default([]),
    address: common_zod_1.addressZodSchema,
    yearsOfExperience: zod_1.z.number().optional().default(0),
    rating: zod_1.z
        .number()
        .min(1, "Rating cannot be less than 1")
        .max(5, "Rating cannot be more than 5")
        .default(5),
    loginTokens: zod_1.z.array(zod_1.z.string().min(1, "Token cannot be blank")).optional(),
})
    .strip();
exports.fieldEngineerStatusZodSchema = zod_1.z
    .object({
    workStatus: zod_1.z.nativeEnum(enums_1.FieldEngineerWorkStatusEnum),
    location: exports.locationZodSchema,
})
    .strip();
exports.cancelSubticketZodSchema = zod_1.z.object({
    subticketId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid subticket ID"),
    reason: zod_1.z.string().min(1, "Reason cannot be blank"),
    comments: zod_1.z.string().min(1, "Comments cannot be blank"),
});
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
    location: exports.locationZodSchema,
    event: zod_1.z.nativeEnum(enums_1.FieldEngineerWorkStatusEnum),
})
    .strip();
exports.checkedInZodSchema = zod_1.z.object({
    location: exports.locationZodSchema,
    subticketId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid user Id"),
});
