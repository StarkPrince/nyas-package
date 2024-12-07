import { z } from "zod";
import { CurrencyEnum, InvoiceExtraExpenditureTypeEnum, InvoiceStatusEnum, WorkHourType } from "../enums";
export declare const InvoiceBreakDownSchema: z.ZodObject<{
    start: z.ZodDate;
    end: z.ZodDate;
    type: z.ZodNativeEnum<typeof WorkHourType>;
    hours: z.ZodNumber;
    rate: z.ZodNumber;
    cost: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: WorkHourType;
    hours: number;
    rate: number;
    start: Date;
    end: Date;
    cost: number;
}, {
    type: WorkHourType;
    hours: number;
    rate: number;
    start: Date;
    end: Date;
    cost: number;
}>;
export declare const InvoiceSchema: z.ZodObject<{
    workingHoursCost: z.ZodDefault<z.ZodNumber>;
    nightHoursCost: z.ZodDefault<z.ZodNumber>;
    outOfWorkingHoursCost: z.ZodDefault<z.ZodNumber>;
    totalCost: z.ZodNumber;
    dailyCost: z.ZodNumber;
    details: z.ZodArray<z.ZodObject<{
        start: z.ZodDate;
        end: z.ZodDate;
        type: z.ZodNativeEnum<typeof WorkHourType>;
        hours: z.ZodNumber;
        rate: z.ZodNumber;
        cost: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: WorkHourType;
        hours: number;
        rate: number;
        start: Date;
        end: Date;
        cost: number;
    }, {
        type: WorkHourType;
        hours: number;
        rate: number;
        start: Date;
        end: Date;
        cost: number;
    }>, "many">;
    currency: z.ZodNativeEnum<typeof CurrencyEnum>;
}, "strip", z.ZodTypeAny, {
    currency: CurrencyEnum;
    workingHoursCost: number;
    nightHoursCost: number;
    outOfWorkingHoursCost: number;
    totalCost: number;
    dailyCost: number;
    details: {
        type: WorkHourType;
        hours: number;
        rate: number;
        start: Date;
        end: Date;
        cost: number;
    }[];
}, {
    currency: CurrencyEnum;
    totalCost: number;
    dailyCost: number;
    details: {
        type: WorkHourType;
        hours: number;
        rate: number;
        start: Date;
        end: Date;
        cost: number;
    }[];
    workingHoursCost?: number | undefined;
    nightHoursCost?: number | undefined;
    outOfWorkingHoursCost?: number | undefined;
}>;
export declare const SubticketInvoiceSchema: z.ZodObject<{
    subticket: z.ZodString;
    number: z.ZodString;
    fieldEngineer: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    vendor: z.ZodOptional<z.ZodString>;
    ccinvoice: z.ZodObject<{
        workingHoursCost: z.ZodDefault<z.ZodNumber>;
        nightHoursCost: z.ZodDefault<z.ZodNumber>;
        outOfWorkingHoursCost: z.ZodDefault<z.ZodNumber>;
        totalCost: z.ZodNumber;
        dailyCost: z.ZodNumber;
        details: z.ZodArray<z.ZodObject<{
            start: z.ZodDate;
            end: z.ZodDate;
            type: z.ZodNativeEnum<typeof WorkHourType>;
            hours: z.ZodNumber;
            rate: z.ZodNumber;
            cost: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }, {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }>, "many">;
        currency: z.ZodNativeEnum<typeof CurrencyEnum>;
    }, "strip", z.ZodTypeAny, {
        currency: CurrencyEnum;
        workingHoursCost: number;
        nightHoursCost: number;
        outOfWorkingHoursCost: number;
        totalCost: number;
        dailyCost: number;
        details: {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }[];
    }, {
        currency: CurrencyEnum;
        totalCost: number;
        dailyCost: number;
        details: {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }[];
        workingHoursCost?: number | undefined;
        nightHoursCost?: number | undefined;
        outOfWorkingHoursCost?: number | undefined;
    }>;
    vcinvoice: z.ZodObject<{
        workingHoursCost: z.ZodDefault<z.ZodNumber>;
        nightHoursCost: z.ZodDefault<z.ZodNumber>;
        outOfWorkingHoursCost: z.ZodDefault<z.ZodNumber>;
        totalCost: z.ZodNumber;
        dailyCost: z.ZodNumber;
        details: z.ZodArray<z.ZodObject<{
            start: z.ZodDate;
            end: z.ZodDate;
            type: z.ZodNativeEnum<typeof WorkHourType>;
            hours: z.ZodNumber;
            rate: z.ZodNumber;
            cost: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }, {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }>, "many">;
        currency: z.ZodNativeEnum<typeof CurrencyEnum>;
    }, "strip", z.ZodTypeAny, {
        currency: CurrencyEnum;
        workingHoursCost: number;
        nightHoursCost: number;
        outOfWorkingHoursCost: number;
        totalCost: number;
        dailyCost: number;
        details: {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }[];
    }, {
        currency: CurrencyEnum;
        totalCost: number;
        dailyCost: number;
        details: {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }[];
        workingHoursCost?: number | undefined;
        nightHoursCost?: number | undefined;
        outOfWorkingHoursCost?: number | undefined;
    }>;
    status: z.ZodDefault<z.ZodNativeEnum<typeof InvoiceStatusEnum>>;
    extras: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodNumber;
        type: z.ZodNativeEnum<typeof InvoiceExtraExpenditureTypeEnum>;
    }, "strip", z.ZodTypeAny, {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        name: string;
    }, {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        name: string;
    }>, "many">;
    paidAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    number: string;
    status: InvoiceStatusEnum;
    subticket: string;
    ccinvoice: {
        currency: CurrencyEnum;
        workingHoursCost: number;
        nightHoursCost: number;
        outOfWorkingHoursCost: number;
        totalCost: number;
        dailyCost: number;
        details: {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }[];
    };
    vcinvoice: {
        currency: CurrencyEnum;
        workingHoursCost: number;
        nightHoursCost: number;
        outOfWorkingHoursCost: number;
        totalCost: number;
        dailyCost: number;
        details: {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }[];
    };
    extras: {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        name: string;
    }[];
    fieldEngineer?: string | undefined;
    client?: string | undefined;
    vendor?: string | undefined;
    paidAt?: Date | undefined;
}, {
    number: string;
    subticket: string;
    ccinvoice: {
        currency: CurrencyEnum;
        totalCost: number;
        dailyCost: number;
        details: {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }[];
        workingHoursCost?: number | undefined;
        nightHoursCost?: number | undefined;
        outOfWorkingHoursCost?: number | undefined;
    };
    vcinvoice: {
        currency: CurrencyEnum;
        totalCost: number;
        dailyCost: number;
        details: {
            type: WorkHourType;
            hours: number;
            rate: number;
            start: Date;
            end: Date;
            cost: number;
        }[];
        workingHoursCost?: number | undefined;
        nightHoursCost?: number | undefined;
        outOfWorkingHoursCost?: number | undefined;
    };
    extras: {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        name: string;
    }[];
    fieldEngineer?: string | undefined;
    status?: InvoiceStatusEnum | undefined;
    client?: string | undefined;
    vendor?: string | undefined;
    paidAt?: Date | undefined;
}>;
export declare const TicketInvoiceSchema: z.ZodObject<{
    ticket: z.ZodString;
    number: z.ZodString;
    subticketInvoices: z.ZodArray<z.ZodString, "many">;
    taxes: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        name: string;
    }, {
        value: number;
        name: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    number: string;
    ticket: string;
    subticketInvoices: string[];
    taxes: {
        value: number;
        name: string;
    }[];
}, {
    number: string;
    ticket: string;
    subticketInvoices: string[];
    taxes: {
        value: number;
        name: string;
    }[];
}>;
export declare const InvoiceRequestSchema: z.ZodObject<{
    taxes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        name: string;
    }, {
        value: number;
        name: string;
    }>, "many">>;
    otherExpenditures: z.ZodArray<z.ZodObject<{
        subticket: z.ZodString;
        extras: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodNumber;
            type: z.ZodNativeEnum<typeof InvoiceExtraExpenditureTypeEnum>;
        }, "strip", z.ZodTypeAny, {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }, {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        subticket: string;
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
    }, {
        subticket: string;
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    otherExpenditures: {
        subticket: string;
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
    }[];
    taxes?: {
        value: number;
        name: string;
    }[] | undefined;
}, {
    otherExpenditures: {
        subticket: string;
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
    }[];
    taxes?: {
        value: number;
        name: string;
    }[] | undefined;
}>;
export type InvoiceRequestType = z.infer<typeof InvoiceRequestSchema>;
export type SubticketInvoiceType = z.infer<typeof SubticketInvoiceSchema>;
export type TicketInvoiceType = z.infer<typeof TicketInvoiceSchema>;
export type InvoiceBreakDownType = z.infer<typeof InvoiceBreakDownSchema>;
export type InvoiceType = z.infer<typeof InvoiceSchema>;
