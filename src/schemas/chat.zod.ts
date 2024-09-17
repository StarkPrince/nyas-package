import { z } from "zod";
import { ChatTypeEnum, ReadStatusEnum } from "../enums";
import { idPattern } from "./common.zod";

export const notificationZodSchema = z
  .object({
    userId: z.string().refine((id) => idPattern.test(id), {
      message: "Invalid user Id",
    }),
    messageId: z.string().refine((id) => idPattern.test(id), {
      message: "Invalid message Id",
    }),
    status: z.nativeEnum(ReadStatusEnum),
  })
  .strip();

export const messageZodSchema = z.object({
  chatType: z.nativeEnum(ChatTypeEnum),
  data: z.string(),
  size: z.number().nullable(),
});

export const ticketChatZodSchema = z.object({
  ticketId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid ticket Id",
  }),
  participants: z.array(
    z.string().refine((id) => idPattern.test(id), {
      message: "Invalid participant Id",
    })
  ),
  chatMessages: z.array(
    z.string().refine((id) => idPattern.test(id), {
      message: "Invalid chat Id",
    })
  ),
});

export type NotificationType = z.infer<typeof notificationZodSchema>;
export type MessageType = z.infer<typeof messageZodSchema>;
export type TicketChatType = z.infer<typeof ticketChatZodSchema>;
