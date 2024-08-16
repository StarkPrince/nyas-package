import { z } from "zod";
import { SubTicketStatusEnum } from "../enums";
export declare const subticketStatusZodSchema: z.ZodObject<{
    status: z.ZodNativeEnum<typeof SubTicketStatusEnum>;
    createdBy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: SubTicketStatusEnum;
    createdBy: string;
}, {
    status: SubTicketStatusEnum;
    createdBy: string;
}>;
export declare const subticketZodSchema: z.ZodObject<{
    ticketId: z.ZodString;
    number: z.ZodString;
    vendorContractId: z.ZodString;
    schedule: z.ZodString;
    statuses: z.ZodArray<z.ZodObject<{
        status: z.ZodNativeEnum<typeof SubTicketStatusEnum>;
        createdBy: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: SubTicketStatusEnum;
        createdBy: string;
    }, {
        status: SubTicketStatusEnum;
        createdBy: string;
    }>, "many">;
    SLA: z.ZodNumber;
    fieldEngineer: z.ZodString;
    extensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fieldEngineer: z.ZodString;
        status: z.ZodNativeEnum<typeof import("../enums").ExtensionStatusEnum>;
        type: z.ZodNativeEnum<typeof import("../enums").BillingTypeEnum>;
        reason: z.ZodString;
        comments: z.ZodString;
        startTime: z.ZodEffects<z.ZodString, string, string>;
        endTime: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        fieldEngineer: string;
        status: import("../enums").ExtensionStatusEnum;
        type: import("../enums").BillingTypeEnum;
        reason: string;
        comments: string;
        startTime: string;
        endTime: string;
    }, {
        fieldEngineer: string;
        status: import("../enums").ExtensionStatusEnum;
        type: import("../enums").BillingTypeEnum;
        reason: string;
        comments: string;
        startTime: string;
        endTime: string;
    }>, "many">>;
    feUpdates: z.ZodEffects<z.ZodArray<z.ZodObject<{
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
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
        timestamp: string;
    }, {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
        timestamp: string;
    }>, "many">, {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
        timestamp: string;
    }[], {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
        timestamp: string;
    }[]>;
}, "strip", z.ZodTypeAny, {
    number: string;
    fieldEngineer: string;
    ticketId: string;
    vendorContractId: string;
    schedule: string;
    statuses: {
        status: SubTicketStatusEnum;
        createdBy: string;
    }[];
    SLA: number;
    feUpdates: {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
        timestamp: string;
    }[];
    extensions?: {
        fieldEngineer: string;
        status: import("../enums").ExtensionStatusEnum;
        type: import("../enums").BillingTypeEnum;
        reason: string;
        comments: string;
        startTime: string;
        endTime: string;
    }[] | undefined;
}, {
    number: string;
    fieldEngineer: string;
    ticketId: string;
    vendorContractId: string;
    schedule: string;
    statuses: {
        status: SubTicketStatusEnum;
        createdBy: string;
    }[];
    SLA: number;
    feUpdates: {
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        location: {
            lat: number;
            long: number;
        };
        timestamp: string;
    }[];
    extensions?: {
        fieldEngineer: string;
        status: import("../enums").ExtensionStatusEnum;
        type: import("../enums").BillingTypeEnum;
        reason: string;
        comments: string;
        startTime: string;
        endTime: string;
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
