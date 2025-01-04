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
export declare const InvoiceZodSchema: z.ZodObject<{
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
    extras: z.ZodArray<z.ZodObject<{
        detail: z.ZodString;
        value: z.ZodNumber;
        type: z.ZodNativeEnum<typeof InvoiceExtraExpenditureTypeEnum>;
    }, "strip", z.ZodTypeAny, {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        detail: string;
    }, {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        detail: string;
    }>, "many">;
    taxes: z.ZodArray<z.ZodObject<{
        tax: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        tax: string;
    }, {
        value: number;
        tax: string;
    }>, "many">;
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
    extras: {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        detail: string;
    }[];
    taxes: {
        value: number;
        tax: string;
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
    extras: {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        detail: string;
    }[];
    taxes: {
        value: number;
        tax: string;
    }[];
    workingHoursCost?: number | undefined;
    nightHoursCost?: number | undefined;
    outOfWorkingHoursCost?: number | undefined;
}>;
export declare const SubticketInvoiceZodSchema: z.ZodObject<{
    subticket: z.ZodString;
    number: z.ZodString;
    fieldEngineer: z.ZodOptional<z.ZodString>;
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
        extras: z.ZodArray<z.ZodObject<{
            detail: z.ZodString;
            value: z.ZodNumber;
            type: z.ZodNativeEnum<typeof InvoiceExtraExpenditureTypeEnum>;
        }, "strip", z.ZodTypeAny, {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }, {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }>, "many">;
        taxes: z.ZodArray<z.ZodObject<{
            tax: z.ZodString;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: number;
            tax: string;
        }, {
            value: number;
            tax: string;
        }>, "many">;
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
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes: {
            value: number;
            tax: string;
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
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes: {
            value: number;
            tax: string;
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
        extras: z.ZodArray<z.ZodObject<{
            detail: z.ZodString;
            value: z.ZodNumber;
            type: z.ZodNativeEnum<typeof InvoiceExtraExpenditureTypeEnum>;
        }, "strip", z.ZodTypeAny, {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }, {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }>, "many">;
        taxes: z.ZodArray<z.ZodObject<{
            tax: z.ZodString;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: number;
            tax: string;
        }, {
            value: number;
            tax: string;
        }>, "many">;
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
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes: {
            value: number;
            tax: string;
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
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes: {
            value: number;
            tax: string;
        }[];
        workingHoursCost?: number | undefined;
        nightHoursCost?: number | undefined;
        outOfWorkingHoursCost?: number | undefined;
    }>;
    status: z.ZodDefault<z.ZodNativeEnum<typeof InvoiceStatusEnum>>;
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
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes: {
            value: number;
            tax: string;
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
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes: {
            value: number;
            tax: string;
        }[];
    };
    fieldEngineer?: string | undefined;
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
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes: {
            value: number;
            tax: string;
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
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes: {
            value: number;
            tax: string;
        }[];
        workingHoursCost?: number | undefined;
        nightHoursCost?: number | undefined;
        outOfWorkingHoursCost?: number | undefined;
    };
    fieldEngineer?: string | undefined;
    status?: InvoiceStatusEnum | undefined;
}>;
export declare const TicketInvoiceSchema: z.ZodObject<{
    ticket: z.ZodString;
    number: z.ZodString;
    subticketInvoices: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    number: string;
    ticket: string;
    subticketInvoices: string[];
}, {
    number: string;
    ticket: string;
    subticketInvoices: string[];
}>;
export declare const InvoiceRequestZodSchema: z.ZodArray<z.ZodObject<{
    subticket: z.ZodString;
    client: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
        taxes?: {
            value: number;
            name: string;
        }[] | undefined;
    }, {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
        taxes?: {
            value: number;
            name: string;
        }[] | undefined;
    }>;
    vendor: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
        taxes?: {
            value: number;
            name: string;
        }[] | undefined;
    }, {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
        taxes?: {
            value: number;
            name: string;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    subticket: string;
    client: {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
        taxes?: {
            value: number;
            name: string;
        }[] | undefined;
    };
    vendor: {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
        taxes?: {
            value: number;
            name: string;
        }[] | undefined;
    };
}, {
    subticket: string;
    client: {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
        taxes?: {
            value: number;
            name: string;
        }[] | undefined;
    };
    vendor: {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            name: string;
        }[];
        taxes?: {
            value: number;
            name: string;
        }[] | undefined;
    };
}>, "many">;
export type InvoiceRequestType = z.infer<typeof InvoiceRequestZodSchema>;
export type SubticketInvoiceType = z.infer<typeof SubticketInvoiceZodSchema>;
export type TicketInvoiceType = z.infer<typeof TicketInvoiceSchema>;
export type InvoiceBreakDownType = z.infer<typeof InvoiceBreakDownSchema>;
export type InvoiceType = z.infer<typeof InvoiceZodSchema>;
