import { z } from "zod";
import { ContractStatusEnum, CountryEnum } from "../enums";
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
        phoneNumber: string;
        name: string;
    }, {
        email: string;
        phoneNumber: string;
        name: string;
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
        phoneNumber: string;
        name: string;
    }, ...{
        email: string;
        phoneNumber: string;
        name: string;
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
        phoneNumber: string;
        name: string;
    }, ...{
        email: string;
        phoneNumber: string;
        name: string;
    }[]];
    countriesTheyServe: CountryEnum[];
    clientsTheyWorkedFor: string[];
    vendorContracts?: string[] | undefined;
}>;
export declare const vendorContractZodSchema: z.ZodObject<{
    vendorId: z.ZodString;
    billingDetails: z.ZodArray<z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("../enums").BillingTypeEnum>;
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
        currency: z.ZodNativeEnum<typeof import("../enums").CurrencyEnum>;
        outOfWorkingHoursRate: z.ZodNumber;
        nightRate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: import("../enums").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    }, {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: import("../enums").CurrencyEnum;
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
    billingDetails: {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: import("../enums").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    }[];
    applicableSites: [string, ...string[]];
    signedContractCopy: string;
    countriesTheyServe: [string, ...string[]];
    clientsTheyWorkedFor: [string, ...string[]];
    onBoardingDate: string;
    vendorId: string;
    contractStartDate: string;
    fieldEngineers: string[];
    clientContracts?: string[] | undefined;
}, {
    billingDetails: {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: import("../enums").CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    }[];
    applicableSites: [string, ...string[]];
    signedContractCopy: string;
    countriesTheyServe: [string, ...string[]];
    clientsTheyWorkedFor: [string, ...string[]];
    onBoardingDate: string;
    vendorId: string;
    contractStartDate: string;
    fieldEngineers: string[];
    status?: ContractStatusEnum | undefined;
    clientContracts?: string[] | undefined;
}>;
export type VendorType = z.infer<typeof vendorZodSchema>;
export type VendorContractType = z.infer<typeof vendorContractZodSchema>;
