import { z } from "zod";
import {
  CurrencyEnum,
  InvoiceExtraExpenditureTypeEnum,
  InvoiceStatusEnum,
  WorkHourType,
} from "../enums";

export const InvoiceBreakDownSchema = z.object({
  start: z.date(),
  end: z.date(),
  type: z.nativeEnum(WorkHourType),
  hours: z.number(),
  rate: z.number(),
  cost: z.number(),
});

export const InvoiceSchema = z.object({
  workingHoursCost: z.number().default(0),
  nightHoursCost: z.number().default(0),
  outOfWorkingHoursCost: z.number().default(0),
  totalCost: z.number(),
  dailyCost: z.number(),
  details: z.array(InvoiceBreakDownSchema),
  currency: z.nativeEnum(CurrencyEnum),
});

export const SubticketInvoiceSchema = z.object({
  subticket: z.string(),
  number: z.string(),
  fieldEngineer: z.string().optional(),
  client: z.string().optional(),
  vendor: z.string().optional(),
  ccinvoice: InvoiceSchema,
  vcinvoice: InvoiceSchema,
  status: z.nativeEnum(InvoiceStatusEnum).default(InvoiceStatusEnum.PENDING),
  extras: z.array(
    z.object({
      name: z.string(),
      value: z.number(),
      type: z.nativeEnum(InvoiceExtraExpenditureTypeEnum),
    })
  ),
  paidAt: z.date().optional(),
});

export const TicketInvoiceSchema = z.object({
  ticket: z.string(),
  number: z.string(),
  subticketInvoices: z.array(z.string()),
  taxes: z.array(
    z.object({
      name: z.string(),
      value: z.number(),
    })
  ),
});

export const InvoiceRequestSchema = z.object({
  taxes: z
    .array(
      z.object({
        name: z.string(),
        value: z.number(),
      })
    )
    .optional(),
  otherExpenditures: z.array(
    z.object({
      subticket: z.string(),
      extras: z
        .array(
          z.object({
            name: z.string(),
            value: z.number(),
            type: z.nativeEnum(InvoiceExtraExpenditureTypeEnum),
          })
        )
        .min(1),
    })
  ),
});

export type InvoiceRequestType = z.infer<typeof InvoiceRequestSchema>;
export type SubticketInvoiceType = z.infer<typeof SubticketInvoiceSchema>;
export type TicketInvoiceType = z.infer<typeof TicketInvoiceSchema>;
export type InvoiceBreakDownType = z.infer<typeof InvoiceBreakDownSchema>;
export type InvoiceType = z.infer<typeof InvoiceSchema>;
