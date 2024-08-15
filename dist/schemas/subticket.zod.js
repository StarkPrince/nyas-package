"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subticketUpdateZodSchema = exports.subticketZodSchema = exports.subticketStatusZodSchema = void 0;
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
    createdBy: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid User ID"),
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
    fieldEngineer: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid Field Engineer ID"),
    extensions: zod_1.z.array(common_zod_1.extensionZodSchema).optional(),
    feUpdates: zod_1.z.array(fieldEngineer_zod_1.fieldEngineerStatusZodSchema).refine((updates) => {
        const checkinCount = updates.filter((update) => update.workStatus === "checkin").length;
        const checkoutCount = updates.filter((update) => update.workStatus === "checkout").length;
        return checkinCount <= 1 && checkoutCount <= 1;
    }, {
        message: "There can only be one checkin and one checkout event.",
    }),
})
    .strip();
exports.subticketUpdateZodSchema = zod_1.z
    .object({
    status: zod_1.z.nativeEnum(enums_1.SubTicketStatusEnum),
})
    .strip();
