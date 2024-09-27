import { z } from "zod";
import { TaskStatusEnum, TicketStatusEnum } from "../enums";
import {
  idPattern,
  scheduleZodSchema,
  siteAddressZodSchema,
} from "./common.zod";

export const assignmentZodSchema = z.object({
  fieldEngineer: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid field Engineer Id",
  }),
  vendorContract: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid vendor contract Id",
  }),
  tasks: z
    .array(
      z.string().refine((id) => idPattern.test(id), {
        message: "Invalid task Id",
      })
    )
    .min(1, "At least one task is required"),
});

export const communicationZodSchema = z.object({
  consumerPortal: z.object({
    username: z.string().min(1, "Username cannot be blank"),
    password: z.string().min(1, "Password cannot be blank"),
    notes: z.string().optional(),
  }),
  communication: z.array(
    z.string().min(1, "Communication detail cannot be blank")
  ),
});

export const ticketDocumentZodSchema = z.object({
  projectDescription: z.string().min(1, "Project description cannot be blank"),
  mopDescription: z.string().min(1, "MOP description cannot be blank"),
  MOP: z.array(z.string().min(1, "MOPs cannot be blank")),
  SOW: z.array(z.string().min(1, "MOPs cannot be blank")),
});

export const taskZodSchema = z.object({
  taskName: z.string(),
  startdatetime: z.string(),
  enddatetime: z.string(),
  taskDescription: z.string(),
  logistics: z.array(z.string()),
  difficultyLevel: z.number().min(1).max(5),
  relatedMedia: z.array(z.string()),
  status: z.nativeEnum(TaskStatusEnum),
});

export const ticketZodSchema = z.object({
  number: z.string(),
  chat: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid chat Id",
  }),
  title: z.string(),
  clientContractId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid client contract Id",
  }),
  site: siteAddressZodSchema,
  numberOfEngineers: z.number(),
  SLA: z.number(),
  schedules: z.array(
    z.string().refine((id) => idPattern.test(id), {
      message: "Invalid schedule Id",
    })
  ),
  status: z.nativeEnum(TicketStatusEnum),
  teamMembers: z.array(
    z.string().refine((id) => idPattern.test(id), {
      message: "Invalid user Id",
    })
  ),
  tasks: z.array(taskZodSchema).optional().default([]),
  document: ticketDocumentZodSchema.optional(),
  communications: communicationZodSchema.optional(),
  subtickets: z
    .array(
      z.string().refine((id) => idPattern.test(id), {
        message: "Invalid subticket Id",
      })
    )
    .default([]),
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

export const ticketCreationZodSchema = z.object({
  number: z.string(),
  title: z.string(),
  clientContractId: z.string(),
  site: z.string(),
  numberOfEngineers: z.number(),
  SLA: z.number(),
  schedules: z.array(scheduleZodSchema),
});

export const ticketUpdateZodSchema = z.object({
  ticketId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid ticket Id",
  }),
  scheduleAssignments: z
    .array(
      z.object({
        schedule: z.string().refine((id) => idPattern.test(id), {
          message: "Invalid vendor contract Id",
        }),
        assignments: z.array(assignmentZodSchema),
      })
    )
    .optional(),
  document: ticketDocumentZodSchema.optional(),
  tasks: z.array(taskZodSchema).optional(),
  communications: communicationZodSchema.optional(),
});

export type TicketType = z.infer<typeof ticketZodSchema>;
export type AssignmentType = z.infer<typeof assignmentZodSchema>;
export type TicketCreationType = z.infer<typeof ticketCreationZodSchema>;
export type TicketUpdateType = z.infer<typeof ticketUpdateZodSchema>;
export type TicketDocumentType = z.infer<typeof ticketDocumentZodSchema>;
export type TaskType = z.infer<typeof taskZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
