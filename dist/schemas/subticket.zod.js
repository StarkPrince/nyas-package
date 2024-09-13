"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectedSubticketZodSchema = exports.subticketUpdateZodSchema = exports.subticketZodSchema = exports.subticketStatusZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
const fieldEngineer_zod_1 = require("./fieldEngineer.zod");
const validStatusOrder = [
    "assign-pending",
    "fe-pending",
    "approval-pending",
    "ongoing",
    "draft",
    "completed",
    "pending",
];
exports.subticketStatusZodSchema = zod_1.z
    .object({
    status: zod_1.z.nativeEnum(enums_1.SubTicketStatusEnum),
    reason: zod_1.z.string().optional(),
    comments: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    createdBy: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid User ID").optional(),
    updatedBy: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid User ID").optional(),
})
    .strip();
exports.subticketZodSchema = zod_1.z
    .object({
    ticketId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid ticket Id"),
    number: zod_1.z.string(),
    vendorContractId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid Vendor Contract ID"),
    schedule: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid Schedule ID"),
    statuses: zod_1.z.array(exports.subticketStatusZodSchema),
    SLA: zod_1.z.number(),
    fieldEngineer: zod_1.z
        .string()
        .regex(common_zod_1.idPattern, "Invalid Field Engineer ID")
        .optional(),
    extensions: zod_1.z.array(common_zod_1.extensionZodSchema).optional(),
    feUpdates: zod_1.z.array(fieldEngineer_zod_1.fieldEngineerStatusZodSchema).optional(),
})
    .strip();
exports.subticketUpdateZodSchema = zod_1.z
    .object({
    status: zod_1.z.nativeEnum(enums_1.SubTicketStatusEnum),
})
    .strip();
exports.rejectedSubticketZodSchema = zod_1.z.object({
    subticketId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid Subticket ID"),
    reason: zod_1.z.string(),
    comments: zod_1.z.string(),
    fieldEngineer: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid Field Engineer ID"),
});
