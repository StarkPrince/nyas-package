"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginZodSchema = exports.phoneNumberUpdateZodSchema = exports.userUpdateZodSchema = exports.userZodSchema = exports.unavailabilityArrayZodSchema = exports.unavailabilityZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,32}$/;
exports.unavailabilityZodSchema = zod_1.z.object({
    from: zod_1.z
        .string()
        .min(1, "Start time cannot be blank")
        .refine((time) => !isNaN(Date.parse(time)), "Invalid start time format"),
    to: zod_1.z
        .string()
        .min(1, "End time cannot be blank")
        .refine((time) => !isNaN(Date.parse(time)), "Invalid end time format"),
    reason: zod_1.z.string().min(1, "Reason cannot be blank"),
});
exports.unavailabilityArrayZodSchema = zod_1.z.array(exports.unavailabilityZodSchema);
exports.userZodSchema = zod_1.z
    .object({
    username: zod_1.z.string().optional(),
    email: zod_1.z.string().email().min(1, "Email cannot be blank"),
    password: zod_1.z.string().refine((id) => passwordPattern.test(id), {
        message: "Invalid password",
    }),
    role: zod_1.z.nativeEnum(enums_1.UserRolesEnum).default(enums_1.UserRolesEnum.FIELD_ENGINEER),
    phoneNumber: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1, "Name cannot be blank"),
    about: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    status: zod_1.z.nativeEnum(enums_1.UserStatusEnum).default(enums_1.UserStatusEnum.ACTIVE),
    devices: zod_1.z
        .array(zod_1.z.string().min(1, "Device cannot be blank"))
        .default([])
        .optional(),
    timezone: zod_1.z.enum(enums_1.Timezones).default("Etc/GMT"),
    unavailability: exports.unavailabilityArrayZodSchema.optional(),
})
    .refine((data) => data.email || data.phoneNumber, {
    message: "At least one of email or phoneNumber must be provided",
    path: ["email", "phoneNumber"],
});
exports.userUpdateZodSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    about: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    timezone: zod_1.z.enum(enums_1.Timezones).optional(),
});
exports.phoneNumberUpdateZodSchema = zod_1.z.object({
    phoneNumber: zod_1.z.string().min(1, "Phone number cannot be blank"),
    otp: zod_1.z.string().min(1, "OTP cannot be blank"),
});
exports.userLoginZodSchema = zod_1.z.object({
    email: zod_1.z.string().email().min(1, "Email cannot be blank"),
    password: zod_1.z.string().min(1, "Password cannot be blank"),
});
