"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketUpdateZodSchema = exports.ticketCreationZodSchema = exports.ticketZodSchema = exports.taskZodSchema = void 0;
const zod_1 = require("zod");
const enum_1 = require("../types/enum");
const common_zod_1 = require("./common.zod");
exports.taskZodSchema = zod_1.z
    .object({
    taskName: zod_1.z.string(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
    taskDescription: zod_1.z.string(),
    tools: zod_1.z.array(zod_1.z.string()),
    difficultyLevel: zod_1.z.number(),
    status: zod_1.z.nativeEnum(enum_1.TaskStatusEnum),
})
    .strip();
const fieldEngineerContractZodSchema = zod_1.z.object({
    fieldEngineerId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid field engineer Id"),
    vendorContractId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid vendor contract"),
});
const scheduleFieldEngineerZodSchema = zod_1.z.object({
    schedule: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid schedule Id"),
    fieldEngineercontracts: zod_1.z.array(fieldEngineerContractZodSchema).default([]),
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
    scheduleFieldEngineers: zod_1.z.array(scheduleFieldEngineerZodSchema),
    status: zod_1.z.nativeEnum(enum_1.TicketStatusEnum),
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
const scheduleFieldEngineerCreationZodSchema = zod_1.z
    .object({
    schedule: common_zod_1.scheduleZodSchema,
    fieldEngineercontracts: zod_1.z.array(fieldEngineerContractZodSchema).default([]),
})
    .transform((data) => (Object.assign(Object.assign({}, data), { fieldEngineercontracts: [] })));
exports.ticketCreationZodSchema = zod_1.z
    .object({
    number: zod_1.z.string(),
    title: zod_1.z.string(),
    clientContractId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid contract Id"),
    site: common_zod_1.siteAddressZodSchema,
    numberOfEngineers: zod_1.z.number(),
    SLA: zod_1.z.number(),
    scheduleFieldEngineers: zod_1.z.array(scheduleFieldEngineerCreationZodSchema),
    status: zod_1.z.nativeEnum(enum_1.TicketStatusEnum).default(enum_1.TicketStatusEnum.DRAFT),
})
    .strip();
exports.ticketUpdateZodSchema = zod_1.z
    .object({
    tasks: zod_1.z.array(exports.taskZodSchema).optional(),
    document: common_zod_1.documentZodSchema.optional(),
    communications: common_zod_1.communicationZodSchema.optional(),
    scheduleFieldEngineers: zod_1.z.array(scheduleFieldEngineerZodSchema).optional(),
})
    .strip();
