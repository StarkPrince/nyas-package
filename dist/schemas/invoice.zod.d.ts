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
    status: z.ZodDefault<z.ZodNativeEnum<typeof InvoiceStatusEnum>>;
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
    status: InvoiceStatusEnum;
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
    status?: InvoiceStatusEnum | undefined;
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
        status: z.ZodDefault<z.ZodNativeEnum<typeof InvoiceStatusEnum>>;
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
        status: InvoiceStatusEnum;
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
        status?: InvoiceStatusEnum | undefined;
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
        status: z.ZodDefault<z.ZodNativeEnum<typeof InvoiceStatusEnum>>;
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
        status: InvoiceStatusEnum;
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
        status?: InvoiceStatusEnum | undefined;
        workingHoursCost?: number | undefined;
        nightHoursCost?: number | undefined;
        outOfWorkingHoursCost?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    number: string;
    subticket: string;
    ccinvoice: {
        status: InvoiceStatusEnum;
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
        status: InvoiceStatusEnum;
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
        status?: InvoiceStatusEnum | undefined;
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
        status?: InvoiceStatusEnum | undefined;
        workingHoursCost?: number | undefined;
        nightHoursCost?: number | undefined;
        outOfWorkingHoursCost?: number | undefined;
    };
    fieldEngineer?: string | undefined;
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
export declare const InvoiceRequestZodSchema: z.ZodObject<{
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
    taxes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tax: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        tax: string;
    }, {
        value: number;
        tax: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    extras: {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        detail: string;
    }[];
    taxes?: {
        value: number;
        tax: string;
    }[] | undefined;
}, {
    extras: {
        type: InvoiceExtraExpenditureTypeEnum;
        value: number;
        detail: string;
    }[];
    taxes?: {
        value: number;
        tax: string;
    }[] | undefined;
}>;
export declare const SubticketInvoiceRequestZodSchema: z.ZodArray<z.ZodObject<{
    subticket: z.ZodString;
    clientInvoiceDetail: z.ZodObject<{
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
        taxes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tax: z.ZodString;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: number;
            tax: string;
        }, {
            value: number;
            tax: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes?: {
            value: number;
            tax: string;
        }[] | undefined;
    }, {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes?: {
            value: number;
            tax: string;
        }[] | undefined;
    }>;
    vendorInvoiceDetail: z.ZodObject<{
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
        taxes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tax: z.ZodString;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: number;
            tax: string;
        }, {
            value: number;
            tax: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes?: {
            value: number;
            tax: string;
        }[] | undefined;
    }, {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes?: {
            value: number;
            tax: string;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    subticket: string;
    clientInvoiceDetail: {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes?: {
            value: number;
            tax: string;
        }[] | undefined;
    };
    vendorInvoiceDetail: {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes?: {
            value: number;
            tax: string;
        }[] | undefined;
    };
}, {
    subticket: string;
    clientInvoiceDetail: {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes?: {
            value: number;
            tax: string;
        }[] | undefined;
    };
    vendorInvoiceDetail: {
        extras: {
            type: InvoiceExtraExpenditureTypeEnum;
            value: number;
            detail: string;
        }[];
        taxes?: {
            value: number;
            tax: string;
        }[] | undefined;
    };
}>, "many">;
export type InvoiceRequestType = z.infer<typeof InvoiceRequestZodSchema>;
export type SubticketInvoiceRequestType = z.infer<typeof SubticketInvoiceRequestZodSchema>;
export type SubticketInvoiceType = z.infer<typeof SubticketInvoiceZodSchema>;
export type TicketInvoiceType = z.infer<typeof TicketInvoiceSchema>;
export type InvoiceBreakDownType = z.infer<typeof InvoiceBreakDownSchema>;
export type InvoiceType = z.infer<typeof InvoiceZodSchema>;
