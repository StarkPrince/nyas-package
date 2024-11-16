import { z } from "zod";
import { Timezones, UserRolesEnum, UserStatusEnum } from "../enums";

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,32}$/;

export const userZodSchema = z
  .object({
    username: z.string().optional(),
    email: z.string().email().min(1, "Email cannot be blank"),
    password: z.string().refine((id) => passwordPattern.test(id), {
      message: "Invalid password",
    }),
    role: z.nativeEnum(UserRolesEnum).default(UserRolesEnum.FIELD_ENGINEER),
    phoneNumber: z.string().optional(),
    name: z.string().min(1, "Name cannot be blank"),
    about: z.string().optional(),
    image: z.string().optional(),
    status: z.nativeEnum(UserStatusEnum).default(UserStatusEnum.ACTIVE),
    devices: z
      .array(z.string().min(1, "Device cannot be blank"))
      .default([])
      .optional(),
    timezone: z.enum(Timezones).default("Etc/GMT"),
  })
  .refine((data) => data.email || data.phoneNumber, {
    message: "At least one of email or phoneNumber must be provided",
    path: ["email", "phoneNumber"],
  });

export const userUpdateZodSchema = z.object({
  name: z.string().optional(),
  about: z.string().optional(),
  image: z.string().optional(),
  timezone: z.enum(Timezones).optional(),
});

export const phoneNumberUpdateZodSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number cannot be blank"),
  otp: z.string().min(1, "OTP cannot be blank"),
});

export const userLoginZodSchema = z.object({
  email: z.string().email().min(1, "Email cannot be blank"),
  password: z.string().min(1, "Password cannot be blank"),
});

export type UserType = z.infer<typeof userZodSchema>;
