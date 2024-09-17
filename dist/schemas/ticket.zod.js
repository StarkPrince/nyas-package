"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketUpdateZodSchema = exports.ticketCreationZodSchema = exports.ticketZodSchema = exports.taskZodSchema = exports.documentZodSchema = exports.communicationZodSchema = exports.assignmentZodSchema = void 0;
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
});
exports.communicationZodSchema = zod_1.z
    .object({
    consumerPortal: zod_1.z.object({
        username: zod_1.z.string().min(1, "Username cannot be blank"),
        password: zod_1.z.string().min(1, "Password cannot be blank"),
        notes: zod_1.z.string().optional(),
    }),
    communication: zod_1.z.array(zod_1.z.string().min(1, "Communication detail cannot be blank")),
})
    .strip();
exports.documentZodSchema = zod_1.z
    .object({
    projectDescription: zod_1.z
        .string()
        .min(1, "Project description cannot be blank"),
    MOPs: zod_1.z.string().min(1, "MOPs cannot be blank"),
    SOWUpload: zod_1.z.string().min(1, "SOW Upload cannot be blank"),
})
    .strip();
exports.taskZodSchema = zod_1.z
    .object({
    taskName: zod_1.z.string(),
    startdatetime: zod_1.z.string(),
    enddateime: zod_1.z.string(),
    taskDescription: zod_1.z.string(),
    logistics: zod_1.z.array(zod_1.z.string()),
    difficultyLevel: zod_1.z.number().min(1).max(5),
    relatedMedia: zod_1.z.array(zod_1.z.string()),
    status: zod_1.z.nativeEnum(enums_1.TaskStatusEnum),
})
    .strip();
exports.ticketZodSchema = zod_1.z
    .object({
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
    document: exports.documentZodSchema.optional(),
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
})
    .strip();
exports.ticketCreationZodSchema = zod_1.z
    .object({
    number: zod_1.z.string(),
    title: zod_1.z.string(),
    clientContractId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid client contract Id",
    }),
    site: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid site Id",
    }),
    numberOfEngineers: zod_1.z.number(),
    SLA: zod_1.z.number(),
    schedules: zod_1.z.array(common_zod_1.scheduleZodSchema),
    status: zod_1.z.nativeEnum(enums_1.TicketStatusEnum).default(enums_1.TicketStatusEnum.DRAFT),
})
    .strip();
exports.ticketUpdateZodSchema = zod_1.z
    .object({
    ticketId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid ticket Id",
    }),
    scheduleAssignments: zod_1.z
        .array(zod_1.z.object({
        schedule: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
            message: "Invalid vendor contract Id",
        }),
        assignments: zod_1.z.array(exports.assignmentZodSchema),
    }))
        .optional(),
    document: exports.documentZodSchema.optional(),
    tasks: zod_1.z.array(exports.taskZodSchema).optional(),
    communications: exports.communicationZodSchema.optional(),
})
    .strip();
