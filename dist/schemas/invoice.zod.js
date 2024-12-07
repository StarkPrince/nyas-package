"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRequestSchema = exports.TicketInvoiceSchema = exports.SubticketInvoiceSchema = exports.InvoiceSchema = exports.InvoiceBreakDownSchema = void 0;
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
exports.InvoiceSchema = zod_1.z.object({
    workingHoursCost: zod_1.z.number().default(0),
    nightHoursCost: zod_1.z.number().default(0),
    outOfWorkingHoursCost: zod_1.z.number().default(0),
    totalCost: zod_1.z.number(),
    dailyCost: zod_1.z.number(),
    details: zod_1.z.array(exports.InvoiceBreakDownSchema),
    currency: zod_1.z.nativeEnum(enums_1.CurrencyEnum),
});
exports.SubticketInvoiceSchema = zod_1.z.object({
    subticket: zod_1.z.string(),
    number: zod_1.z.string(),
    fieldEngineer: zod_1.z.string().optional(),
    client: zod_1.z.string().optional(),
    vendor: zod_1.z.string().optional(),
    ccinvoice: exports.InvoiceSchema,
    vcinvoice: exports.InvoiceSchema,
    status: zod_1.z.nativeEnum(enums_1.InvoiceStatusEnum).default(enums_1.InvoiceStatusEnum.PENDING),
    extras: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        value: zod_1.z.number(),
        type: zod_1.z.nativeEnum(enums_1.InvoiceExtraExpenditureTypeEnum),
    })),
    paidAt: zod_1.z.date().optional(),
});
exports.TicketInvoiceSchema = zod_1.z.object({
    ticket: zod_1.z.string(),
    number: zod_1.z.string(),
    subticketInvoices: zod_1.z.array(zod_1.z.string()),
    taxes: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        value: zod_1.z.number(),
    })),
});
exports.InvoiceRequestSchema = zod_1.z.object({
    taxes: zod_1.z
        .array(zod_1.z.object({
        name: zod_1.z.string(),
        value: zod_1.z.number(),
    }))
        .optional(),
    otherExpenditures: zod_1.z.array(zod_1.z.object({
        subticket: zod_1.z.string(),
        extras: zod_1.z
            .array(zod_1.z.object({
            name: zod_1.z.string(),
            value: zod_1.z.number(),
            type: zod_1.z.nativeEnum(enums_1.InvoiceExtraExpenditureTypeEnum),
        }))
            .min(1),
    })),
});
