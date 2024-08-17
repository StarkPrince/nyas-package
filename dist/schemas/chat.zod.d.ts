import { z } from "zod";
import { ChatTypeEnum } from "../enums";
export declare const notificationZodSchema: z.ZodObject<{
    userId: z.ZodString;
    chatId: z.ZodString;
    unreadChatMessages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    userId: string;
    chatId: string;
    unreadChatMessages: number;
}, {
    userId: string;
    chatId: string;
    unreadChatMessages: number;
}>;
export declare const messageZodSchema: z.ZodObject<{
    ticketId: z.ZodString;
    userId: z.ZodString;
    chatType: z.ZodNativeEnum<typeof ChatTypeEnum>;
    data: z.ZodString;
    size: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    ticketId: string;
    chatType: ChatTypeEnum;
    data: string;
    size: number | null;
}, {
    userId: string;
    ticketId: string;
    chatType: ChatTypeEnum;
    data: string;
    size: number | null;
}>;
export declare const ticketChatZodSchema: z.ZodObject<{
    ticketId: z.ZodString;
    participants: z.ZodArray<z.ZodString, "many">;
    chatMessages: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    ticketId: string;
    participants: string[];
    chatMessages: string[];
}, {
    ticketId: string;
    participants: string[];
    chatMessages: string[];
}>;
export type NotificationType = z.infer<typeof notificationZodSchema>;
export type MessageType = z.infer<typeof messageZodSchema>;
export type TicketChatType = z.infer<typeof ticketChatZodSchema>;
