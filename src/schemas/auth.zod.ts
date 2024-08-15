import { z } from "zod";

export const userLoginZodSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
  })
  .strip();

export const forgotPasswordZodSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
  })
  .strip();

export const resetPasswordZodSchema = z
  .object({
    otp: z.string().min(1, { message: "OTP is required." }),
    newPassword: z
      .string()
      .min(6, { message: "New password must be at least 6 characters long." }),
  })
  .strip();

export type ResetPasswordType = z.infer<typeof resetPasswordZodSchema>;
export type UserLoginType = z.infer<typeof userLoginZodSchema>;
export type ForgotPasswordType = z.infer<typeof forgotPasswordZodSchema>;
