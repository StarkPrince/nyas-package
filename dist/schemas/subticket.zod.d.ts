import { z } from "zod";
import { SubticketResponseEnum, SubTicketStatusEnum, SubticketUpdateEnum } from "../enums";
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
export declare const fieldEngineerInvitationZodSchema: z.ZodObject<{
    fieldEngineerId: z.ZodEffects<z.ZodString, string, string>;
    vendorContractId: z.ZodEffects<z.ZodString, string, string>;
    status: z.ZodDefault<z.ZodNativeEnum<typeof SubticketResponseEnum>>;
    responseAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    status: SubticketResponseEnum;
    fieldEngineerId: string;
    vendorContractId: string;
    responseAt?: Date | undefined;
}, {
    fieldEngineerId: string;
    vendorContractId: string;
    status?: SubticketResponseEnum | undefined;
    responseAt?: Date | undefined;
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
    fieldEngineer: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    extensions: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
        subticketId: z.ZodEffects<z.ZodString, string, string>;
        status: z.ZodOptional<z.ZodNativeEnum<typeof import("../enums").ExtensionStatusEnum>>;
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
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        type: import("../enums").BillingTypeEnum;
        subticketId: string;
        reason: string;
        comments: string;
        status?: import("../enums").ExtensionStatusEnum | undefined;
    }, {
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        type: import("../enums").BillingTypeEnum;
        subticketId: string;
        reason: string;
        comments: string;
        status?: import("../enums").ExtensionStatusEnum | undefined;
    }>, {
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        type: import("../enums").BillingTypeEnum;
        subticketId: string;
        reason: string;
        comments: string;
        status?: import("../enums").ExtensionStatusEnum | undefined;
    }, {
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        type: import("../enums").BillingTypeEnum;
        subticketId: string;
        reason: string;
        comments: string;
        status?: import("../enums").ExtensionStatusEnum | undefined;
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
        checkType: z.ZodDefault<z.ZodNativeEnum<typeof import("../enums").PunctualityEnum>>;
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
        approved?: boolean | undefined;
        message?: string | undefined;
        checkType?: import("../enums").PunctualityEnum | undefined;
    }>, "many">>;
    tasks: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    fieldEngineerInvitations: z.ZodArray<z.ZodObject<{
        fieldEngineerId: z.ZodEffects<z.ZodString, string, string>;
        vendorContractId: z.ZodEffects<z.ZodString, string, string>;
        status: z.ZodDefault<z.ZodNativeEnum<typeof SubticketResponseEnum>>;
        responseAt: z.ZodOptional<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        status: SubticketResponseEnum;
        fieldEngineerId: string;
        vendorContractId: string;
        responseAt?: Date | undefined;
    }, {
        fieldEngineerId: string;
        vendorContractId: string;
        status?: SubticketResponseEnum | undefined;
        responseAt?: Date | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    number: string;
    SLA: number;
    tasks: string[];
    schedule: string;
    ticketId: string;
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
    fieldEngineerInvitations: {
        status: SubticketResponseEnum;
        fieldEngineerId: string;
        vendorContractId: string;
        responseAt?: Date | undefined;
    }[];
    fieldEngineer?: string | undefined;
    extensions?: {
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        type: import("../enums").BillingTypeEnum;
        subticketId: string;
        reason: string;
        comments: string;
        status?: import("../enums").ExtensionStatusEnum | undefined;
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
    schedule: string;
    ticketId: string;
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
    fieldEngineerInvitations: {
        fieldEngineerId: string;
        vendorContractId: string;
        status?: SubticketResponseEnum | undefined;
        responseAt?: Date | undefined;
    }[];
    fieldEngineer?: string | undefined;
    tasks?: string[] | undefined;
    extensions?: {
        schedule: {
            startdatetime: string;
            enddatetime: string;
        };
        type: import("../enums").BillingTypeEnum;
        subticketId: string;
        reason: string;
        comments: string;
        status?: import("../enums").ExtensionStatusEnum | undefined;
    }[] | undefined;
    feUpdates?: {
        location: {
            lat: number;
            long: number;
        };
        workStatus: import("../enums").FieldEngineerWorkStatusEnum;
        approved?: boolean | undefined;
        message?: string | undefined;
        checkType?: import("../enums").PunctualityEnum | undefined;
    }[] | undefined;
}>;
export declare const subticketUpdateZodSchema: z.ZodEffects<z.ZodObject<{
    update: z.ZodNativeEnum<typeof SubticketUpdateEnum>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof SubTicketStatusEnum>>;
    schedule: z.ZodOptional<z.ZodObject<{
        startdatetime: z.ZodEffects<z.ZodString, string, string>;
        enddatetime: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        startdatetime: string;
        enddatetime: string;
    }, {
        startdatetime: string;
        enddatetime: string;
    }>>;
    fieldEngineerId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>>;
    vendorContractId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    update: SubticketUpdateEnum;
    schedule?: {
        startdatetime: string;
        enddatetime: string;
    } | undefined;
    status?: SubTicketStatusEnum | undefined;
    fieldEngineerId?: string | null | undefined;
    vendorContractId?: string | undefined;
}, {
    update: SubticketUpdateEnum;
    schedule?: {
        startdatetime: string;
        enddatetime: string;
    } | undefined;
    status?: SubTicketStatusEnum | undefined;
    fieldEngineerId?: string | null | undefined;
    vendorContractId?: string | undefined;
}>, {
    update: SubticketUpdateEnum;
    schedule?: {
        startdatetime: string;
        enddatetime: string;
    } | undefined;
    status?: SubTicketStatusEnum | undefined;
    fieldEngineerId?: string | null | undefined;
    vendorContractId?: string | undefined;
}, {
    update: SubticketUpdateEnum;
    schedule?: {
        startdatetime: string;
        enddatetime: string;
    } | undefined;
    status?: SubTicketStatusEnum | undefined;
    fieldEngineerId?: string | null | undefined;
    vendorContractId?: string | undefined;
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
export type FieldEngineerInvitationType = z.infer<typeof fieldEngineerInvitationZodSchema>;
export type SubticketUpdateType = z.infer<typeof subticketUpdateZodSchema>;
export type OverriddenSubticketType = SubTicketType & {
    number?: string;
};
