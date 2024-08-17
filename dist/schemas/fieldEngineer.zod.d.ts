import { z } from "zod";
import { FieldEngineerWorkStatusEnum } from "../enums";
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
    user: z.ZodString;
    vendorContracts: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    location: z.ZodOptional<z.ZodObject<{
        lat: z.ZodNumber;
        long: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        long: number;
    }, {
        lat: number;
        long: number;
    }>>;
    tickets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        number: z.ZodString;
        chat: z.ZodString;
        title: z.ZodString;
        clientContractId: z.ZodString;
        site: z.ZodObject<{
            cageNumber: z.ZodOptional<z.ZodString>;
            coloDetails: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }, {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }>;
        numberOfEngineers: z.ZodNumber;
        SLA: z.ZodNumber;
        schedules: z.ZodArray<z.ZodString, "many">;
        status: z.ZodNativeEnum<typeof import("../enums").TicketStatusEnum>;
        teamMembers: z.ZodArray<z.ZodString, "many">;
        tasks: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            taskName: z.ZodString;
            startTime: z.ZodString;
            endTime: z.ZodString;
            taskDescription: z.ZodString;
            tools: z.ZodArray<z.ZodString, "many">;
            difficultyLevel: z.ZodNumber;
            status: z.ZodNativeEnum<typeof import("../enums").TaskStatusEnum>;
        }, "strip", z.ZodTypeAny, {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }, {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }>, "many">>>;
        document: z.ZodOptional<z.ZodObject<{
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
        }>>;
        communications: z.ZodOptional<z.ZodObject<{
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
        }>>;
        subtickets: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        createdBy: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        number: string;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        SLA: number;
        schedules: string[];
        teamMembers: string[];
        tasks: {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }[];
        subtickets: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        communications?: {
            consumerPortal: {
                password: string;
                username: string;
                notes?: string | undefined;
            };
            communication: string[];
        } | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }, {
        number: string;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        SLA: number;
        schedules: string[];
        teamMembers: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        tasks?: {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }[] | undefined;
        communications?: {
            consumerPortal: {
                password: string;
                username: string;
                notes?: string | undefined;
            };
            communication: string[];
        } | undefined;
        subtickets?: string[] | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }>, "many">>;
    subtickets: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    address: z.ZodObject<{
        line1: z.ZodString;
        line2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        country: z.ZodNativeEnum<typeof import("../enums").CountryEnum>;
    }, "strip", z.ZodTypeAny, {
        line1: string;
        city: string;
        country: import("../enums").CountryEnum;
        line2?: string | undefined;
    }, {
        line1: string;
        city: string;
        country: import("../enums").CountryEnum;
        line2?: string | undefined;
    }>;
    yearsOfExperience: z.ZodDefault<z.ZodNumber>;
    rating: z.ZodDefault<z.ZodNumber>;
    loginTokens: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    address: {
        line1: string;
        city: string;
        country: import("../enums").CountryEnum;
        line2?: string | undefined;
    };
    vendorContracts: string[];
    subtickets: string[];
    user: string;
    tickets: {
        number: string;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        SLA: number;
        schedules: string[];
        teamMembers: string[];
        tasks: {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }[];
        subtickets: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        communications?: {
            consumerPortal: {
                password: string;
                username: string;
                notes?: string | undefined;
            };
            communication: string[];
        } | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }[];
    yearsOfExperience: number;
    rating: number;
    location?: {
        lat: number;
        long: number;
    } | undefined;
    loginTokens?: string[] | undefined;
}, {
    address: {
        line1: string;
        city: string;
        country: import("../enums").CountryEnum;
        line2?: string | undefined;
    };
    user: string;
    vendorContracts?: string[] | undefined;
    subtickets?: string[] | undefined;
    location?: {
        lat: number;
        long: number;
    } | undefined;
    tickets?: {
        number: string;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        SLA: number;
        schedules: string[];
        teamMembers: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        tasks?: {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }[] | undefined;
        communications?: {
            consumerPortal: {
                password: string;
                username: string;
                notes?: string | undefined;
            };
            communication: string[];
        } | undefined;
        subtickets?: string[] | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }[] | undefined;
    yearsOfExperience?: number | undefined;
    rating?: number | undefined;
    loginTokens?: string[] | undefined;
}>;
export declare const fieldEngineerCreationZodSchema: z.ZodObject<{
    user: z.ZodEffects<z.ZodObject<{
        username: z.ZodOptional<z.ZodString>;
        email: z.ZodString;
        password: z.ZodString;
        role: z.ZodDefault<z.ZodNativeEnum<typeof import("../enums").UserRolesEnum>>;
        phoneNumber: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        about: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodNativeEnum<typeof import("../enums").UserStatusEnum>>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        password: string;
        status: import("../enums").UserStatusEnum;
        name: string;
        role: import("../enums").UserRolesEnum;
        image?: string | undefined;
        phoneNumber?: string | undefined;
        username?: string | undefined;
        about?: string | undefined;
    }, {
        email: string;
        password: string;
        name: string;
        image?: string | undefined;
        status?: import("../enums").UserStatusEnum | undefined;
        phoneNumber?: string | undefined;
        username?: string | undefined;
        role?: import("../enums").UserRolesEnum | undefined;
        about?: string | undefined;
    }>, {
        email: string;
        password: string;
        status: import("../enums").UserStatusEnum;
        name: string;
        role: import("../enums").UserRolesEnum;
        image?: string | undefined;
        phoneNumber?: string | undefined;
        username?: string | undefined;
        about?: string | undefined;
    }, {
        email: string;
        password: string;
        name: string;
        image?: string | undefined;
        status?: import("../enums").UserStatusEnum | undefined;
        phoneNumber?: string | undefined;
        username?: string | undefined;
        role?: import("../enums").UserRolesEnum | undefined;
        about?: string | undefined;
    }>;
    vendorContracts: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    location: z.ZodOptional<z.ZodObject<{
        lat: z.ZodNumber;
        long: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        long: number;
    }, {
        lat: number;
        long: number;
    }>>;
    tickets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        number: z.ZodString;
        chat: z.ZodString;
        title: z.ZodString;
        clientContractId: z.ZodString;
        site: z.ZodObject<{
            cageNumber: z.ZodOptional<z.ZodString>;
            coloDetails: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }, {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }>;
        numberOfEngineers: z.ZodNumber;
        SLA: z.ZodNumber;
        schedules: z.ZodArray<z.ZodString, "many">;
        status: z.ZodNativeEnum<typeof import("../enums").TicketStatusEnum>;
        teamMembers: z.ZodArray<z.ZodString, "many">;
        tasks: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            taskName: z.ZodString;
            startTime: z.ZodString;
            endTime: z.ZodString;
            taskDescription: z.ZodString;
            tools: z.ZodArray<z.ZodString, "many">;
            difficultyLevel: z.ZodNumber;
            status: z.ZodNativeEnum<typeof import("../enums").TaskStatusEnum>;
        }, "strip", z.ZodTypeAny, {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }, {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }>, "many">>>;
        document: z.ZodOptional<z.ZodObject<{
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
        }>>;
        communications: z.ZodOptional<z.ZodObject<{
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
        }>>;
        subtickets: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        createdBy: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        number: string;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        SLA: number;
        schedules: string[];
        teamMembers: string[];
        tasks: {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }[];
        subtickets: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        communications?: {
            consumerPortal: {
                password: string;
                username: string;
                notes?: string | undefined;
            };
            communication: string[];
        } | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }, {
        number: string;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        SLA: number;
        schedules: string[];
        teamMembers: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        tasks?: {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }[] | undefined;
        communications?: {
            consumerPortal: {
                password: string;
                username: string;
                notes?: string | undefined;
            };
            communication: string[];
        } | undefined;
        subtickets?: string[] | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }>, "many">>;
    subtickets: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    address: z.ZodObject<{
        line1: z.ZodString;
        line2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        country: z.ZodNativeEnum<typeof import("../enums").CountryEnum>;
    }, "strip", z.ZodTypeAny, {
        line1: string;
        city: string;
        country: import("../enums").CountryEnum;
        line2?: string | undefined;
    }, {
        line1: string;
        city: string;
        country: import("../enums").CountryEnum;
        line2?: string | undefined;
    }>;
    yearsOfExperience: z.ZodDefault<z.ZodNumber>;
    rating: z.ZodDefault<z.ZodNumber>;
    loginTokens: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    address: {
        line1: string;
        city: string;
        country: import("../enums").CountryEnum;
        line2?: string | undefined;
    };
    vendorContracts: string[];
    subtickets: string[];
    user: {
        email: string;
        password: string;
        status: import("../enums").UserStatusEnum;
        name: string;
        role: import("../enums").UserRolesEnum;
        image?: string | undefined;
        phoneNumber?: string | undefined;
        username?: string | undefined;
        about?: string | undefined;
    };
    tickets: {
        number: string;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        SLA: number;
        schedules: string[];
        teamMembers: string[];
        tasks: {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }[];
        subtickets: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        communications?: {
            consumerPortal: {
                password: string;
                username: string;
                notes?: string | undefined;
            };
            communication: string[];
        } | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }[];
    yearsOfExperience: number;
    rating: number;
    location?: {
        lat: number;
        long: number;
    } | undefined;
    loginTokens?: string[] | undefined;
}, {
    address: {
        line1: string;
        city: string;
        country: import("../enums").CountryEnum;
        line2?: string | undefined;
    };
    user: {
        email: string;
        password: string;
        name: string;
        image?: string | undefined;
        status?: import("../enums").UserStatusEnum | undefined;
        phoneNumber?: string | undefined;
        username?: string | undefined;
        role?: import("../enums").UserRolesEnum | undefined;
        about?: string | undefined;
    };
    vendorContracts?: string[] | undefined;
    subtickets?: string[] | undefined;
    location?: {
        lat: number;
        long: number;
    } | undefined;
    tickets?: {
        number: string;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        SLA: number;
        schedules: string[];
        teamMembers: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        tasks?: {
            status: import("../enums").TaskStatusEnum;
            startTime: string;
            endTime: string;
            taskName: string;
            taskDescription: string;
            tools: string[];
            difficultyLevel: number;
        }[] | undefined;
        communications?: {
            consumerPortal: {
                password: string;
                username: string;
                notes?: string | undefined;
            };
            communication: string[];
        } | undefined;
        subtickets?: string[] | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
    }[] | undefined;
    yearsOfExperience?: number | undefined;
    rating?: number | undefined;
    loginTokens?: string[] | undefined;
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
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    location: {
        lat: number;
        long: number;
    };
    workStatus: FieldEngineerWorkStatusEnum;
    timestamp: string;
}, {
    location: {
        lat: number;
        long: number;
    };
    workStatus: FieldEngineerWorkStatusEnum;
    timestamp: string;
}>;
export declare const fieldEngineerGetTicketsZodSchema: z.ZodObject<{
    input_date: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    input_date: string;
}, {
    input_date: string;
}>;
export declare const fieldEngineerGetSubTicketsZodSchema: z.ZodObject<{
    input_date: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    input_date: string;
}, {
    input_date: string;
}>;
export declare const fieldEngineerUpdateLocationZodSchema: z.ZodObject<{
    subticketId: z.ZodString;
    lat: z.ZodNumber;
    long: z.ZodNumber;
    event: z.ZodNativeEnum<typeof FieldEngineerWorkStatusEnum>;
}, "strip", z.ZodTypeAny, {
    subticketId: string;
    lat: number;
    long: number;
    event: FieldEngineerWorkStatusEnum;
}, {
    subticketId: string;
    lat: number;
    long: number;
    event: FieldEngineerWorkStatusEnum;
}>;
export type FieldEngineerType = z.infer<typeof fieldEngineerZodSchema>;
export type FieldEngineerLoginType = z.infer<typeof LoginZodSchema>;
export type FieldEngineerGetTicketsType = z.infer<typeof fieldEngineerGetTicketsZodSchema>;
export type FieldEngineerGetSubTicketsType = z.infer<typeof fieldEngineerGetSubTicketsZodSchema>;
export type FieldEngineerUpdateLocationType = z.infer<typeof fieldEngineerUpdateLocationZodSchema>;
export type FieldEngineerStatusType = z.infer<typeof fieldEngineerStatusZodSchema>;
