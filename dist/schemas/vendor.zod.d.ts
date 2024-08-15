import { z } from "zod";
import { ContractStatusEnum, CountryEnum } from "../types/enum";
export declare const vendorZodSchema: z.ZodObject<{
    name: z.ZodString;
    address: z.ZodObject<{
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
    vendorContracts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    countriesTheyServe: z.ZodArray<z.ZodNativeEnum<typeof CountryEnum>, "many">;
    clientsTheyWorkedFor: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    address: {
        line1: string;
        city: string;
        country: CountryEnum;
        line2?: string | undefined;
    };
    contactDetails: [{
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
    name: string;
    address: {
        line1: string;
        city: string;
        country: CountryEnum;
        line2?: string | undefined;
    };
    contactDetails: [{
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
    billingDetails: z.ZodArray<z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("../types/enum").BillingTypeEnum>;
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
        currency: z.ZodNativeEnum<typeof import("../types/enum").CurrencyEnum>;
        outOfWorkingHoursRate: z.ZodNumber;
        nightRate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: import("../types/enum").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: import("../types/enum").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    }, {
        type: import("../types/enum").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: import("../types/enum").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    }>, "many">;
    contractStartDate: z.ZodString;
    onBoardingDate: z.ZodString;
    applicableSites: z.ZodArray<z.ZodString, "atleastone">;
    signedContractCopy: z.ZodString;
    clientContracts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    countriesTheyServe: z.ZodArray<z.ZodString, "atleastone">;
    clientsTheyWorkedFor: z.ZodArray<z.ZodString, "atleastone">;
    status: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof ContractStatusEnum>>>;
    fieldEngineers: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    status: ContractStatusEnum;
    countriesTheyServe: [string, ...string[]];
    clientsTheyWorkedFor: [string, ...string[]];
    vendorId: string;
    billingDetails: {
        type: import("../types/enum").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: import("../types/enum").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    }[];
    contractStartDate: string;
    onBoardingDate: string;
    applicableSites: [string, ...string[]];
    signedContractCopy: string;
    fieldEngineers: string[];
    clientContracts?: string[] | undefined;
}, {
    countriesTheyServe: [string, ...string[]];
    clientsTheyWorkedFor: [string, ...string[]];
    vendorId: string;
    billingDetails: {
        type: import("../types/enum").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: import("../types/enum").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    }[];
    contractStartDate: string;
    onBoardingDate: string;
    applicableSites: [string, ...string[]];
    signedContractCopy: string;
    fieldEngineers: string[];
    status?: ContractStatusEnum | undefined;
    clientContracts?: string[] | undefined;
}>;
export type VendorType = z.infer<typeof vendorZodSchema>;
export type VendorContractType = z.infer<typeof vendorContractZodSchema>;
