import { z } from "zod";

export const LoginZodSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
  })
  .strip();

export const ForgotPasswordZodSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
  })
  .strip();

export const ResetPasswordZodSchema = z
  .object({
    otp: z.string().min(1, { message: "OTP is required." }),
    newPassword: z
      .string()
      .min(6, { message: "New password must be at least 6 characters long." }),
    email: z.string().email({ message: "Invalid email address." }),
  })
  .strip();

export type ResetPasswordType = z.infer<typeof ResetPasswordZodSchema>;
export type LoginType = z.infer<typeof LoginZodSchema>;
export type ForgotPasswordType = z.infer<typeof ForgotPasswordZodSchema>;
