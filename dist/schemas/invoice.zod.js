"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubticketInvoiceRequestZodSchema = exports.InvoiceRequestZodSchema = exports.TicketInvoiceSchema = exports.SubticketInvoiceZodSchema = exports.InvoiceZodSchema = exports.InvoiceBreakDownSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.InvoiceBreakDownSchema = zod_1.z.object({
    start: zod_1.z.date(),
    end: zod_1.z.date(),
    type: zod_1.z.nativeEnum(enums_1.WorkHourType),
    hours: zod_1.z.number(),
    rate: zod_1.z.number(),
    cost: zod_1.z.number(),
});
exports.InvoiceZodSchema = zod_1.z.object({
    workingHoursCost: zod_1.z.number().default(0),
    nightHoursCost: zod_1.z.number().default(0),
    outOfWorkingHoursCost: zod_1.z.number().default(0),
    totalCost: zod_1.z.number(),
    dailyCost: zod_1.z.number(),
    details: zod_1.z.array(exports.InvoiceBreakDownSchema),
    currency: zod_1.z.nativeEnum(enums_1.CurrencyEnum),
    extras: zod_1.z.array(zod_1.z.object({
        detail: zod_1.z.string(),
        value: zod_1.z.number(),
        type: zod_1.z.nativeEnum(enums_1.InvoiceExtraExpenditureTypeEnum),
    })),
    taxes: zod_1.z.array(zod_1.z.object({
        tax: zod_1.z.string(),
        value: zod_1.z.number().max(100),
    })),
});
exports.SubticketInvoiceZodSchema = zod_1.z.object({
    subticket: zod_1.z.string(),
    number: zod_1.z.string(),
    fieldEngineer: zod_1.z.string().optional(),
    ccinvoice: exports.InvoiceZodSchema,
    vcinvoice: exports.InvoiceZodSchema,
    status: zod_1.z.nativeEnum(enums_1.InvoiceStatusEnum).default(enums_1.InvoiceStatusEnum.PENDING),
});
exports.TicketInvoiceSchema = zod_1.z.object({
    ticket: zod_1.z.string(),
    number: zod_1.z.string(),
    subticketInvoices: zod_1.z.array(zod_1.z.string()),
});
exports.InvoiceRequestZodSchema = zod_1.z.object({
    extras: zod_1.z
        .array(zod_1.z.object({
        detail: zod_1.z.string(),
        value: zod_1.z.number(),
        type: zod_1.z.nativeEnum(enums_1.InvoiceExtraExpenditureTypeEnum),
    }))
        .min(1),
    taxes: zod_1.z
        .array(zod_1.z.object({
        tax: zod_1.z.string(),
        value: zod_1.z.number(),
    }))
        .optional(),
});
exports.SubticketInvoiceRequestZodSchema = zod_1.z.array(zod_1.z.object({
    subticket: zod_1.z.string(),
    clientInvoiceDetail: exports.InvoiceRequestZodSchema,
    vendorInvoiceDetail: exports.InvoiceRequestZodSchema,
}));
