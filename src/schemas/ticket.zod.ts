import { z } from "zod";
import { TaskStatusEnum, TicketStatusEnum } from "../enums";
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

export const assignmentZodSchema = z.object({
  fieldEngineer: z.string().regex(idPattern, "Invalid field engineer Id"),
  vendorContract: z.string().regex(idPattern, "Invalid vendor contract"),
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
    schedules: z.array(z.string().regex(idPattern, "Invalid schedule Id")),
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

export const ticketCreationZodSchema = z
  .object({
    number: z.string(),
    title: z.string(),
    clientContractId: z.string().regex(idPattern, "Invalid contract Id"),
    site: siteAddressZodSchema,
    numberOfEngineers: z.number(),
    SLA: z.number(),
    schedules: z.array(scheduleZodSchema),
    status: z.nativeEnum(TicketStatusEnum).default(TicketStatusEnum.DRAFT),
  })
  .strip();

export const ticketUpdateZodSchema = z
  .object({
    scheduleAssignments: z
      .array(
        z.object({
          schedule: z.string().regex(idPattern, "Invalid schedule Id"),
          assignments: z.array(assignmentZodSchema),
        })
      )
      .optional(),
    document: documentZodSchema.optional(),
    tasks: z.array(taskZodSchema).optional(),
    communications: communicationZodSchema.optional(),
  })
  .strip();

export type TicketType = z.infer<typeof ticketZodSchema>;
export type TaskType = z.infer<typeof taskZodSchema>;
export type DocumentType = z.infer<typeof documentZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
