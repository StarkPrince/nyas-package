import { z } from "zod";
import { ChatTypeEnum, ReadStatusEnum } from "../enums";
export declare const notificationZodSchema: z.ZodObject<{
    userId: z.ZodEffects<z.ZodString, string, string>;
    messageId: z.ZodEffects<z.ZodString, string, string>;
    status: z.ZodNativeEnum<typeof ReadStatusEnum>;
}, "strip", z.ZodTypeAny, {
    status: ReadStatusEnum;
    userId: string;
    messageId: string;
}, {
    status: ReadStatusEnum;
    userId: string;
    messageId: string;
}>;
export declare const messageZodSchema: z.ZodObject<{
    chatType: z.ZodNativeEnum<typeof ChatTypeEnum>;
    data: z.ZodString;
    size: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    chatType: ChatTypeEnum;
    data: string;
    size: number | null;
}, {
    chatType: ChatTypeEnum;
    data: string;
    size: number | null;
}>;
export declare const ticketChatZodSchema: z.ZodObject<{
    ticketId: z.ZodEffects<z.ZodString, string, string>;
    participants: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    chatMessages: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
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
