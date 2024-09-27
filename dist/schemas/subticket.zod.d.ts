import { z } from "zod";
import { SubTicketStatusEnum } from "../enums";
export declare const subticketStatusZodSchema: z.ZodObject<{
    status: z.ZodNativeEnum<typeof SubTicketStatusEnum>;
    reason: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    createdBy: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    updatedBy: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
    ticketId: z.ZodEffects<z.ZodString, string, string>;
    number: z.ZodString;
    vendorContractId: z.ZodEffects<z.ZodString, string, string>;
    schedule: z.ZodEffects<z.ZodString, string, string>;
    statuses: z.ZodArray<z.ZodObject<{
        status: z.ZodNativeEnum<typeof SubTicketStatusEnum>;
        reason: z.ZodOptional<z.ZodString>;
        comments: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
        createdBy: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        updatedBy: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
    fieldEngineer: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    extensions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
        subticketId: z.ZodEffects<z.ZodString, string, string>;
        status: z.ZodNativeEnum<typeof import("../enums").ExtensionStatusEnum>;
        type: z.ZodNativeEnum<typeof import("../enums").BillingTypeEnum>;
        reason: z.ZodString;
        comments: z.ZodString;
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
    }, "strip", z.ZodTypeAny, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        subticketId: string;
        reason: string;
        comments: string;
    }, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        subticketId: string;
        reason: string;
        comments: string;
    }>, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        subticketId: string;
        reason: string;
        comments: string;
    }, {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
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
        checkType: z.ZodNativeEnum<typeof import("../enums").PunctualityEnum>;
        approved: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        approved: boolean;
        location: {
            lat: number;
            long: number;
        };
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        checkType: import("../enums").PunctualityEnum;
        message?: string | undefined;
    }, {
        location: {
            lat: number;
            long: number;
        };
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        checkType: import("../enums").PunctualityEnum;
        approved?: boolean | undefined;
        message?: string | undefined;
    }>, "many">>;
    tasks: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    number: string;
    SLA: number;
    tasks: string[];
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
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        subticketId: string;
        reason: string;
        comments: string;
    }[] | undefined;
    feUpdates?: {
        approved: boolean;
        location: {
            lat: number;
            long: number;
        };
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        checkType: import("../enums").PunctualityEnum;
        message?: string | undefined;
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
    tasks?: string[] | undefined;
    extensions?: {
        type: import("../enums").BillingTypeEnum;
        status: import("../enums").ExtensionStatusEnum;
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
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
        checkType: import("../enums").PunctualityEnum;
        approved?: boolean | undefined;
        message?: string | undefined;
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
    subticketId: z.ZodEffects<z.ZodString, string, string>;
    reason: z.ZodString;
    comments: z.ZodString;
    fieldEngineer: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    fieldEngineer: string;
    subticketId: string;
    reason: string;
    comments: string;
}, {
    fieldEngineer: string;
    subticketId: string;
    reason: string;
    comments: string;
}>;
export type SubTicketType = z.infer<typeof subticketZodSchema>;
export type SubTicketStatusType = z.infer<typeof subticketStatusZodSchema>;
export type RejectedSubticketType = z.infer<typeof rejectedSubticketZodSchema>;
