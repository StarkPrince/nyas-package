"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.userZodSchema = zod_1.z
    .object({
    username: zod_1.z.string().optional(),
    email: zod_1.z.string().email().min(1, "Email cannot be blank"),
    password: zod_1.z
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,32}$/, "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character such as @#$!%*?& and must be 8-32 characters long"),
    role: zod_1.z.nativeEnum(enums_1.UserRolesEnum).default(enums_1.UserRolesEnum.FIELD_ENGINEER),
    phoneNumber: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1, "Name cannot be blank"),
    about: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    status: zod_1.z.nativeEnum(enums_1.UserStatusEnum).default(enums_1.UserStatusEnum.Active),
})
    .strip()
    .refine((data) => data.email || data.phoneNumber, {
    message: "At least one of email or phoneNumber must be provided",
    path: ["email", "phoneNumber"],
});
