import { z } from "zod";
import { SubTicketStatusEnum } from "../enums";
import { extensionZodSchema, idPattern } from "./common.zod";
import { fieldEngineerStatusZodSchema } from "./fieldEngineer.zod";

const validStatusOrder = [
  "assign-pending",
  "fe-pending",
  "approval-pending",
  "ongoing",
  "draft",
  "completed",
  "pending",
] as const;

export const subticketStatusZodSchema = z.object({
  status: z.nativeEnum(SubTicketStatusEnum),
  reason: z.string().optional(),
  comments: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z
    .string()
    .refine((id) => idPattern.test(id), {
      message: "Invalid user Id",
    })
    .optional(),
  updatedBy: z
    .string()
    .refine((id) => idPattern.test(id), {
      message: "Invalid user Id",
    })
    .optional(),
});

export const subticketZodSchema = z.object({
  ticketId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid ticket Id",
  }),
  number: z.string(),
  vendorContractId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid vendor contract Id",
  }),
  schedule: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid schedule Id",
  }),
  statuses: z.array(subticketStatusZodSchema),
  SLA: z.number(),
  fieldEngineer: z
    .string()
    .refine((id) => idPattern.test(id), {
      message: "Invalid vendor contract Id",
    })
    .optional(),
  extensions: z.array(extensionZodSchema).optional(),
  feUpdates: z.array(fieldEngineerStatusZodSchema).optional(),
  tasks: z.array(z.string()).optional().default([]),
});

export const subticketUpdateZodSchema = z.object({
  status: z.nativeEnum(SubTicketStatusEnum),
});

export const rejectedSubticketZodSchema = z.object({
  subticketId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid subticket Id",
  }),
  reason: z.string(),
  comments: z.string(),
  fieldEngineer: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid fieldEngineer Id",
  }),
});

export type SubTicketType = z.infer<typeof subticketZodSchema>;
export type SubTicketStatusType = z.infer<typeof subticketStatusZodSchema>;
export type RejectedSubticketType = z.infer<typeof rejectedSubticketZodSchema>;
