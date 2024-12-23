import { z, ZodIssueCode } from "zod";
import {
  SubticketResponseEnum,
  SubTicketStatusEnum,
  SubticketUpdateEnum,
} from "../enums";
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

export const fieldEngineerInvitationZodSchema = z.object({
  fieldEngineerId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid fieldEngineer Id",
  }),
  vendorContractId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid vendor contract Id",
  }),
  status: z
    .nativeEnum(SubticketResponseEnum)
    .default(SubticketResponseEnum.PENDING),
  responseAt: z.date().optional(),
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
  fieldEngineerInvitations: z.array(fieldEngineerInvitationZodSchema),
});

export const subticketUpdateZodSchema = z
  .object({
    update: z.nativeEnum(SubticketUpdateEnum),
    status: z.nativeEnum(SubTicketStatusEnum).optional(),
    schedule: scheduleZodSchema.optional(),
    fieldEngineerId: z
      .string()
      .refine((id) => idPattern.test(id), {
        message: "Invalid fieldEngineer Id",
      })
      .optional()
      .nullable(),
    vendorContractId: z
      .string()
      .refine((id) => idPattern.test(id), {
        message: "Invalid vendor contract Id",
      })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.update === SubticketUpdateEnum.SCHEDULE && !data.schedule) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        path: ["schedule"],
        message: "Schedule must be provided when updating schedule.",
      });
    }
    if (data.update === SubticketUpdateEnum.STATUS && !data.fieldEngineerId) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        path: ["fieldEngineerId"],
        message: "FieldEngineerId must be provided when updating the status",
      });
    }
    if (
      data.update === SubticketUpdateEnum.FIELD_ENGINEER &&
      ((data.fieldEngineerId && !data.vendorContractId) ||
        (!data.fieldEngineerId && data.vendorContractId))
    ) {
      if (!data.fieldEngineerId || !data.vendorContractId) {
        ctx.addIssue({
          code: ZodIssueCode.custom,
          path: ["fieldEngineerId", "vendorContractId"],
          message:
            "FieldEngineerId and vendorContractId must be provided together or not at all",
        });
      }
    }
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
export type FieldEngineerInvitationType = z.infer<
  typeof fieldEngineerInvitationZodSchema
>;
export type SubticketUpdateType = z.infer<typeof subticketUpdateZodSchema>;
export type OverriddenSubticketType = SubTicketType & {
  number?: string;
};
