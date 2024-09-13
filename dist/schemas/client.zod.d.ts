import { z } from "zod";
import { ContractStatusEnum } from "../enums";
export declare const clientZodSchema: z.ZodObject<{
    name: z.ZodString;
    address: z.ZodObject<{
        line1: z.ZodString;
        line2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        country: z.ZodNativeEnum<typeof import("../enums").CountryEnum>;
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
        country: import("../enums").CountryEnum;
        city: string;
        line1: string;
        line2?: string | undefined;
    }, {
        location: {
            lat: number;
            long: number;
        };
        country: import("../enums").CountryEnum;
        city: string;
        line1: string;
        line2?: string | undefined;
    }>;
    contactDetails: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
    clientContracts: z.ZodArray<z.ZodString, "many">;
    purchaseOrderNumber: z.ZodString;
    purchaseOrderValue: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: {
        location: {
            lat: number;
            long: number;
        };
        country: import("../enums").CountryEnum;
        city: string;
        line1: string;
        line2?: string | undefined;
    };
    name: string;
    contactDetails: [{
        email: string;
        name: string;
        phoneNumber: string;
    }, ...{
        email: string;
        name: string;
        phoneNumber: string;
    }[]];
    clientContracts: string[];
    purchaseOrderNumber: string;
    purchaseOrderValue: string;
}, {
    address: {
        location: {
            lat: number;
            long: number;
        };
        country: import("../enums").CountryEnum;
        city: string;
        line1: string;
        line2?: string | undefined;
    };
    name: string;
    contactDetails: [{
        email: string;
        name: string;
        phoneNumber: string;
    }, ...{
        email: string;
        name: string;
        phoneNumber: string;
    }[]];
    clientContracts: string[];
    purchaseOrderNumber: string;
    purchaseOrderValue: string;
}>;
export declare const clientContractZodSchema: z.ZodObject<{
    clientId: z.ZodString;
    contractNumber: z.ZodString;
    billingDetails: z.ZodArray<z.ZodEffects<z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("../enums").BillingTypeEnum>;
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
        country: z.ZodNativeEnum<typeof import("../enums").CountryEnum>;
        currency: z.ZodNativeEnum<typeof import("../enums").CurrencyEnum>;
        outOfWorkingHoursRate: z.ZodNumber;
        nightRate: z.ZodNumber;
        applicableSites: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        type: import("../enums").BillingTypeEnum;
        country: import("../enums").CountryEnum;
        currency: import("../enums").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
        applicableSites: string[];
        additionalRates?: {
            hours: number;
            rate: number;
        }[] | undefined;
        dailyRate?: number | undefined;
    }, {
        type: import("../enums").BillingTypeEnum;
        country: import("../enums").CountryEnum;
        currency: import("../enums").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
        applicableSites: string[];
        additionalRates?: {
            hours: number;
            rate: number;
        }[] | undefined;
        dailyRate?: number | undefined;
    }>, {
        type: import("../enums").BillingTypeEnum;
        country: import("../enums").CountryEnum;
        currency: import("../enums").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
        applicableSites: string[];
        additionalRates?: {
            hours: number;
            rate: number;
        }[] | undefined;
        dailyRate?: number | undefined;
    }, {
        type: import("../enums").BillingTypeEnum;
        country: import("../enums").CountryEnum;
        currency: import("../enums").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
        applicableSites: string[];
        additionalRates?: {
            hours: number;
            rate: number;
        }[] | undefined;
        dailyRate?: number | undefined;
    }>, "many">;
    signedContractCopy: z.ZodString;
    uploadedFiles: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    vendorContracts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    contractStartDate: z.ZodEffects<z.ZodString, string, string>;
    status: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof ContractStatusEnum>>>;
    onBoardingDate: z.ZodEffects<z.ZodString, string, string>;
    pointOfContact: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    status: ContractStatusEnum;
    clientId: string;
    contractNumber: string;
    billingDetails: {
        type: import("../enums").BillingTypeEnum;
        country: import("../enums").CountryEnum;
        currency: import("../enums").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
        applicableSites: string[];
        additionalRates?: {
            hours: number;
            rate: number;
        }[] | undefined;
        dailyRate?: number | undefined;
    }[];
    signedContractCopy: string;
    contractStartDate: string;
    onBoardingDate: string;
    pointOfContact: [{
        email: string;
        name: string;
        phoneNumber: string;
    }, ...{
        email: string;
        name: string;
        phoneNumber: string;
    }[]];
    vendorContracts?: string[] | undefined;
    uploadedFiles?: string[] | undefined;
}, {
    clientId: string;
    contractNumber: string;
    billingDetails: {
        type: import("../enums").BillingTypeEnum;
        country: import("../enums").CountryEnum;
        currency: import("../enums").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
        applicableSites: string[];
        additionalRates?: {
            hours: number;
            rate: number;
        }[] | undefined;
        dailyRate?: number | undefined;
    }[];
    signedContractCopy: string;
    contractStartDate: string;
    onBoardingDate: string;
    pointOfContact: [{
        email: string;
        name: string;
        phoneNumber: string;
    }, ...{
        email: string;
        name: string;
        phoneNumber: string;
    }[]];
    status?: ContractStatusEnum | undefined;
    vendorContracts?: string[] | undefined;
    uploadedFiles?: string[] | undefined;
}>;
export type ClientType = z.infer<typeof clientZodSchema>;
export type ClientContractType = z.infer<typeof clientContractZodSchema>;
