import { z } from "zod";
import { SubTicketStatusEnum } from "../enums";
export declare const subticketStatusZodSchema: z.ZodObject<{
    status: z.ZodNativeEnum<typeof SubTicketStatusEnum>;
    reason: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    createdBy: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: SubTicketStatusEnum;
    reason?: string | undefined;
    comments?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}, {
    status: SubTicketStatusEnum;
    reason?: string | undefined;
    comments?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}>;
export declare const rejectedSubticketZodSchema: z.ZodObject<{
    ticketId: z.ZodOptional<z.ZodString>;
    number: z.ZodString;
    schedule: z.ZodObject<{
        startdatetime: z.ZodEffects<z.ZodString, string, string>;
        enddatetime: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        startdatetime: string;
        enddatetime: string;
    }, {
        startdatetime: string;
        enddatetime: string;
    }>;
    SLA: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    createdBy: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    number: string;
    SLA: string;
    createdAt: Date;
    updatedAt: Date;
    schedule: {
        startdatetime: string;
        enddatetime: string;
    };
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    ticketId?: string | undefined;
}, {
    number: string;
    SLA: string;
    createdAt: Date;
    updatedAt: Date;
    schedule: {
        startdatetime: string;
        enddatetime: string;
    };
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    ticketId?: string | undefined;
}>;
export declare const subticketZodSchema: z.ZodObject<{
    ticketId: z.ZodString;
    number: z.ZodString;
    vendorContractId: z.ZodString;
    schedule: z.ZodString;
    statuses: z.ZodArray<z.ZodObject<{
        status: z.ZodNativeEnum<typeof SubTicketStatusEnum>;
        reason: z.ZodOptional<z.ZodString>;
        comments: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
        createdBy: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: SubTicketStatusEnum;
        reason?: string | undefined;
        comments?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }, {
        status: SubTicketStatusEnum;
        reason?: string | undefined;
        comments?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }>, "many">;
    SLA: z.ZodNumber;
    fieldEngineer: z.ZodOptional<z.ZodString>;
    extensions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodObject<{
        subticketId: z.ZodString;
        status: z.ZodNativeEnum<typeof import("../enums").ExtensionStatusEnum>;
        type: z.ZodNativeEnum<typeof import("../enums").BillingTypeEnum>;
        reason: z.ZodString;
        comments: z.ZodString;
        schedules: z.ZodArray<z.ZodObject<{
            startdatetime: z.ZodEffects<z.ZodString, string, string>;
            enddatetime: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            startdatetime: string;
            enddatetime: string;
        }, {
            startdatetime: string;
            enddatetime: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        reason: string;
        comments: string;
        subticketId: string;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
    }, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        reason: string;
        comments: string;
        subticketId: string;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
    }>, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        reason: string;
        comments: string;
        subticketId: string;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
    }, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        reason: string;
        comments: string;
        subticketId: string;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
    }>, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        reason: string;
        comments: string;
        subticketId: string;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
    }, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        reason: string;
        comments: string;
        subticketId: string;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
    }>, "many">>;
    feUpdates: z.ZodOptional<z.ZodArray<z.ZodObject<{
        workStatus: z.ZodNativeEnum<typeof import("../enums").FieldEngineerWorkStatusEnum>;
        location: z.ZodObject<{
            lat: z.ZodNumber;
            long: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            lat: number;
            long: number;
        }, {
            lat: number;
            long: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
    }, {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    number: string;
    SLA: number;
    ticketId: string;
    schedule: string;
    vendorContractId: string;
    statuses: {
        status: SubTicketStatusEnum;
        reason?: string | undefined;
        comments?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }[];
    fieldEngineer?: string | undefined;
    extensions?: {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        reason: string;
        comments: string;
        subticketId: string;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
    }[] | undefined;
    feUpdates?: {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
    }[] | undefined;
}, {
    number: string;
    SLA: number;
    ticketId: string;
    schedule: string;
    vendorContractId: string;
    statuses: {
        status: SubTicketStatusEnum;
        reason?: string | undefined;
        comments?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }[];
    fieldEngineer?: string | undefined;
    extensions?: {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        reason: string;
        comments: string;
        subticketId: string;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
    }[] | undefined;
    feUpdates?: {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
    }[] | undefined;
}>;
export declare const subticketUpdateZodSchema: z.ZodObject<{
    status: z.ZodNativeEnum<typeof SubTicketStatusEnum>;
}, "strip", z.ZodTypeAny, {
    status: SubTicketStatusEnum;
}, {
    status: SubTicketStatusEnum;
}>;
export type SubTicketType = z.infer<typeof subticketZodSchema>;
export type SubTicketStatusType = z.infer<typeof subticketStatusZodSchema>;
export type RejectedSubticketType = z.infer<typeof rejectedSubticketZodSchema>;
