"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectedSubticketZodSchema = exports.subticketUpdateZodSchema = exports.subticketZodSchema = exports.fieldEngineerInvitationZodSchema = exports.subticketStatusZodSchema = void 0;
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
exports.subticketStatusZodSchema = zod_1.z.object({
    status: zod_1.z.nativeEnum(enums_1.SubTicketStatusEnum),
    reason: zod_1.z.string().optional(),
    comments: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
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
exports.fieldEngineerInvitationZodSchema = zod_1.z.object({
    fieldEngineerId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid fieldEngineer Id",
    }),
    vendorContractId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid vendor contract Id",
    }),
    status: zod_1.z
        .nativeEnum(enums_1.SubticketResponseEnum)
        .default(enums_1.SubticketResponseEnum.PENDING),
    responseAt: zod_1.z.date().optional(),
});
exports.subticketZodSchema = zod_1.z.object({
    ticketId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid ticket Id",
    }),
    number: zod_1.z.string(),
    vendorContractId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid vendor contract Id",
    }),
    schedule: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid schedule Id",
    }),
    statuses: zod_1.z.array(exports.subticketStatusZodSchema),
    SLA: zod_1.z.number(),
    fieldEngineer: zod_1.z
        .string()
        .refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid vendor contract Id",
    })
        .optional(),
    extensions: zod_1.z.array(common_zod_1.extensionZodSchema).optional(),
    feUpdates: zod_1.z.array(fieldEngineer_zod_1.fieldEngineerStatusZodSchema).optional(),
    tasks: zod_1.z.array(zod_1.z.string()).optional().default([]),
    fieldEngineerInvitations: zod_1.z.array(exports.fieldEngineerInvitationZodSchema),
});
exports.subticketUpdateZodSchema = zod_1.z
    .object({
    update: zod_1.z.nativeEnum(enums_1.SubticketUpdateEnum),
    status: zod_1.z.nativeEnum(enums_1.SubTicketStatusEnum).optional(),
    schedule: common_zod_1.scheduleZodSchema.optional(),
    fieldEngineerId: zod_1.z
        .string()
        .refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid fieldEngineer Id",
    })
        .optional(),
    vendorContractId: zod_1.z
        .string()
        .refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid vendor contract Id",
    })
        .optional(),
})
    .superRefine((data, ctx) => {
    if (data.update === enums_1.SubticketUpdateEnum.SCHEDULE && !data.schedule) {
        ctx.addIssue({
            code: zod_1.ZodIssueCode.custom,
            path: ["schedule"],
            message: "Schedule must be provided when updating schedule.",
        });
    }
    if (data.update === enums_1.SubticketUpdateEnum.STATUS && !data.fieldEngineerId) {
        ctx.addIssue({
            code: zod_1.ZodIssueCode.custom,
            path: ["fieldEngineerId"],
            message: "FieldEngineerId must be provided when updating the status",
        });
    }
    if (data.update === enums_1.SubticketUpdateEnum.FIELD_ENGINEER &&
        (!data.fieldEngineerId || !data.vendorContractId)) {
        if (!data.fieldEngineerId || !data.vendorContractId) {
            ctx.addIssue({
                code: zod_1.ZodIssueCode.custom,
                path: ["fieldEngineerId", "vendorContractId"],
                message: "FieldEngineerId and vendorContractId must be provided when updating the fieldEngineer.",
            });
        }
    }
});
exports.rejectedSubticketZodSchema = zod_1.z.object({
    subticketId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid subticket Id",
    }),
    reason: zod_1.z.string(),
    comments: zod_1.z.string(),
    fieldEngineer: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid fieldEngineer Id",
    }),
});
