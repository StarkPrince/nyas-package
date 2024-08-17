"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensionZodSchema = exports.communicationZodSchema = exports.documentZodSchema = exports.siteAddressZodSchema = exports.scheduleZodSchema = exports.billingDetailZodSchema = exports.addressZodSchema = exports.contactDetailZodSchema = exports.idPattern = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.idPattern = /^[a-f\d]{24}$/i;
exports.contactDetailZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name cannot be blank"),
    email: zod_1.z.string().email().min(1, "Email cannot be blank"),
    phoneNumber: zod_1.z.string().min(1, "Phone number cannot be blank"),
});
exports.addressZodSchema = zod_1.z.object({
    line1: zod_1.z.string().min(1, "Address line 1 cannot be blank"),
    line2: zod_1.z.string().optional(),
    city: zod_1.z.string().min(1, "City cannot be blank"),
    country: zod_1.z.nativeEnum(enums_1.CountryEnum),
});
exports.billingDetailZodSchema = zod_1.z
    .object({
    type: zod_1.z.nativeEnum(enums_1.BillingTypeEnum),
    additionalRates: zod_1.z.array(zod_1.z.object({
        hours: zod_1.z.number().nonnegative(),
        rate: zod_1.z.number().nonnegative(),
    })),
    country: zod_1.z.nativeEnum(enums_1.CountryEnum),
    currency: zod_1.z.nativeEnum(enums_1.CurrencyEnum),
    outOfWorkingHoursRate: zod_1.z.number().nonnegative(),
    nightRate: zod_1.z.number().nonnegative(),
})
    .strip();
exports.scheduleZodSchema = zod_1.z
    .object({
    day: zod_1.z.string().min(1, "Day cannot be blank"),
    starttime: zod_1.z
        .string()
        .min(1, "Start time cannot be blank")
        .refine((time) => !isNaN(Date.parse(`1970-01-01T${time}Z`)), "Invalid start time format"),
    endtime: zod_1.z
        .string()
        .min(1, "End time cannot be blank")
        .refine((time) => !isNaN(Date.parse(`1970-01-01T${time}Z`)), "Invalid end time format"),
})
    .strip();
exports.siteAddressZodSchema = zod_1.z
    .object({
    cageNumber: zod_1.z.string().optional(),
    coloDetails: zod_1.z.string().optional(),
})
    .strip();
exports.documentZodSchema = zod_1.z
    .object({
    projectDescription: zod_1.z
        .string()
        .min(1, "Project description cannot be blank"),
    MOPs: zod_1.z.string().min(1, "MOPs cannot be blank"),
    SOWUpload: zod_1.z.string().min(1, "SOW Upload cannot be blank"),
})
    .strip();
exports.communicationZodSchema = zod_1.z
    .object({
    consumerPortal: zod_1.z.object({
        username: zod_1.z.string().min(1, "Username cannot be blank"),
        password: zod_1.z.string().min(1, "Password cannot be blank"),
        notes: zod_1.z.string().optional(),
    }),
    communication: zod_1.z.array(zod_1.z.string().min(1, "Communication detail cannot be blank")),
})
    .strip();
exports.extensionZodSchema = zod_1.z
    .object({
    subticketId: zod_1.z.string().regex(exports.idPattern, "Invalid field Engineer ID"),
    status: zod_1.z.nativeEnum(enums_1.ExtensionStatusEnum),
    type: zod_1.z.nativeEnum(enums_1.BillingTypeEnum),
    reason: zod_1.z.string().min(1, "Reason cannot be blank"),
    comments: zod_1.z.string().min(1, "Comments cannot be blank"),
    duration: zod_1.z.number().nonnegative(),
    startTime: zod_1.z
        .string()
        .min(1, "Start time cannot be blank")
        .refine((time) => !isNaN(Date.parse(`1970-01-01T${time}Z`)), "Invalid start time format"),
    endTime: zod_1.z
        .string()
        .min(1, "End time cannot be blank")
        .refine((time) => !isNaN(Date.parse(`1970-01-01T${time}Z`)), "Invalid start time format"),
})
    .strip();
