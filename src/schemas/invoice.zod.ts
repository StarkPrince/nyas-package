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

export const InvoiceZodSchema = z.object({
  workingHoursCost: z.number().default(0),
  nightHoursCost: z.number().default(0),
  outOfWorkingHoursCost: z.number().default(0),
  totalCost: z.number(),
  dailyCost: z.number(),
  details: z.array(InvoiceBreakDownSchema),
  currency: z.nativeEnum(CurrencyEnum),
  extras: z.array(
    z.object({
      detail: z.string(),
      value: z.number(),
      type: z.nativeEnum(InvoiceExtraExpenditureTypeEnum),
    })
  ),
  taxes: z.array(
    z.object({
      tax: z.string(),
      value: z.number().max(100),
    })
  ),
});

export const SubticketInvoiceZodSchema = z.object({
  subticket: z.string(),
  number: z.string(),
  fieldEngineer: z.string().optional(),
  ccinvoice: InvoiceZodSchema,
  vcinvoice: InvoiceZodSchema,
  status: z.nativeEnum(InvoiceStatusEnum).default(InvoiceStatusEnum.PENDING),
});

export const TicketInvoiceSchema = z.object({
  ticket: z.string(),
  number: z.string(),
  subticketInvoices: z.array(z.string()),
});

export const InvoiceRequestZodSchema = z.array(
  z.object({
    subticket: z.string(),
    client: z.object({
      extras: z
        .array(
          z.object({
            name: z.string(),
            value: z.number(),
            type: z.nativeEnum(InvoiceExtraExpenditureTypeEnum),
          })
        )
        .min(1),
      taxes: z
        .array(
          z.object({
            name: z.string(),
            value: z.number(),
          })
        )
        .optional(),
    }),
    vendor: z.object({
      extras: z
        .array(
          z.object({
            name: z.string(),
            value: z.number(),
            type: z.nativeEnum(InvoiceExtraExpenditureTypeEnum),
          })
        )
        .min(1),
      taxes: z
        .array(
          z.object({
            name: z.string(),
            value: z.number(),
          })
        )
        .optional(),
    }),
  })
);

export type InvoiceRequestType = z.infer<typeof InvoiceRequestZodSchema>;
export type SubticketInvoiceType = z.infer<typeof SubticketInvoiceZodSchema>;
export type TicketInvoiceType = z.infer<typeof TicketInvoiceSchema>;
export type InvoiceBreakDownType = z.infer<typeof InvoiceBreakDownSchema>;
export type InvoiceType = z.infer<typeof InvoiceZodSchema>;
