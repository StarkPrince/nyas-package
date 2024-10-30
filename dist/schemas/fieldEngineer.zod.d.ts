import { z } from "zod";
import { CountryEnum, FieldEngineerWorkStatusEnum, PunctualityEnum } from "../enums";
import { LoginZodSchema } from "./auth.zod";
export declare const locationZodSchema: z.ZodObject<{
    lat: z.ZodNumber;
    long: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    lat: number;
    long: number;
}, {
    lat: number;
    long: number;
}>;
export declare const fieldEngineerZodSchema: z.ZodObject<{
    user: z.ZodEffects<z.ZodString, string, string>;
    vendorContracts: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    tickets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        clientContractId: z.ZodString;
        site: z.ZodString;
        numberOfEngineers: z.ZodNumber;
        SLA: z.ZodNumber;
        schedules: z.ZodArray<z.ZodObject<{
            startdatetime: z.ZodEffects<z.ZodString, string, string>;
            enddatetime: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            startdatetime: string;
            enddatetime: string;
        }, {
            startdatetime: string;
            enddatetime: string;
        }>, "many">;
        teamMembers: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "strip", z.ZodTypeAny, {
        SLA: number;
        title: string;
        clientContractId: string;
        site: string;
        numberOfEngineers: number;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        teamMembers: string[];
    }, {
        SLA: number;
        title: string;
        clientContractId: string;
        site: string;
        numberOfEngineers: number;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        teamMembers: string[];
    }>, "many">>;
    subtickets: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
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
    yearsOfExperience: z.ZodDefault<z.ZodNumber>;
    rating: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    user: string;
    vendorContracts: string[];
    tickets: {
        SLA: number;
        title: string;
        clientContractId: string;
        site: string;
        numberOfEngineers: number;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        teamMembers: string[];
    }[];
    subtickets: string[];
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
    yearsOfExperience: number;
    rating: number;
}, {
    user: string;
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
    vendorContracts?: string[] | undefined;
    tickets?: {
        SLA: number;
        title: string;
        clientContractId: string;
        site: string;
        numberOfEngineers: number;
        schedules: {
            startdatetime: string;
            enddatetime: string;
        }[];
        teamMembers: string[];
    }[] | undefined;
    subtickets?: string[] | undefined;
    yearsOfExperience?: number | undefined;
    rating?: number | undefined;
}>;
export declare const fieldEngineerRegisterZodSchema: z.ZodObject<{
    user: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        phoneNumber: z.ZodString;
        password: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        name: string;
        phoneNumber: string;
        password?: string | undefined;
    }, {
        email: string;
        name: string;
        phoneNumber: string;
        password?: string | undefined;
    }>;
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
}, "strip", z.ZodTypeAny, {
    user: {
        email: string;
        name: string;
        phoneNumber: string;
        password?: string | undefined;
    };
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
}, {
    user: {
        email: string;
        name: string;
        phoneNumber: string;
        password?: string | undefined;
    };
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
}>;
export declare const fieldEngineerStatusZodSchema: z.ZodObject<{
    workStatus: z.ZodNativeEnum<typeof FieldEngineerWorkStatusEnum>;
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
    checkType: z.ZodDefault<z.ZodNativeEnum<typeof PunctualityEnum>>;
    approved: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    approved: boolean;
    location: {
        lat: number;
        long: number;
    };
    workStatus: FieldEngineerWorkStatusEnum;
    checkType: PunctualityEnum;
    message?: string | undefined;
}, {
    location: {
        lat: number;
        long: number;
    };
    workStatus: FieldEngineerWorkStatusEnum;
    approved?: boolean | undefined;
    message?: string | undefined;
    checkType?: PunctualityEnum | undefined;
}>;
export declare const cancelSubticketZodSchema: z.ZodObject<{
    subticketId: z.ZodEffects<z.ZodString, string, string>;
    reason: z.ZodString;
    comments: z.ZodString;
}, "strip", z.ZodTypeAny, {
    subticketId: string;
    reason: string;
    comments: string;
}, {
    subticketId: string;
    reason: string;
    comments: string;
}>;
export declare const fieldEngineerGetSubTicketsZodSchema: z.ZodObject<{
    input_date: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    input_date: string;
}, {
    input_date: string;
}>;
export declare const fieldEngineerWorkStatusZodSchema: z.ZodEffects<z.ZodObject<{
    subticketId: z.ZodEffects<z.ZodString, string, string>;
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
    event: z.ZodNativeEnum<typeof FieldEngineerWorkStatusEnum>;
    message: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    location: {
        lat: number;
        long: number;
    };
    subticketId: string;
    event: FieldEngineerWorkStatusEnum;
    message?: string | undefined;
    timestamp?: string | undefined;
}, {
    location: {
        lat: number;
        long: number;
    };
    subticketId: string;
    event: FieldEngineerWorkStatusEnum;
    message?: string | undefined;
    timestamp?: string | undefined;
}>, {
    location: {
        lat: number;
        long: number;
    };
    subticketId: string;
    event: FieldEngineerWorkStatusEnum;
    message?: string | undefined;
    timestamp?: string | undefined;
}, {
    location: {
        lat: number;
        long: number;
    };
    subticketId: string;
    event: FieldEngineerWorkStatusEnum;
    message?: string | undefined;
    timestamp?: string | undefined;
}>;
export type fieldEngineerRegisterType = z.infer<typeof fieldEngineerRegisterZodSchema>;
export type LocationType = z.infer<typeof locationZodSchema>;
export type FieldEngineerType = z.infer<typeof fieldEngineerZodSchema>;
export type FieldEngineerLoginType = z.infer<typeof LoginZodSchema>;
export type FieldEngineerGetSubTicketsType = z.infer<typeof fieldEngineerGetSubTicketsZodSchema>;
export type FieldEngineerUpdateLocationType = z.infer<typeof fieldEngineerWorkStatusZodSchema>;
export type FieldEngineerStatusType = z.infer<typeof fieldEngineerStatusZodSchema>;
