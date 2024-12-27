import { z } from "zod";
import { BillingTypeEnum, CountryEnum, CurrencyEnum, ExtensionStatusEnum, LogisticsEnum } from "../enums";
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
    line1: string;
    city: string;
    country: CountryEnum;
    location: {
        lat: number;
        long: number;
    };
    line2?: string | undefined;
}, {
    line1: string;
    city: string;
    country: CountryEnum;
    location: {
        lat: number;
        long: number;
    };
    line2?: string | undefined;
}>;
export declare const billingDetailZodSchema: z.ZodEffects<z.ZodObject<{
    type: z.ZodNativeEnum<typeof BillingTypeEnum>;
    additionalRates: z.ZodOptional<z.ZodArray<z.ZodObject<{
        hours: z.ZodNumber;
        rate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        hours: number;
        rate: number;
    }, {
        hours: number;
        rate: number;
    }>, "many">>;
    dailyRate: z.ZodOptional<z.ZodNumber>;
    country: z.ZodNativeEnum<typeof CountryEnum>;
    currency: z.ZodNativeEnum<typeof CurrencyEnum>;
    outOfWorkingHoursRate: z.ZodNumber;
    nightRate: z.ZodNumber;
    applicableSites: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
}, "strip", z.ZodTypeAny, {
    type: BillingTypeEnum;
    country: CountryEnum;
    currency: CurrencyEnum;
    outOfWorkingHoursRate: number;
    nightRate: number;
    applicableSites: string[];
    additionalRates?: {
        hours: number;
        rate: number;
    }[] | undefined;
    dailyRate?: number | undefined;
}, {
    type: BillingTypeEnum;
    country: CountryEnum;
    currency: CurrencyEnum;
    outOfWorkingHoursRate: number;
    nightRate: number;
    applicableSites: string[];
    additionalRates?: {
        hours: number;
        rate: number;
    }[] | undefined;
    dailyRate?: number | undefined;
}>, {
    type: BillingTypeEnum;
    country: CountryEnum;
    currency: CurrencyEnum;
    outOfWorkingHoursRate: number;
    nightRate: number;
    applicableSites: string[];
    additionalRates?: {
        hours: number;
        rate: number;
    }[] | undefined;
    dailyRate?: number | undefined;
}, {
    type: BillingTypeEnum;
    country: CountryEnum;
    currency: CurrencyEnum;
    outOfWorkingHoursRate: number;
    nightRate: number;
    applicableSites: string[];
    additionalRates?: {
        hours: number;
        rate: number;
    }[] | undefined;
    dailyRate?: number | undefined;
}>;
export declare const scheduleZodSchema: z.ZodObject<{
    startdatetime: z.ZodEffects<z.ZodString, string, string>;
    enddatetime: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    startdatetime: string;
    enddatetime: string;
}, {
    startdatetime: string;
    enddatetime: string;
}>;
export declare const siteAddressZodSchema: z.ZodObject<{
    siteDetails: z.ZodString;
    cageNumber: z.ZodOptional<z.ZodString>;
    coloDetails: z.ZodOptional<z.ZodString>;
    country: z.ZodNativeEnum<typeof CountryEnum>;
    city: z.ZodString;
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
    siteDetails: string;
    city: string;
    country: CountryEnum;
    location: {
        lat: number;
        long: number;
    };
    cageNumber?: string | undefined;
    coloDetails?: string | undefined;
}, {
    siteDetails: string;
    city: string;
    country: CountryEnum;
    location: {
        lat: number;
        long: number;
    };
    cageNumber?: string | undefined;
    coloDetails?: string | undefined;
}>;
export declare const siteAddressListZodSchema: z.ZodArray<z.ZodObject<{
    siteDetails: z.ZodString;
    cageNumber: z.ZodOptional<z.ZodString>;
    coloDetails: z.ZodOptional<z.ZodString>;
    country: z.ZodNativeEnum<typeof CountryEnum>;
    city: z.ZodString;
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
    siteDetails: string;
    city: string;
    country: CountryEnum;
    location: {
        lat: number;
        long: number;
    };
    cageNumber?: string | undefined;
    coloDetails?: string | undefined;
}, {
    siteDetails: string;
    city: string;
    country: CountryEnum;
    location: {
        lat: number;
        long: number;
    };
    cageNumber?: string | undefined;
    coloDetails?: string | undefined;
}>, "many">;
export declare const extensionZodSchema: z.ZodEffects<z.ZodObject<{
    subticketId: z.ZodEffects<z.ZodString, string, string>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof ExtensionStatusEnum>>;
    type: z.ZodNativeEnum<typeof BillingTypeEnum>;
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
    type: BillingTypeEnum;
    subticketId: string;
    reason: string;
    comments: string;
    status?: ExtensionStatusEnum | undefined;
}, {
    schedule: {
        startdatetime: string;
        enddatetime: string;
    };
    type: BillingTypeEnum;
    subticketId: string;
    reason: string;
    comments: string;
    status?: ExtensionStatusEnum | undefined;
}>, {
    schedule: {
        startdatetime: string;
        enddatetime: string;
    };
    type: BillingTypeEnum;
    subticketId: string;
    reason: string;
    comments: string;
    status?: ExtensionStatusEnum | undefined;
}, {
    schedule: {
        startdatetime: string;
        enddatetime: string;
    };
    type: BillingTypeEnum;
    subticketId: string;
    reason: string;
    comments: string;
    status?: ExtensionStatusEnum | undefined;
}>;
export declare const logisticsZodSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    imageUrl: z.ZodString;
    type: z.ZodNativeEnum<typeof LogisticsEnum>;
}, "strip", z.ZodTypeAny, {
    type: LogisticsEnum;
    name: string;
    description: string;
    imageUrl: string;
}, {
    type: LogisticsEnum;
    name: string;
    description: string;
    imageUrl: string;
}>;
export declare const logisticsListZodSchema: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    imageUrl: z.ZodString;
    type: z.ZodNativeEnum<typeof LogisticsEnum>;
}, "strip", z.ZodTypeAny, {
    type: LogisticsEnum;
    name: string;
    description: string;
    imageUrl: string;
}, {
    type: LogisticsEnum;
    name: string;
    description: string;
    imageUrl: string;
}>, "many">;
export declare const taskTemplateZodSchema: z.ZodObject<{
    taskName: z.ZodString;
    taskDescription: z.ZodString;
    logistics: z.ZodArray<z.ZodString, "many">;
    difficultyLevel: z.ZodNumber;
    relatedMedia: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    taskName: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}, {
    taskName: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}>;
export declare const taskTemplateListZodSchema: z.ZodArray<z.ZodObject<{
    taskName: z.ZodString;
    taskDescription: z.ZodString;
    logistics: z.ZodArray<z.ZodString, "many">;
    difficultyLevel: z.ZodNumber;
    relatedMedia: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    taskName: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}, {
    taskName: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}>, "many">;
export declare const mediaZodSchema: z.ZodObject<{
    countries: z.ZodArray<z.ZodString, "many">;
    categories: z.ZodArray<z.ZodString, "many">;
    fileName: z.ZodString;
    fileUrl: z.ZodString;
    folder: z.ZodString;
    size: z.ZodNumber;
    uploadedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    countries: string[];
    categories: string[];
    fileName: string;
    fileUrl: string;
    folder: string;
    size: number;
    uploadedAt: string;
}, {
    countries: string[];
    categories: string[];
    fileName: string;
    fileUrl: string;
    folder: string;
    size: number;
    uploadedAt: string;
}>;
export declare const fileUploadZodSchema: z.ZodObject<{
    files: z.ZodArray<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, "many">;
    countries: z.ZodArray<z.ZodNativeEnum<typeof CountryEnum>, "many">;
    categories: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    countries: CountryEnum[];
    categories: string[];
    files: Buffer[];
}, {
    countries: CountryEnum[];
    categories: string[];
    files: Buffer[];
}>;
export type AddressType = z.infer<typeof addressZodSchema>;
export type ContactDetailType = z.infer<typeof contactDetailZodSchema>;
export type ScheduleType = z.infer<typeof scheduleZodSchema>;
export type BillingDetailType = z.infer<typeof billingDetailZodSchema>;
export type SiteAddressType = z.infer<typeof siteAddressZodSchema>;
export type ExtensionType = z.infer<typeof extensionZodSchema>;
export type LogisticsType = z.infer<typeof logisticsZodSchema>;
export type TaskTemplateType = z.infer<typeof taskTemplateZodSchema>;
