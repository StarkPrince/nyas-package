import { z } from "zod";
import { TaskStatusEnum, TicketStatusEnum } from "../types/enum";
import {
  communicationZodSchema,
  documentZodSchema,
  idPattern,
  scheduleZodSchema,
  siteAddressZodSchema,
} from "./common.zod";

export const taskZodSchema = z
  .object({
    taskName: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    taskDescription: z.string(),
    tools: z.array(z.string()),
    difficultyLevel: z.number(),
    status: z.nativeEnum(TaskStatusEnum),
  })
  .strip();

const fieldEngineerContractZodSchema = z.object({
  fieldEngineerId: z.string().regex(idPattern, "Invalid field engineer Id"),
  vendorContractId: z.string().regex(idPattern, "Invalid vendor contract"),
});

const scheduleFieldEngineerZodSchema = z.object({
  schedule: z.string().regex(idPattern, "Invalid schedule Id"),
  fieldEngineercontracts: z.array(fieldEngineerContractZodSchema).default([]),
});

export const ticketZodSchema = z
  .object({
    number: z.string(),
    chat: z.string().regex(idPattern, "Invalid chat Id"),
    title: z.string(),
    clientContractId: z.string().regex(idPattern, "Invalid contract Id"),
    site: siteAddressZodSchema,
    numberOfEngineers: z.number(),
    SLA: z.number(),
    scheduleFieldEngineers: z.array(scheduleFieldEngineerZodSchema),
    status: z.nativeEnum(TicketStatusEnum),
    teamMembers: z.array(z.string().regex(idPattern, "Invalid team member Id")),
    tasks: z.array(taskZodSchema).optional().default([]),
    document: documentZodSchema.optional(),
    communications: communicationZodSchema.optional(),
    subtickets: z
      .array(z.string().regex(idPattern, "Invalid subticket Id"))
      .default([]),
    createdBy: z.string().regex(idPattern, "Invalid user Id").optional(),
    updatedBy: z.string().regex(idPattern, "Invalid user Id").optional(),
  })
  .strip();

const scheduleFieldEngineerCreationZodSchema = z
  .object({
    schedule: scheduleZodSchema,
    fieldEngineercontracts: z.array(fieldEngineerContractZodSchema).default([]),
  })
  .transform((data) => ({
    ...data,
    fieldEngineercontracts: [],
  }));

export const ticketCreationZodSchema = z
  .object({
    number: z.string(),
    title: z.string(),
    clientContractId: z.string().regex(idPattern, "Invalid contract Id"),
    site: siteAddressZodSchema,
    numberOfEngineers: z.number(),
    SLA: z.number(),
    scheduleFieldEngineers: z.array(scheduleFieldEngineerCreationZodSchema),
    status: z.nativeEnum(TicketStatusEnum).default(TicketStatusEnum.DRAFT),
  })
  .strip();

export const ticketUpdateZodSchema = z
  .object({
    tasks: z.array(taskZodSchema).optional(),
    document: documentZodSchema.optional(),
    communications: communicationZodSchema.optional(),
    scheduleFieldEngineers: z.array(scheduleFieldEngineerZodSchema).optional(),
  })
  .strip();

export type ScheduleFieldEngineerCreationType = z.infer<
  typeof scheduleFieldEngineerCreationZodSchema
>;
export type ScheduleFieldEngineerType = z.infer<
  typeof scheduleFieldEngineerZodSchema
>;
export type FieldEngineerContractType = z.infer<
  typeof fieldEngineerContractZodSchema
>;
export type TicketType = z.infer<typeof ticketZodSchema>;
export type TaskType = z.infer<typeof taskZodSchema>;
export type DocumentType = z.infer<typeof documentZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
