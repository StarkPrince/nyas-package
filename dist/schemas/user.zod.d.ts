import { z } from "zod";
import { UserRolesEnum, UserStatusEnum } from "../enums";
export declare const userZodSchema: z.ZodEffects<z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodDefault<z.ZodNativeEnum<typeof UserRolesEnum>>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    about: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodNativeEnum<typeof UserStatusEnum>>;
}, "strip", z.ZodTypeAny, {
    status: UserStatusEnum;
    password: string;
    email: string;
    role: UserRolesEnum;
    name: string;
    username?: string | undefined;
    phoneNumber?: string | undefined;
    about?: string | undefined;
    image?: string | undefined;
}, {
    password: string;
    email: string;
    name: string;
    status?: UserStatusEnum | undefined;
    username?: string | undefined;
    role?: UserRolesEnum | undefined;
    phoneNumber?: string | undefined;
    about?: string | undefined;
    image?: string | undefined;
}>, {
    status: UserStatusEnum;
    password: string;
    email: string;
    role: UserRolesEnum;
    name: string;
    username?: string | undefined;
    phoneNumber?: string | undefined;
    about?: string | undefined;
    image?: string | undefined;
}, {
    password: string;
    email: string;
    name: string;
    status?: UserStatusEnum | undefined;
    username?: string | undefined;
    role?: UserRolesEnum | undefined;
    phoneNumber?: string | undefined;
    about?: string | undefined;
    image?: string | undefined;
}>;
export type UserType = z.infer<typeof userZodSchema>;
