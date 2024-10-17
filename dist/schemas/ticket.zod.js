"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketUpdateZodSchema = exports.scheduleAssignmentZodSchema = exports.ticketCreationZodSchema = exports.ticketZodSchema = exports.taskZodSchema = exports.ticketDocumentZodSchema = exports.communicationZodSchema = exports.assignmentZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
exports.assignmentZodSchema = zod_1.z.object({
    fieldEngineer: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid field Engineer Id",
    }),
    vendorContract: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid vendor contract Id",
    }),
    tasks: zod_1.z
        .array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid task Id",
    }))
        .min(1, "At least one task is required"),
});
exports.communicationZodSchema = zod_1.z.object({
    consumerPortal: zod_1.z.object({
        username: zod_1.z.string().min(1, "Username cannot be blank"),
        password: zod_1.z.string().min(1, "Password cannot be blank"),
        notes: zod_1.z.string().optional(),
    }),
    communication: zod_1.z.array(zod_1.z.string().min(1, "Communication detail cannot be blank")),
});
exports.ticketDocumentZodSchema = zod_1.z.object({
    projectDescription: zod_1.z.string().min(1, "Project description cannot be blank"),
    mopDescription: zod_1.z.string().min(1, "MOP description cannot be blank"),
    MOP: zod_1.z.array(zod_1.z.string().min(1, "MOPs cannot be blank")),
    SOW: zod_1.z.array(zod_1.z.string().min(1, "MOPs cannot be blank")),
});
exports.taskZodSchema = zod_1.z.object({
    taskName: zod_1.z.string(),
    startdatetime: zod_1.z.string(),
    enddatetime: zod_1.z.string(),
    taskDescription: zod_1.z.string(),
    logistics: zod_1.z.array(zod_1.z.string()),
    difficultyLevel: zod_1.z.number().min(1).max(5),
    relatedMedia: zod_1.z.array(zod_1.z.string()),
    status: zod_1.z.nativeEnum(enums_1.TaskStatusEnum),
});
exports.ticketZodSchema = zod_1.z.object({
    number: zod_1.z.string(),
    chat: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid chat Id",
    }),
    title: zod_1.z.string(),
    clientContractId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid client contract Id",
    }),
    site: common_zod_1.siteAddressZodSchema,
    numberOfEngineers: zod_1.z.number(),
    SLA: zod_1.z.number(),
    schedules: zod_1.z.array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid schedule Id",
    })),
    status: zod_1.z.nativeEnum(enums_1.TicketStatusEnum),
    teamMembers: zod_1.z.array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid user Id",
    })),
    tasks: zod_1.z.array(exports.taskZodSchema).optional().default([]),
    document: exports.ticketDocumentZodSchema.optional(),
    communications: exports.communicationZodSchema.optional(),
    subtickets: zod_1.z
        .array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid subticket Id",
    }))
        .default([]),
    createdBy: zod_1.z
        .string()
        .refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid user Id",
    })
        .optional(),
    updatedBy: zod_1.z
        .string()
        .refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid user Id",
    })
        .optional(),
});
exports.ticketCreationZodSchema = zod_1.z.object({
    number: zod_1.z.string(),
    title: zod_1.z.string(),
    clientContractId: zod_1.z.string(),
    site: zod_1.z.string(),
    numberOfEngineers: zod_1.z.number(),
    SLA: zod_1.z.number(),
    schedules: zod_1.z.array(common_zod_1.scheduleZodSchema),
});
exports.scheduleAssignmentZodSchema = zod_1.z.object({
    schedule: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid vendor contract Id",
    }),
    assignments: zod_1.z.array(exports.assignmentZodSchema),
});
exports.ticketUpdateZodSchema = zod_1.z.object({
    ticketId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid ticket Id",
    }),
    scheduleAssignments: zod_1.z.array(exports.scheduleAssignmentZodSchema).optional(),
    document: exports.ticketDocumentZodSchema.optional(),
    tasks: zod_1.z.array(exports.taskZodSchema).optional(),
    communications: exports.communicationZodSchema.optional(),
});
