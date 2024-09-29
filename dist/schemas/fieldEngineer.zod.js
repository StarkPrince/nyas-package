"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldEngineerWorkStatusZodSchema = exports.fieldEngineerGetSubTicketsZodSchema = exports.cancelSubticketZodSchema = exports.fieldEngineerStatusZodSchema = exports.fieldEngineerRegisterZodSchema = exports.fieldEngineerZodSchema = exports.locationZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
const ticket_zod_1 = require("./ticket.zod");
exports.locationZodSchema = zod_1.z.object({
    lat: zod_1.z.number(),
    long: zod_1.z.number(),
});
exports.fieldEngineerZodSchema = zod_1.z.object({
    user: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid user Id",
    }),
    vendorContracts: zod_1.z
        .array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid vendor contact Id",
    }))
        .default([]),
    tickets: zod_1.z.array(ticket_zod_1.ticketZodSchema).default([]),
    subtickets: zod_1.z
        .array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid subticket Id",
    }))
        .default([]),
    address: common_zod_1.addressZodSchema,
    yearsOfExperience: zod_1.z.number().default(0),
    rating: zod_1.z
        .number()
        .min(1, "Rating cannot be less than 1")
        .max(5, "Rating cannot be more than 5")
        .default(5),
});
exports.fieldEngineerRegisterZodSchema = zod_1.z.object({
    user: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name cannot be blank"),
        email: zod_1.z.string().email("Invalid email address"),
        phoneNumber: zod_1.z.string().min(1, "Phone number cannot be blank"),
        password: zod_1.z
            .string()
            .min(8, "Password must be at least 8 characters long")
            .optional(),
    }),
    address: zod_1.z.object({
        line1: zod_1.z.string().min(1, "Address line 1 cannot be blank"),
        line2: zod_1.z.string().optional(),
        city: zod_1.z.string().min(1, "City cannot be blank"),
        country: zod_1.z.nativeEnum(enums_1.CountryEnum),
        location: zod_1.z.object({
            lat: zod_1.z.number(),
            long: zod_1.z.number(),
        }),
    }),
});
exports.fieldEngineerStatusZodSchema = zod_1.z.object({
    workStatus: zod_1.z.nativeEnum(enums_1.FieldEngineerWorkStatusEnum),
    location: exports.locationZodSchema,
    checkType: zod_1.z.nativeEnum(enums_1.PunctualityEnum).default(enums_1.PunctualityEnum.AUTO),
    approved: zod_1.z.boolean().optional().default(true),
    message: zod_1.z.string().optional(),
});
//* view if to fix this
exports.cancelSubticketZodSchema = zod_1.z.object({
    subticketId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid subticket Id",
    }),
    reason: zod_1.z.string().min(1, "Reason cannot be blank"),
    comments: zod_1.z.string().min(1, "Comments cannot be blank"),
});
exports.fieldEngineerGetSubTicketsZodSchema = zod_1.z.object({
    input_date: zod_1.z
        .string()
        .min(1, "Input date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
});
exports.fieldEngineerWorkStatusZodSchema = zod_1.z
    .object({
    subticketId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid subticket Id",
    }),
    location: exports.locationZodSchema,
    event: zod_1.z.nativeEnum(enums_1.FieldEngineerWorkStatusEnum),
    message: zod_1.z.string().optional(),
    timestamp: zod_1.z.string().optional(),
})
    .refine((data) => {
    // if even is checkedOut then timestamp is required
    if (data.event === enums_1.FieldEngineerWorkStatusEnum.CHECKED_OUT) {
        return !!data.timestamp;
    }
    return true;
}, {
    message: "Timestamp is required for checkedOut event",
});
