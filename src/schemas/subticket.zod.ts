import { z } from "zod";
import { SubTicketStatusEnum } from "../enums";
import { extensionZodSchema, idPattern, scheduleZodSchema } from "./common.zod";
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

export const subticketStatusZodSchema = z
  .object({
    status: z.nativeEnum(SubTicketStatusEnum),
    reason: z.string().optional(),
    comments: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    createdBy: z.string().regex(idPattern, "Invalid User ID").optional(),
    updatedBy: z.string().regex(idPattern, "Invalid User ID").optional(),
  })
  .strip();

export const rejectedSubticketZodSchema = z.object({
  ticketId: z.string().regex(idPattern, "Invalid Ticket ID").optional(),
  number: z.string(),
  schedule: scheduleZodSchema,
  SLA: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.string().regex(idPattern, "Invalid User ID").optional(),
  updatedBy: z.string().regex(idPattern, "Invalid User ID").optional(),
});

export const subticketZodSchema = z
  .object({
    ticketId: z.string().regex(idPattern, "Invalid ticket Id"),
    number: z.string(),
    vendorContractId: z.string().regex(idPattern, "Invalid Vendor Contract ID"),
    schedule: z.string().regex(idPattern, "Invalid Schedule ID"),
    statuses: z.array(subticketStatusZodSchema),
    SLA: z.number(),
    fieldEngineer: z
      .string()
      .regex(idPattern, "Invalid Field Engineer ID")
      .optional(),
    extensions: z.array(extensionZodSchema).optional(),
    feUpdates: z.array(fieldEngineerStatusZodSchema).optional(),
  })
  .strip();

export const subticketUpdateZodSchema = z
  .object({
    status: z.nativeEnum(SubTicketStatusEnum),
  })
  .strip();

export type SubTicketType = z.infer<typeof subticketZodSchema>;
export type SubTicketStatusType = z.infer<typeof subticketStatusZodSchema>;
export type RejectedSubticketType = z.infer<typeof rejectedSubticketZodSchema>;
