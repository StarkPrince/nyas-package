"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordZodSchema = exports.ForgotPasswordZodSchema = exports.LoginZodSchema = void 0;
const zod_1 = require("zod");
// either there should be email and password or serverAuthCode // write a refine function for this
exports.LoginZodSchema = zod_1.z
    .object({
    email: zod_1.z.string().email({ message: "Invalid email address." }).optional(),
    password: zod_1.z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." })
        .optional(),
    serverAuthCode: zod_1.z.string().optional(),
})
    .refine((data) => {
    if ((data.email && data.password) || data.serverAuthCode) {
        return true;
    }
    return false;
}, { message: "Either email and password or serverAuthCode is required." });
exports.ForgotPasswordZodSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address." }),
});
exports.ResetPasswordZodSchema = zod_1.z.object({
    otp: zod_1.z.string().min(1, { message: "OTP is required." }),
    newPassword: zod_1.z
        .string()
        .min(6, { message: "New password must be at least 6 characters long." }),
    email: zod_1.z.string().email({ message: "Invalid email address." }),
});
