import { z } from "zod";
import { BillingTypeEnum, CountryEnum, CurrencyEnum, ExtensionStatusEnum } from "../enums";
export declare const idPattern: RegExp;
export declare const contactDetailZodSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phoneNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    phoneNumber: string;
}, {
    email: string;
    name: string;
    phoneNumber: string;
}>;
export declare const addressZodSchema: z.ZodObject<{
    line1: z.ZodString;
    line2: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    country: z.ZodNativeEnum<typeof CountryEnum>;
}, "strip", z.ZodTypeAny, {
    line1: string;
    city: string;
    country: CountryEnum;
    line2?: string | undefined;
}, {
    line1: string;
    city: string;
    country: CountryEnum;
    line2?: string | undefined;
}>;
export declare const billingDetailZodSchema: z.ZodObject<{
    type: z.ZodNativeEnum<typeof BillingTypeEnum>;
    additionalRates: z.ZodArray<z.ZodObject<{
        hours: z.ZodNumber;
        rate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        hours: number;
        rate: number;
    }, {
        hours: number;
        rate: number;
    }>, "many">;
    country: z.ZodNativeEnum<typeof CountryEnum>;
    currency: z.ZodNativeEnum<typeof CurrencyEnum>;
    outOfWorkingHoursRate: z.ZodNumber;
    nightRate: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: BillingTypeEnum;
    country: CountryEnum;
    additionalRates: {
        hours: number;
        rate: number;
    }[];
    currency: CurrencyEnum;
    outOfWorkingHoursRate: number;
    nightRate: number;
}, {
    type: BillingTypeEnum;
    country: CountryEnum;
    additionalRates: {
        hours: number;
        rate: number;
    }[];
    currency: CurrencyEnum;
    outOfWorkingHoursRate: number;
    nightRate: number;
}>;
export declare const scheduleZodSchema: z.ZodObject<{
    day: z.ZodString;
    starttime: z.ZodEffects<z.ZodString, string, string>;
    endtime: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    day: string;
    starttime: string;
    endtime: string;
}, {
    day: string;
    starttime: string;
    endtime: string;
}>;
export declare const siteAddressZodSchema: z.ZodObject<{
    cageNumber: z.ZodOptional<z.ZodString>;
    coloDetails: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    cageNumber?: string | undefined;
    coloDetails?: string | undefined;
}, {
    cageNumber?: string | undefined;
    coloDetails?: string | undefined;
}>;
export declare const documentZodSchema: z.ZodObject<{
    projectDescription: z.ZodString;
    MOPs: z.ZodString;
    SOWUpload: z.ZodString;
}, "strip", z.ZodTypeAny, {
    projectDescription: string;
    MOPs: string;
    SOWUpload: string;
}, {
    projectDescription: string;
    MOPs: string;
    SOWUpload: string;
}>;
export declare const communicationZodSchema: z.ZodObject<{
    consumerPortal: z.ZodObject<{
        username: z.ZodString;
        password: z.ZodString;
        notes: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        password: string;
        username: string;
        notes?: string | undefined;
    }, {
        password: string;
        username: string;
        notes?: string | undefined;
    }>;
    communication: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    consumerPortal: {
        password: string;
        username: string;
        notes?: string | undefined;
    };
    communication: string[];
}, {
    consumerPortal: {
        password: string;
        username: string;
        notes?: string | undefined;
    };
    communication: string[];
}>;
export declare const extensionZodSchema: z.ZodObject<{
    subticketId: z.ZodString;
    status: z.ZodNativeEnum<typeof ExtensionStatusEnum>;
    type: z.ZodNativeEnum<typeof BillingTypeEnum>;
    reason: z.ZodString;
    comments: z.ZodString;
    duration: z.ZodNumber;
    startTime: z.ZodEffects<z.ZodString, string, string>;
    endTime: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    type: BillingTypeEnum;
    status: ExtensionStatusEnum;
    subticketId: string;
    reason: string;
    comments: string;
    duration: number;
    startTime: string;
    endTime: string;
}, {
    type: BillingTypeEnum;
    status: ExtensionStatusEnum;
    subticketId: string;
    reason: string;
    comments: string;
    duration: number;
    startTime: string;
    endTime: string;
}>;
export type AddressType = z.infer<typeof addressZodSchema>;
export type ContactDetailType = z.infer<typeof contactDetailZodSchema>;
export type ScheduleType = z.infer<typeof scheduleZodSchema>;
export type BillingDetailType = z.infer<typeof billingDetailZodSchema>;
export type SiteAddressType = z.infer<typeof siteAddressZodSchema>;
export type DocumentType = z.infer<typeof documentZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
export type ExtensionType = z.infer<typeof extensionZodSchema>;
