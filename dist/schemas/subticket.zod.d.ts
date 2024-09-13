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
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    reason?: string | undefined;
    comments?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    status: SubTicketStatusEnum;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    reason?: string | undefined;
    comments?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
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
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        reason?: string | undefined;
        comments?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }, {
        status: SubTicketStatusEnum;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        reason?: string | undefined;
        comments?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
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
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        subticketId: string;
        reason: string;
        comments: string;
    }, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        subticketId: string;
        reason: string;
        comments: string;
    }>, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        subticketId: string;
        reason: string;
        comments: string;
    }, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        subticketId: string;
        reason: string;
        comments: string;
    }>, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        subticketId: string;
        reason: string;
        comments: string;
    }, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        subticketId: string;
        reason: string;
        comments: string;
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
        location: {
            lat: number;
            long: number;
        };
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
    }, {
        location: {
            lat: number;
            long: number;
        };
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    number: string;
    SLA: number;
    ticketId: string;
    schedule: string;
    vendorContractId: string;
    statuses: {
        status: SubTicketStatusEnum;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        reason?: string | undefined;
        comments?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }[];
    fieldEngineer?: string | undefined;
    extensions?: {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        subticketId: string;
        reason: string;
        comments: string;
    }[] | undefined;
    feUpdates?: {
        location: {
            lat: number;
            long: number;
        };
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
    }[] | undefined;
}, {
    number: string;
    SLA: number;
    ticketId: string;
    schedule: string;
    vendorContractId: string;
    statuses: {
        status: SubTicketStatusEnum;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        reason?: string | undefined;
        comments?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }[];
    fieldEngineer?: string | undefined;
    extensions?: {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        subticketId: string;
        reason: string;
        comments: string;
    }[] | undefined;
    feUpdates?: {
        location: {
            lat: number;
            long: number;
        };
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
    }[] | undefined;
}>;
export declare const subticketUpdateZodSchema: z.ZodObject<{
    status: z.ZodNativeEnum<typeof SubTicketStatusEnum>;
}, "strip", z.ZodTypeAny, {
    status: SubTicketStatusEnum;
}, {
    status: SubTicketStatusEnum;
}>;
export declare const rejectedSubticketZodSchema: z.ZodObject<{
    subticketId: z.ZodString;
    reason: z.ZodString;
    comments: z.ZodString;
    fieldEngineer: z.ZodString;
    createdAt: z.ZodDate;
    createdBy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fieldEngineer: string;
    createdBy: string;
    subticketId: string;
    reason: string;
    comments: string;
    createdAt: Date;
}, {
    fieldEngineer: string;
    createdBy: string;
    subticketId: string;
    reason: string;
    comments: string;
    createdAt: Date;
}>;
export type SubTicketType = z.infer<typeof subticketZodSchema>;
export type SubTicketStatusType = z.infer<typeof subticketStatusZodSchema>;
export type RejectedSubticketType = z.infer<typeof rejectedSubticketZodSchema>;
