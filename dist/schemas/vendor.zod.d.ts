import { z } from "zod";
import { ContractStatusEnum, CountryEnum } from "../enums";
export declare const vendorZodSchema: z.ZodObject<{
    name: z.ZodString;
    address: z.ZodObject<{
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
        country: CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    }, {
        country: CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    }>;
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
    vendorContracts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    countriesTheyServe: z.ZodArray<z.ZodNativeEnum<typeof CountryEnum>, "many">;
    clientsTheyWorkedFor: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    address: {
        country: CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    };
    name: string;
    pointOfContact: [{
        email: string;
        name: string;
        phoneNumber: string;
    }, ...{
        email: string;
        name: string;
        phoneNumber: string;
    }[]];
    countriesTheyServe: CountryEnum[];
    clientsTheyWorkedFor: string[];
    vendorContracts?: string[] | undefined;
}, {
    address: {
        country: CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    };
    name: string;
    pointOfContact: [{
        email: string;
        name: string;
        phoneNumber: string;
    }, ...{
        email: string;
        name: string;
        phoneNumber: string;
    }[]];
    countriesTheyServe: CountryEnum[];
    clientsTheyWorkedFor: string[];
    vendorContracts?: string[] | undefined;
}>;
export declare const vendorContractZodSchema: z.ZodObject<{
    vendorId: z.ZodString;
    contractNumber: z.ZodString;
    uploadedFiles: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
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
        country: z.ZodNativeEnum<typeof CountryEnum>;
        currency: z.ZodNativeEnum<typeof import("../enums").CurrencyEnum>;
        outOfWorkingHoursRate: z.ZodNumber;
        nightRate: z.ZodNumber;
        applicableSites: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
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
        country: CountryEnum;
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
        country: CountryEnum;
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
        country: CountryEnum;
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
    expiryDate: z.ZodEffects<z.ZodString, string, string>;
    contractStartDate: z.ZodEffects<z.ZodString, string, string>;
    onBoardingDate: z.ZodEffects<z.ZodString, string, string>;
    signedContractCopy: z.ZodString;
    clientContracts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    status: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof ContractStatusEnum>>>;
    fieldEngineers: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    status: ContractStatusEnum;
    contractNumber: string;
    billingDetails: {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
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
    expiryDate: string;
    contractStartDate: string;
    onBoardingDate: string;
    vendorId: string;
    fieldEngineers: string[];
    clientContracts?: string[] | undefined;
    uploadedFiles?: string[] | undefined;
}, {
    contractNumber: string;
    billingDetails: {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
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
    expiryDate: string;
    contractStartDate: string;
    onBoardingDate: string;
    vendorId: string;
    fieldEngineers: string[];
    status?: ContractStatusEnum | undefined;
    clientContracts?: string[] | undefined;
    uploadedFiles?: string[] | undefined;
}>;
export type VendorType = z.infer<typeof vendorZodSchema>;
export type VendorContractType = z.infer<typeof vendorContractZodSchema>;
