import { z } from "zod";
import { ChatTypeEnum } from "../enums";
import { idPattern } from "./common.zod";

export const notificationZodSchema = z.object({
  userId: z.string().regex(idPattern, "Invalid userId"),
  ticketId: z.string().regex(idPattern, "Invalid ticketId"),
  unreadChatMessages: z.array(
    z.string().regex(idPattern, "Invalid chatMessageId")
  ),
});

export const messageZodSchema = z.object({
  ticketId: z.string().regex(idPattern, "Invalid ticketId"),
  userId: z.string().regex(idPattern, "Invalid userId"),
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
