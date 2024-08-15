"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketChatZodSchema = exports.messageZodSchema = exports.notificationZodSchema = void 0;
const zod_1 = require("zod");
const enum_1 = require("../types/enum");
const common_zod_1 = require("./common.zod");
exports.notificationZodSchema = zod_1.z.object({
    userId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid userId"),
    ticketId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid ticketId"),
    unreadChatMessages: zod_1.z.array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid chatMessageId")),
});
exports.messageZodSchema = zod_1.z.object({
    ticketId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid ticketId"),
    userId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid userId"),
    chatType: zod_1.z.nativeEnum(enum_1.ChatTypeEnum),
    data: zod_1.z.string(),
    size: zod_1.z.number().nullable(),
});
exports.ticketChatZodSchema = zod_1.z.object({
    ticketId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid ticketId"),
    participants: zod_1.z.array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid userId")),
    chatMessages: zod_1.z.array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid chatMessageId")),
});
