"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordZodSchema = exports.ForgotPasswordZodSchema = exports.LoginZodSchema = void 0;
const zod_1 = require("zod");
exports.LoginZodSchema = zod_1.z
    .object({
    email: zod_1.z.string().email({ message: "Invalid email address." }),
    password: zod_1.z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." }),
})
    .strip();
exports.ForgotPasswordZodSchema = zod_1.z
    .object({
    email: zod_1.z.string().email({ message: "Invalid email address." }),
})
    .strip();
exports.ResetPasswordZodSchema = zod_1.z
    .object({
    otp: zod_1.z.string().min(1, { message: "OTP is required." }),
    newPassword: zod_1.z
        .string()
        .min(6, { message: "New password must be at least 6 characters long." }),
    email: zod_1.z.string().email({ message: "Invalid email address." }),
})
    .strip();
