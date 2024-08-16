import { z } from "zod";
export declare const LoginZodSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
}, {
    password: string;
    email: string;
}>;
export declare const ForgotPasswordZodSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const ResetPasswordZodSchema: z.ZodObject<{
    otp: z.ZodString;
    newPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    otp: string;
    newPassword: string;
}, {
    otp: string;
    newPassword: string;
}>;
export type ResetPasswordType = z.infer<typeof ResetPasswordZodSchema>;
export type LoginType = z.infer<typeof LoginZodSchema>;
export type ForgotPasswordType = z.infer<typeof ForgotPasswordZodSchema>;
