"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationZodSchema = void 0;
const zod_1 = require("zod");
exports.notificationZodSchema = zod_1.z
    .object({
    title: zod_1.z.string().min(1, { message: "Title is required." }),
    message: zod_1.z.string().min(1, { message: "Message is required." }),
})
    .strip();
