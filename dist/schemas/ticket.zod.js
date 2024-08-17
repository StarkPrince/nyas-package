"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketUpdateZodSchema = exports.ticketCreationZodSchema = exports.ticketZodSchema = exports.assignmentZodSchema = exports.taskZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
exports.taskZodSchema = zod_1.z
    .object({
    taskName: zod_1.z.string(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
    taskDescription: zod_1.z.string(),
    tools: zod_1.z.array(zod_1.z.string()),
    difficultyLevel: zod_1.z.number(),
    status: zod_1.z.nativeEnum(enums_1.TaskStatusEnum),
})
    .strip();
exports.assignmentZodSchema = zod_1.z.object({
    fieldEngineer: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid field engineer Id"),
    vendorContract: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid vendor contract"),
});
exports.ticketZodSchema = zod_1.z
    .object({
    number: zod_1.z.string(),
    chat: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid chat Id"),
    title: zod_1.z.string(),
    clientContractId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid contract Id"),
    site: common_zod_1.siteAddressZodSchema,
    numberOfEngineers: zod_1.z.number(),
    SLA: zod_1.z.number(),
    schedules: zod_1.z.array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid schedule Id")),
    status: zod_1.z.nativeEnum(enums_1.TicketStatusEnum),
    teamMembers: zod_1.z.array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid team member Id")),
    tasks: zod_1.z.array(exports.taskZodSchema).optional().default([]),
    document: common_zod_1.documentZodSchema.optional(),
    communications: common_zod_1.communicationZodSchema.optional(),
    subtickets: zod_1.z
        .array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid subticket Id"))
        .default([]),
    createdBy: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid user Id").optional(),
    updatedBy: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid user Id").optional(),
})
    .strip();
exports.ticketCreationZodSchema = zod_1.z
    .object({
    number: zod_1.z.string(),
    title: zod_1.z.string(),
    clientContractId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid contract Id"),
    site: common_zod_1.siteAddressZodSchema,
    numberOfEngineers: zod_1.z.number(),
    SLA: zod_1.z.number(),
    schedules: zod_1.z.array(common_zod_1.scheduleZodSchema),
    status: zod_1.z.nativeEnum(enums_1.TicketStatusEnum).default(enums_1.TicketStatusEnum.DRAFT),
})
    .strip();
exports.ticketUpdateZodSchema = zod_1.z
    .object({
    scheduleAssignments: zod_1.z
        .array(zod_1.z.object({
        schedule: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid schedule Id"),
        assignments: zod_1.z.array(exports.assignmentZodSchema),
    }))
        .optional(),
    document: common_zod_1.documentZodSchema.optional(),
    tasks: zod_1.z.array(exports.taskZodSchema).optional(),
    communications: common_zod_1.communicationZodSchema.optional(),
})
    .strip();
