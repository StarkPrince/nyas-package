import { z } from "zod";

export const notificationZodSchema = z
  .object({
    title: z.string().min(1, { message: "Title is required." }),
    message: z.string().min(1, { message: "Message is required." }),
  })
  .strip();

export type NotificationType = z.infer<typeof notificationZodSchema>;
