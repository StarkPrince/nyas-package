import { z } from "zod";
import { SubTicketStatusEnum } from "../types/enum";
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

export const subticketStatusZodSchema = z
  .object({
    status: z.nativeEnum(SubTicketStatusEnum),
    createdBy: z.string().regex(idPattern, "Invalid User ID"),
  })
  .strip();

export const subticketZodSchema = z
  .object({
    ticketId: z.string().regex(idPattern, "Invalid ticket Id"),
    number: z.string(),
    vendorContractId: z.string().regex(idPattern, "Invalid Vendor Contract ID"),
    schedule: z.string().regex(idPattern, "Invalid Schedule ID"),
    statuses: z.array(subticketStatusZodSchema),
    SLA: z.number(),
    fieldEngineer: z.string().regex(idPattern, "Invalid Field Engineer ID"),
    extensions: z.array(extensionZodSchema).optional(),
    feUpdates: z.array(fieldEngineerStatusZodSchema).refine(
      (updates) => {
        const checkinCount = updates.filter(
          (update) => update.workStatus === "checkin"
        ).length;
        const checkoutCount = updates.filter(
          (update) => update.workStatus === "checkout"
        ).length;
        return checkinCount <= 1 && checkoutCount <= 1;
      },
      {
        message: "There can only be one checkin and one checkout event.",
      }
    ),
  })
  .strip();

export const subticketUpdateZodSchema = z
  .object({
    status: z.nativeEnum(SubTicketStatusEnum),
  })
  .strip();

export type SubTicketType = z.infer<typeof subticketZodSchema>;
