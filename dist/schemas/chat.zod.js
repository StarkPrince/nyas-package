"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketChatZodSchema = exports.messageZodSchema = exports.notificationZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
exports.notificationZodSchema = zod_1.z
    .object({
    userId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid user Id",
    }),
    messageId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid message Id",
    }),
    status: zod_1.z.nativeEnum(enums_1.ReadStatusEnum),
})
    .strip();
exports.messageZodSchema = zod_1.z.object({
    chatType: zod_1.z.nativeEnum(enums_1.ChatTypeEnum),
    data: zod_1.z.string(),
    size: zod_1.z.number().nullable(),
});
exports.ticketChatZodSchema = zod_1.z.object({
    ticketId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid ticket Id",
    }),
    participants: zod_1.z.array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid participant Id",
    })),
    chatMessages: zod_1.z.array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid chat Id",
    })),
});
