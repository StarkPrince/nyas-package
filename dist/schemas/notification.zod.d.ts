import { z } from "zod";
export declare const notificationZodSchema: z.ZodObject<{
    title: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    title: string;
}, {
    message: string;
    title: string;
}>;
export type NotificationType = z.infer<typeof notificationZodSchema>;
