import { z } from "zod";
import { ChatTypeEnum } from "../enums";
import { idPattern } from "./common.zod";

export const notificationZodSchema = z
  .object({
    userId: z.string(),
    chatId: z.string(),
    unreadChatMessages: z.number(),
  })
  .strip();

export const messageZodSchema = z.object({
  chatType: z.nativeEnum(ChatTypeEnum),
  data: z.string(),
  size: z.number().nullable(),
});

export const ticketChatZodSchema = z.object({
  ticketId: z.string().regex(idPattern, "Invalid ticketId"),
  participants: z.array(z.string().regex(idPattern, "Invalid userId")),
  chatMessages: z.array(z.string().regex(idPattern, "Invalid chatMessageId")),
});

export type NotificationType = z.infer<typeof notificationZodSchema>;
export type MessageType = z.infer<typeof messageZodSchema>;
export type TicketChatType = z.infer<typeof ticketChatZodSchema>;
