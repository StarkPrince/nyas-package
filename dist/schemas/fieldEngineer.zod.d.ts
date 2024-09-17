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
    user: z.ZodEffects<z.ZodString, string, string>;
    vendorContracts: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
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
        site: z.ZodEffects<z.ZodEffects<z.ZodObject<{
            siteDetails: z.ZodString;
            cageNumber: z.ZodOptional<z.ZodString>;
            coloDetails: z.ZodOptional<z.ZodString>;
            country: z.ZodNativeEnum<typeof import("../enums").CountryEnum>;
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
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }, {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }>, {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }, {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }>, {
            city: string | undefined;
            siteDetails: string;
            country: import("../enums").CountryEnum;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }, {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
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
            startdatetime: z.ZodString;
            enddateime: z.ZodString;
            taskDescription: z.ZodString;
            logistics: z.ZodArray<z.ZodString, "many">;
            difficultyLevel: z.ZodNumber;
            relatedMedia: z.ZodArray<z.ZodString, "many">;
            status: z.ZodNativeEnum<typeof import("../enums").TaskStatusEnum>;
        }, "strip", z.ZodTypeAny, {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
        }, {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
        SLA: number;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            city: string | undefined;
            siteDetails: string;
            country: import("../enums").CountryEnum;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        schedules: string[];
        teamMembers: string[];
        tasks: {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
        SLA: number;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        schedules: string[];
        teamMembers: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        tasks?: {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
    subtickets: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
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
        country: import("../enums").CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    }, {
        country: import("../enums").CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    }>;
    yearsOfExperience: z.ZodDefault<z.ZodNumber>;
    rating: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    subtickets: string[];
    user: string;
    vendorContracts: string[];
    tickets: {
        number: string;
        SLA: number;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            city: string | undefined;
            siteDetails: string;
            country: import("../enums").CountryEnum;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        schedules: string[];
        teamMembers: string[];
        tasks: {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
    address: {
        country: import("../enums").CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    };
    yearsOfExperience: number;
    rating: number;
    location?: {
        lat: number;
        long: number;
    } | undefined;
}, {
    user: string;
    address: {
        country: import("../enums").CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    };
    location?: {
        lat: number;
        long: number;
    } | undefined;
    subtickets?: string[] | undefined;
    vendorContracts?: string[] | undefined;
    tickets?: {
        number: string;
        SLA: number;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        schedules: string[];
        teamMembers: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        tasks?: {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
}>;
export declare const feUserCreationZodSchema: z.ZodObject<{
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
export declare const fieldEngineerCreationZodSchema: z.ZodObject<{
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
    vendorContracts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
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
    tickets: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        number: z.ZodString;
        chat: z.ZodString;
        title: z.ZodString;
        clientContractId: z.ZodString;
        site: z.ZodEffects<z.ZodEffects<z.ZodObject<{
            siteDetails: z.ZodString;
            cageNumber: z.ZodOptional<z.ZodString>;
            coloDetails: z.ZodOptional<z.ZodString>;
            country: z.ZodNativeEnum<typeof import("../enums").CountryEnum>;
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
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }, {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }>, {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }, {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }>, {
            city: string | undefined;
            siteDetails: string;
            country: import("../enums").CountryEnum;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        }, {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
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
            startdatetime: z.ZodString;
            enddateime: z.ZodString;
            taskDescription: z.ZodString;
            logistics: z.ZodArray<z.ZodString, "many">;
            difficultyLevel: z.ZodNumber;
            relatedMedia: z.ZodArray<z.ZodString, "many">;
            status: z.ZodNativeEnum<typeof import("../enums").TaskStatusEnum>;
        }, "strip", z.ZodTypeAny, {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
        }, {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
        SLA: number;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            city: string | undefined;
            siteDetails: string;
            country: import("../enums").CountryEnum;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        schedules: string[];
        teamMembers: string[];
        tasks: {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
        SLA: number;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        schedules: string[];
        teamMembers: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        tasks?: {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
    }>, "many">>>;
    subtickets: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
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
        country: import("../enums").CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    }, {
        country: import("../enums").CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    }>;
    yearsOfExperience: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    rating: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    subtickets: string[];
    user: {
        email: string;
        name: string;
        phoneNumber: string;
        password?: string | undefined;
    };
    tickets: {
        number: string;
        SLA: number;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            city: string | undefined;
            siteDetails: string;
            country: import("../enums").CountryEnum;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        schedules: string[];
        teamMembers: string[];
        tasks: {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
    address: {
        country: import("../enums").CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    };
    yearsOfExperience: number;
    rating: number;
    location?: {
        lat: number;
        long: number;
    } | undefined;
    vendorContracts?: string[] | undefined;
}, {
    user: {
        email: string;
        name: string;
        phoneNumber: string;
        password?: string | undefined;
    };
    address: {
        country: import("../enums").CountryEnum;
        city: string;
        location: {
            lat: number;
            long: number;
        };
        line1: string;
        line2?: string | undefined;
    };
    location?: {
        lat: number;
        long: number;
    } | undefined;
    subtickets?: string[] | undefined;
    vendorContracts?: string[] | undefined;
    tickets?: {
        number: string;
        SLA: number;
        status: import("../enums").TicketStatusEnum;
        chat: string;
        title: string;
        clientContractId: string;
        site: {
            siteDetails: string;
            country: import("../enums").CountryEnum;
            city: string;
            location: {
                lat: number;
                long: number;
            };
            cageNumber?: string | undefined;
            coloDetails?: string | undefined;
        };
        numberOfEngineers: number;
        schedules: string[];
        teamMembers: string[];
        document?: {
            projectDescription: string;
            MOPs: string;
            SOWUpload: string;
        } | undefined;
        tasks?: {
            status: import("../enums").TaskStatusEnum;
            taskName: string;
            startdatetime: string;
            enddateime: string;
            taskDescription: string;
            logistics: string[];
            difficultyLevel: number;
            relatedMedia: string[];
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
}, "strip", z.ZodTypeAny, {
    location: {
        lat: number;
        long: number;
    };
    workStatus: FieldEngineerWorkStatusEnum;
}, {
    location: {
        lat: number;
        long: number;
    };
    workStatus: FieldEngineerWorkStatusEnum;
}>;
export declare const cancelSubticketZodSchema: z.ZodObject<{
    subticketId: z.ZodString;
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
}, "strip", z.ZodTypeAny, {
    location: {
        lat: number;
        long: number;
    };
    subticketId: string;
    event: FieldEngineerWorkStatusEnum;
}, {
    location: {
        lat: number;
        long: number;
    };
    subticketId: string;
    event: FieldEngineerWorkStatusEnum;
}>;
export declare const checkedInZodSchema: z.ZodObject<{
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
    subticketId: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    location: {
        lat: number;
        long: number;
    };
    subticketId: string;
}, {
    location: {
        lat: number;
        long: number;
    };
    subticketId: string;
}>;
export type FieldEngineerCreationType = z.infer<typeof fieldEngineerCreationZodSchema>;
export type LocationType = z.infer<typeof locationZodSchema>;
export type FieldEngineerType = z.infer<typeof fieldEngineerZodSchema>;
export type FieldEngineerLoginType = z.infer<typeof LoginZodSchema>;
export type FieldEngineerGetTicketsType = z.infer<typeof fieldEngineerGetTicketsZodSchema>;
export type FieldEngineerGetSubTicketsType = z.infer<typeof fieldEngineerGetSubTicketsZodSchema>;
export type FieldEngineerUpdateLocationType = z.infer<typeof fieldEngineerUpdateLocationZodSchema>;
export type FieldEngineerStatusType = z.infer<typeof fieldEngineerStatusZodSchema>;
