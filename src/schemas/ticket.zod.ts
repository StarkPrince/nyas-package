import { z } from "zod";
import { TaskStatusEnum, TicketStatusEnum } from "../enums";
import { SiteAddressType } from "../schemas/common.zod";
import { idPattern, scheduleZodSchema } from "./common.zod";

export const assignmentZodSchema = z.object({
  fieldEngineerOptions: z.array(
    z.object({
      fieldEngineer: z.string().refine((id) => idPattern.test(id), {
        message: "Invalid field Engineer Id",
      }),
      vendorContract: z.string().refine((id) => idPattern.test(id), {
        message: "Invalid vendor contract Id",
      }),
    })
  ),
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
  title: z.string(),
  clientContractId: z.string(),
  site: z.string(),
  numberOfEngineers: z.number(),
  SLA: z.number(),
  schedules: z.array(scheduleZodSchema),
  teamMembers: z.array(
    z.string().refine((id) => idPattern.test(id), {
      message: "Invalid user Id",
    })
  ),
});

export const scheduleAssignmentZodSchema = z.object({
  schedule: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid vendor contract Id",
  }),
  assignments: assignmentZodSchema,
  noOfSubtickets: z.number().nonnegative(),
});

export const ticketUpdateZodSchema = z
  .object({
    scheduleAssignments: z.array(scheduleAssignmentZodSchema).optional(),
    document: ticketDocumentZodSchema.optional(),
    tasks: z.array(taskZodSchema).optional(),
    communications: communicationZodSchema.optional(),
  })
  .refine(
    (data) => {
      // Check that at least one of the required fields is present
      return (
        data.scheduleAssignments ||
        data.tasks ||
        (data.document && data.communications)
      );
    },
    {
      message:
        "At least one of scheduleAssignments, tasks, or (document and communications) is required.",
    }
  );

export type ScheduleAssignmentType = z.infer<
  typeof scheduleAssignmentZodSchema
>;
export type TicketType = z.infer<typeof ticketZodSchema>;
export type AssignmentType = z.infer<typeof assignmentZodSchema>;
export type TicketUpdateType = z.infer<typeof ticketUpdateZodSchema>;
export type TicketDocumentType = z.infer<typeof ticketDocumentZodSchema>;
export type TaskType = z.infer<typeof taskZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
export type OverriddenTicketType = TicketType & {
  number: string;
  chat: string;
  site: SiteAddressType;
  schedules: string[];
  status: TicketStatusEnum;
  tasks: string[];
  document: TicketDocumentType;
  communications: CommunicationType;
  subtickets: string[];
};
