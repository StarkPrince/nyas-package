import { z } from "zod";
export declare const LoginZodSchema: z.ZodEffects<z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    serverAuthCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    password?: string | undefined;
    serverAuthCode?: string | undefined;
}, {
    email?: string | undefined;
    password?: string | undefined;
    serverAuthCode?: string | undefined;
}>, {
    email?: string | undefined;
    password?: string | undefined;
    serverAuthCode?: string | undefined;
}, {
    email?: string | undefined;
    password?: string | undefined;
    serverAuthCode?: string | undefined;
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
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    otp: string;
    newPassword: string;
}, {
    email: string;
    otp: string;
    newPassword: string;
}>;
export type ResetPasswordType = z.infer<typeof ResetPasswordZodSchema>;
export type LoginType = z.infer<typeof LoginZodSchema>;
export type ForgotPasswordType = z.infer<typeof ForgotPasswordZodSchema>;
