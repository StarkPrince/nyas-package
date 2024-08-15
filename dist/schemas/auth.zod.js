"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordZodSchema = exports.forgotPasswordZodSchema = exports.userLoginZodSchema = void 0;
const zod_1 = require("zod");
exports.userLoginZodSchema = zod_1.z
    .object({
    email: zod_1.z.string().email({ message: "Invalid email address." }),
    password: zod_1.z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." }),
})
    .strip();
exports.forgotPasswordZodSchema = zod_1.z
    .object({
    email: zod_1.z.string().email({ message: "Invalid email address." }),
})
    .strip();
exports.resetPasswordZodSchema = zod_1.z
    .object({
    otp: zod_1.z.string().min(1, { message: "OTP is required." }),
    newPassword: zod_1.z
        .string()
        .min(6, { message: "New password must be at least 6 characters long." }),
})
    .strip();
