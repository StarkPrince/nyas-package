import { z } from "zod";

// either there should be email and password or serverAuthCode // write a refine function for this
export const LoginZodSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }).optional(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .optional(),
    serverAuthCode: z.string().optional(),
  })
  .refine(
    (data) => {
      if ((data.email && data.password) || data.serverAuthCode) {
        return true;
      }
      return false;
    },
    { message: "Either email and password or serverAuthCode is required." }
  );

export const ForgotPasswordZodSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

export const ResetPasswordZodSchema = z.object({
  otp: z.string().min(1, { message: "OTP is required." }),
  newPassword: z
    .string()
    .min(6, { message: "New password must be at least 6 characters long." }),
  email: z.string().email({ message: "Invalid email address." }),
});

export type ResetPasswordType = z.infer<typeof ResetPasswordZodSchema>;
export type LoginType = z.infer<typeof LoginZodSchema>;
export type ForgotPasswordType = z.infer<typeof ForgotPasswordZodSchema>;
