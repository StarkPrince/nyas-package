import { z } from "zod";
import { ContractStatusEnum, CountryEnum, CurrencyEnum } from "../enums";
export declare const clientZodSchema: z.ZodObject<{
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
    clientContracts: z.ZodArray<z.ZodString, "many">;
    purchaseOrderNumber: z.ZodString;
    purchaseOrderValue: z.ZodString;
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
    clientContracts: string[];
    purchaseOrderNumber: string;
    purchaseOrderValue: string;
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
    clientContracts: string[];
    purchaseOrderNumber: string;
    purchaseOrderValue: string;
}>;
export declare const clientContractZodSchema: z.ZodObject<{
    clientId: z.ZodUnion<[z.ZodObject<{
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
        clientContracts: z.ZodArray<z.ZodString, "many">;
        purchaseOrderNumber: z.ZodString;
        purchaseOrderValue: z.ZodString;
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
        clientContracts: string[];
        purchaseOrderNumber: string;
        purchaseOrderValue: string;
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
        clientContracts: string[];
        purchaseOrderNumber: string;
        purchaseOrderValue: string;
    }>, z.ZodString]>;
    billingDetails: z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        currency: z.ZodNativeEnum<typeof CurrencyEnum>;
        outOfWorkingHoursRate: z.ZodNumber;
        nightRate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    }, {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    }>, z.ZodString]>, "many">;
    applicableSites: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        cageNumber: z.ZodOptional<z.ZodString>;
        coloDetails: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    }, {
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    }>, z.ZodString]>, "many">;
    signedContractCopy: z.ZodString;
    vendorContracts: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
    }>, z.ZodString]>, "many">>;
    contactStartDate: z.ZodEffects<z.ZodString, string, string>;
    status: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof ContractStatusEnum>>>;
    onBoardingDate: z.ZodEffects<z.ZodString, string, string>;
    country: z.ZodNativeEnum<typeof CountryEnum>;
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
    currency: z.ZodNativeEnum<typeof CurrencyEnum>;
}, "strip", z.ZodTypeAny, {
    status: ContractStatusEnum;
    country: CountryEnum;
    currency: CurrencyEnum;
    billingDetails: (string | {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    })[];
    onBoardingDate: string;
    applicableSites: (string | {
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    })[];
    signedContractCopy: string;
    clientId: string | {
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
        clientContracts: string[];
        purchaseOrderNumber: string;
        purchaseOrderValue: string;
    };
    contactStartDate: string;
    pointOfContact: [{
        email: string;
        name: string;
        phoneNumber: string;
    }, ...{
        email: string;
        name: string;
        phoneNumber: string;
    }[]];
    vendorContracts?: (string | {
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
    })[] | undefined;
}, {
    country: CountryEnum;
    currency: CurrencyEnum;
    billingDetails: (string | {
        type: import("../enums").BillingTypeEnum;
        country: CountryEnum;
        additionalRates: {
            hours: number;
            rate: number;
        }[];
        currency: CurrencyEnum;
        outOfWorkingHoursRate: number;
        nightRate: number;
    })[];
    onBoardingDate: string;
    applicableSites: (string | {
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    })[];
    signedContractCopy: string;
    clientId: string | {
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
        clientContracts: string[];
        purchaseOrderNumber: string;
        purchaseOrderValue: string;
    };
    contactStartDate: string;
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
    vendorContracts?: (string | {
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
    })[] | undefined;
}>;
export type ClientType = z.infer<typeof clientZodSchema>;
export type ClientContractType = z.infer<typeof clientContractZodSchema>;
