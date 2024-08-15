import { z } from "zod";
import { UserRolesEnum, UserStatusEnum } from "../enums";

export const userZodSchema = z
  .object({
    username: z.string().optional(),
    email: z.string().email().min(1, "Email cannot be blank"),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,32}$/,
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character such as @#$!%*?& and must be 8-32 characters long"
      ),
    role: z.nativeEnum(UserRolesEnum).default(UserRolesEnum.FIELD_ENGINEER),
    phoneNumber: z.string().optional(),
    name: z.string().min(1, "Name cannot be blank"),
    about: z.string().optional(),
    image: z.string().optional(),
    status: z.nativeEnum(UserStatusEnum).default(UserStatusEnum.Active),
  })
  .strip()
  .refine((data) => data.email || data.phoneNumber, {
    message: "At least one of email or phoneNumber must be provided",
    path: ["email", "phoneNumber"],
  });

export const userLoginZodSchema = z
  .object({
    email: z.string().min(1, "Email cannot be blank").email(),
    password: z.string().min(1, "Password cannot be blank"),
    rememberMe: z.boolean().optional().default(false),
  })
  .strip();

export type UserLoginType = z.infer<typeof userLoginZodSchema>;
export type UserType = z.infer<typeof userZodSchema>;
