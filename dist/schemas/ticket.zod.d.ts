import { z } from "zod";
import { TaskStatusEnum, TicketStatusEnum } from "../enums";
export declare const assignmentZodSchema: z.ZodObject<{
    fieldEngineer: z.ZodString;
    vendorContract: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fieldEngineer: string;
    vendorContract: string;
}, {
    fieldEngineer: string;
    vendorContract: string;
}>;
export declare const communicationZodSchema: z.ZodObject<{
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
}>;
export declare const documentZodSchema: z.ZodObject<{
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
}>;
export declare const taskZodSchema: z.ZodObject<{
    taskName: z.ZodString;
    startdatetime: z.ZodString;
    enddateime: z.ZodString;
    taskDescription: z.ZodString;
    logistics: z.ZodArray<z.ZodString, "many">;
    difficultyLevel: z.ZodNumber;
    relatedMedia: z.ZodArray<z.ZodString, "many">;
    status: z.ZodNativeEnum<typeof TaskStatusEnum>;
}, "strip", z.ZodTypeAny, {
    status: TaskStatusEnum;
    startdatetime: string;
    taskName: string;
    enddateime: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}, {
    status: TaskStatusEnum;
    startdatetime: string;
    taskName: string;
    enddateime: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}>;
export declare const ticketZodSchema: z.ZodObject<{
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
        location: {
            lat: number;
            long: number;
        };
        siteDetails: string;
        country: import("../enums").CountryEnum;
        city: string;
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    }, {
        location: {
            lat: number;
            long: number;
        };
        siteDetails: string;
        country: import("../enums").CountryEnum;
        city: string;
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    }>, {
        location: {
            lat: number;
            long: number;
        };
        siteDetails: string;
        country: import("../enums").CountryEnum;
        city: string;
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    }, {
        location: {
            lat: number;
            long: number;
        };
        siteDetails: string;
        country: import("../enums").CountryEnum;
        city: string;
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    }>, {
        city: string | undefined;
        location: {
            lat: number;
            long: number;
        };
        siteDetails: string;
        country: import("../enums").CountryEnum;
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    }, {
        location: {
            lat: number;
            long: number;
        };
        siteDetails: string;
        country: import("../enums").CountryEnum;
        city: string;
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    }>;
    numberOfEngineers: z.ZodNumber;
    SLA: z.ZodNumber;
    schedules: z.ZodArray<z.ZodString, "many">;
    status: z.ZodNativeEnum<typeof TicketStatusEnum>;
    teamMembers: z.ZodArray<z.ZodString, "many">;
    tasks: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        taskName: z.ZodString;
        startdatetime: z.ZodString;
        enddateime: z.ZodString;
        taskDescription: z.ZodString;
        logistics: z.ZodArray<z.ZodString, "many">;
        difficultyLevel: z.ZodNumber;
        relatedMedia: z.ZodArray<z.ZodString, "many">;
        status: z.ZodNativeEnum<typeof TaskStatusEnum>;
    }, "strip", z.ZodTypeAny, {
        status: TaskStatusEnum;
        startdatetime: string;
        taskName: string;
        enddateime: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }, {
        status: TaskStatusEnum;
        startdatetime: string;
        taskName: string;
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
    status: TicketStatusEnum;
    schedules: string[];
    chat: string;
    title: string;
    clientContractId: string;
    site: {
        city: string | undefined;
        location: {
            lat: number;
            long: number;
        };
        siteDetails: string;
        country: import("../enums").CountryEnum;
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    };
    numberOfEngineers: number;
    teamMembers: string[];
    tasks: {
        status: TaskStatusEnum;
        startdatetime: string;
        taskName: string;
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
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    communications?: {
        consumerPortal: {
            password: string;
            username: string;
            notes?: string | undefined;
        };
        communication: string[];
    } | undefined;
}, {
    number: string;
    SLA: number;
    status: TicketStatusEnum;
    schedules: string[];
    chat: string;
    title: string;
    clientContractId: string;
    site: {
        location: {
            lat: number;
            long: number;
        };
        siteDetails: string;
        country: import("../enums").CountryEnum;
        city: string;
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    };
    numberOfEngineers: number;
    teamMembers: string[];
    document?: {
        projectDescription: string;
        MOPs: string;
        SOWUpload: string;
    } | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    tasks?: {
        status: TaskStatusEnum;
        startdatetime: string;
        taskName: string;
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
}>;
export declare const ticketCreationZodSchema: z.ZodObject<{
    number: z.ZodString;
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
    status: z.ZodDefault<z.ZodNativeEnum<typeof TicketStatusEnum>>;
}, "strip", z.ZodTypeAny, {
    number: string;
    SLA: number;
    status: TicketStatusEnum;
    schedules: {
        startdatetime: string;
        enddatetime: string;
    }[];
    title: string;
    clientContractId: string;
    site: string;
    numberOfEngineers: number;
}, {
    number: string;
    SLA: number;
    schedules: {
        startdatetime: string;
        enddatetime: string;
    }[];
    title: string;
    clientContractId: string;
    site: string;
    numberOfEngineers: number;
    status?: TicketStatusEnum | undefined;
}>;
export declare const ticketUpdateZodSchema: z.ZodObject<{
    ticketId: z.ZodString;
    scheduleAssignments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        schedule: z.ZodString;
        assignments: z.ZodArray<z.ZodObject<{
            fieldEngineer: z.ZodString;
            vendorContract: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            fieldEngineer: string;
            vendorContract: string;
        }, {
            fieldEngineer: string;
            vendorContract: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }, {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }>, "many">>;
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
    tasks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        taskName: z.ZodString;
        startdatetime: z.ZodString;
        enddateime: z.ZodString;
        taskDescription: z.ZodString;
        logistics: z.ZodArray<z.ZodString, "many">;
        difficultyLevel: z.ZodNumber;
        relatedMedia: z.ZodArray<z.ZodString, "many">;
        status: z.ZodNativeEnum<typeof TaskStatusEnum>;
    }, "strip", z.ZodTypeAny, {
        status: TaskStatusEnum;
        startdatetime: string;
        taskName: string;
        enddateime: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }, {
        status: TaskStatusEnum;
        startdatetime: string;
        taskName: string;
        enddateime: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }>, "many">>;
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
}, "strip", z.ZodTypeAny, {
    ticketId: string;
    document?: {
        projectDescription: string;
        MOPs: string;
        SOWUpload: string;
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        startdatetime: string;
        taskName: string;
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
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }[] | undefined;
}, {
    ticketId: string;
    document?: {
        projectDescription: string;
        MOPs: string;
        SOWUpload: string;
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        startdatetime: string;
        taskName: string;
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
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }[] | undefined;
}>;
export type TicketType = z.infer<typeof ticketZodSchema>;
export type AssignmentType = z.infer<typeof assignmentZodSchema>;
export type TicketCreationType = z.infer<typeof ticketCreationZodSchema>;
export type TicketUpdateType = z.infer<typeof ticketUpdateZodSchema>;
export type DocumentType = z.infer<typeof documentZodSchema>;
export type TaskType = z.infer<typeof taskZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
