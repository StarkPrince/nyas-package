import { z } from "zod";
import { ContractStatusEnum, CountryEnum } from "../enums";
export declare const vendorContractZodSchema: z.ZodObject<{
    vendorId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
        applicableSites: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
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
    }>, "atleastone">;
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
    expiryDate: z.ZodEffects<z.ZodString, string, string>;
    contractStartDate: z.ZodEffects<z.ZodString, string, string>;
    onBoardingDate: z.ZodEffects<z.ZodString, string, string>;
    signedContractCopy: z.ZodString;
    clientContracts: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    status: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof ContractStatusEnum>>>;
    fieldEngineers: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    fieldEngineers: string[];
    status: ContractStatusEnum;
    billingDetails: [{
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
    }, ...{
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
    }[]];
    pointOfContact: [{
        email: string;
        name: string;
        phoneNumber: string;
    }, ...{
        email: string;
        name: string;
        phoneNumber: string;
    }[]];
    signedContractCopy: string;
    expiryDate: string;
    contractStartDate: string;
    onBoardingDate: string;
    uploadedFiles?: string[] | undefined;
    clientContracts?: string[] | undefined;
    vendorId?: string | undefined;
}, {
    fieldEngineers: string[];
    billingDetails: [{
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
    }, ...{
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
    }[]];
    pointOfContact: [{
        email: string;
        name: string;
        phoneNumber: string;
    }, ...{
        email: string;
        name: string;
        phoneNumber: string;
    }[]];
    signedContractCopy: string;
    expiryDate: string;
    contractStartDate: string;
    onBoardingDate: string;
    status?: ContractStatusEnum | undefined;
    uploadedFiles?: string[] | undefined;
    clientContracts?: string[] | undefined;
    vendorId?: string | undefined;
}>;
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
    vendorContracts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vendorId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
            applicableSites: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
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
        }>, "atleastone">;
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
        expiryDate: z.ZodEffects<z.ZodString, string, string>;
        contractStartDate: z.ZodEffects<z.ZodString, string, string>;
        onBoardingDate: z.ZodEffects<z.ZodString, string, string>;
        signedContractCopy: z.ZodString;
        clientContracts: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        status: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof ContractStatusEnum>>>;
        fieldEngineers: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        fieldEngineers: string[];
        status: ContractStatusEnum;
        billingDetails: [{
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
        }, ...{
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
        }[]];
        pointOfContact: [{
            email: string;
            name: string;
            phoneNumber: string;
        }, ...{
            email: string;
            name: string;
            phoneNumber: string;
        }[]];
        signedContractCopy: string;
        expiryDate: string;
        contractStartDate: string;
        onBoardingDate: string;
        uploadedFiles?: string[] | undefined;
        clientContracts?: string[] | undefined;
        vendorId?: string | undefined;
    }, {
        fieldEngineers: string[];
        billingDetails: [{
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
        }, ...{
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
        }[]];
        pointOfContact: [{
            email: string;
            name: string;
            phoneNumber: string;
        }, ...{
            email: string;
            name: string;
            phoneNumber: string;
        }[]];
        signedContractCopy: string;
        expiryDate: string;
        contractStartDate: string;
        onBoardingDate: string;
        status?: ContractStatusEnum | undefined;
        uploadedFiles?: string[] | undefined;
        clientContracts?: string[] | undefined;
        vendorId?: string | undefined;
    }>, "many">>;
    countriesTheyServe: z.ZodArray<z.ZodNativeEnum<typeof CountryEnum>, "many">;
    clientsTheyWorkedFor: z.ZodArray<z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>, "many">;
}, "strip", z.ZodTypeAny, {
    address: {
        line1: string;
        city: string;
        country: CountryEnum;
        location: {
            lat: number;
            long: number;
        };
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
    clientsTheyWorkedFor: (string | undefined)[];
    vendorContracts?: {
        fieldEngineers: string[];
        status: ContractStatusEnum;
        billingDetails: [{
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
        }, ...{
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
        }[]];
        pointOfContact: [{
            email: string;
            name: string;
            phoneNumber: string;
        }, ...{
            email: string;
            name: string;
            phoneNumber: string;
        }[]];
        signedContractCopy: string;
        expiryDate: string;
        contractStartDate: string;
        onBoardingDate: string;
        uploadedFiles?: string[] | undefined;
        clientContracts?: string[] | undefined;
        vendorId?: string | undefined;
    }[] | undefined;
}, {
    address: {
        line1: string;
        city: string;
        country: CountryEnum;
        location: {
            lat: number;
            long: number;
        };
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
    clientsTheyWorkedFor: (string | undefined)[];
    vendorContracts?: {
        fieldEngineers: string[];
        billingDetails: [{
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
        }, ...{
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
        }[]];
        pointOfContact: [{
            email: string;
            name: string;
            phoneNumber: string;
        }, ...{
            email: string;
            name: string;
            phoneNumber: string;
        }[]];
        signedContractCopy: string;
        expiryDate: string;
        contractStartDate: string;
        onBoardingDate: string;
        status?: ContractStatusEnum | undefined;
        uploadedFiles?: string[] | undefined;
        clientContracts?: string[] | undefined;
        vendorId?: string | undefined;
    }[] | undefined;
}>;
export type VendorType = z.infer<typeof vendorZodSchema>;
export type VendorContractType = z.infer<typeof vendorContractZodSchema>;
export type OverriddenVendorType = Omit<VendorType, "pointOfContact"> & {
    pointOfContact: string[];
};
export type OverriddenVendorContractType = Omit<VendorContractType, "pointOfContact" | "billingDetails"> & {
    pointOfContact: string[];
    billingDetails: string[];
    contractNumber: string;
    vendorContracts: string[];
};
