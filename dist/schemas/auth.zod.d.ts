import { z } from "zod";
export declare const userLoginZodSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const forgotPasswordZodSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const resetPasswordZodSchema: z.ZodObject<{
    otp: z.ZodString;
    newPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    otp: string;
    newPassword: string;
}, {
    otp: string;
    newPassword: string;
}>;
export type ResetPasswordType = z.infer<typeof resetPasswordZodSchema>;
export type UserLoginType = z.infer<typeof userLoginZodSchema>;
export type ForgotPasswordType = z.infer<typeof forgotPasswordZodSchema>;
