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
    email: string;
    password: string;
    status: UserStatusEnum;
    name: string;
    role: UserRolesEnum;
    image?: string | undefined;
    phoneNumber?: string | undefined;
    username?: string | undefined;
    about?: string | undefined;
}, {
    email: string;
    password: string;
    name: string;
    image?: string | undefined;
    status?: UserStatusEnum | undefined;
    phoneNumber?: string | undefined;
    username?: string | undefined;
    role?: UserRolesEnum | undefined;
    about?: string | undefined;
}>, {
    email: string;
    password: string;
    status: UserStatusEnum;
    name: string;
    role: UserRolesEnum;
    image?: string | undefined;
    phoneNumber?: string | undefined;
    username?: string | undefined;
    about?: string | undefined;
}, {
    email: string;
    password: string;
    name: string;
    image?: string | undefined;
    status?: UserStatusEnum | undefined;
    phoneNumber?: string | undefined;
    username?: string | undefined;
    role?: UserRolesEnum | undefined;
    about?: string | undefined;
}>;
export type UserType = z.infer<typeof userZodSchema>;
