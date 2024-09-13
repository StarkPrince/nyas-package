import { z } from "zod";
import { TaskStatusEnum, TicketStatusEnum } from "../enums";
import {
  idPattern,
  scheduleZodSchema,
  siteAddressZodSchema,
} from "./common.zod";

export const assignmentZodSchema = z.object({
  fieldEngineer: z.string().regex(idPattern, "Invalid field engineer Id"),
  vendorContract: z.string().regex(idPattern, "Invalid vendor contract"),
});

export const communicationZodSchema = z
  .object({
    consumerPortal: z.object({
      username: z.string().min(1, "Username cannot be blank"),
      password: z.string().min(1, "Password cannot be blank"),
      notes: z.string().optional(),
    }),
    communication: z.array(
      z.string().min(1, "Communication detail cannot be blank")
    ),
  })
  .strip();

export const documentZodSchema = z
  .object({
    projectDescription: z
      .string()
      .min(1, "Project description cannot be blank"),
    MOPs: z.string().min(1, "MOPs cannot be blank"),
    SOWUpload: z.string().min(1, "SOW Upload cannot be blank"),
  })
  .strip();

export const taskZodSchema = z
  .object({
    taskName: z.string(),
    startdatetime: z.string(),
    enddateime: z.string(),
    taskDescription: z.string(),
    logistics: z.array(z.string()),
    difficultyLevel: z.number().min(1).max(5),
    relatedMedia: z.array(z.string()),
    status: z.nativeEnum(TaskStatusEnum),
  })
  .strip();

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
    site: z.string().regex(idPattern, "Invalid site Id"),
    numberOfEngineers: z.number(),
    SLA: z.number(),
    schedules: z.array(scheduleZodSchema),
    status: z.nativeEnum(TicketStatusEnum).default(TicketStatusEnum.DRAFT),
  })
  .strip();

export const ticketUpdateZodSchema = z
  .object({
    ticketId: z.string().regex(idPattern, "Invalid ticket Id"),
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
export type AssignmentType = z.infer<typeof assignmentZodSchema>;
export type TicketCreationType = z.infer<typeof ticketCreationZodSchema>;
export type TicketUpdateType = z.infer<typeof ticketUpdateZodSchema>;
export type DocumentType = z.infer<typeof documentZodSchema>;
export type TaskType = z.infer<typeof taskZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
