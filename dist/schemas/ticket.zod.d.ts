import { SiteAddressType } from "@starkprince/nyas";
import { z } from "zod";
import { TaskStatusEnum } from "../enums";
export declare const assignmentZodSchema: z.ZodObject<{
    fieldEngineer: z.ZodEffects<z.ZodString, string, string>;
    vendorContract: z.ZodEffects<z.ZodString, string, string>;
    tasks: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
}, "strip", z.ZodTypeAny, {
    fieldEngineer: string;
    tasks: string[];
    vendorContract: string;
}, {
    fieldEngineer: string;
    tasks: string[];
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
export declare const ticketDocumentZodSchema: z.ZodObject<{
    projectDescription: z.ZodString;
    mopDescription: z.ZodString;
    MOP: z.ZodArray<z.ZodString, "many">;
    SOW: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    MOP: string[];
    projectDescription: string;
    mopDescription: string;
    SOW: string[];
}, {
    MOP: string[];
    projectDescription: string;
    mopDescription: string;
    SOW: string[];
}>;
export declare const taskZodSchema: z.ZodObject<{
    taskName: z.ZodString;
    startdatetime: z.ZodString;
    enddatetime: z.ZodString;
    taskDescription: z.ZodString;
    logistics: z.ZodArray<z.ZodString, "many">;
    difficultyLevel: z.ZodNumber;
    relatedMedia: z.ZodArray<z.ZodString, "many">;
    status: z.ZodNativeEnum<typeof TaskStatusEnum>;
}, "strip", z.ZodTypeAny, {
    status: TaskStatusEnum;
    taskName: string;
    startdatetime: string;
    enddatetime: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}, {
    status: TaskStatusEnum;
    taskName: string;
    startdatetime: string;
    enddatetime: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}>;
export declare const ticketZodSchema: z.ZodObject<{
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
}>;
export declare const scheduleAssignmentZodSchema: z.ZodObject<{
    schedule: z.ZodEffects<z.ZodString, string, string>;
    assignments: z.ZodArray<z.ZodObject<{
        fieldEngineer: z.ZodEffects<z.ZodString, string, string>;
        vendorContract: z.ZodEffects<z.ZodString, string, string>;
        tasks: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "strip", z.ZodTypeAny, {
        fieldEngineer: string;
        tasks: string[];
        vendorContract: string;
    }, {
        fieldEngineer: string;
        tasks: string[];
        vendorContract: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    schedule: string;
    assignments: {
        fieldEngineer: string;
        tasks: string[];
        vendorContract: string;
    }[];
}, {
    schedule: string;
    assignments: {
        fieldEngineer: string;
        tasks: string[];
        vendorContract: string;
    }[];
}>;
export declare const ticketUpdateZodSchema: z.ZodEffects<z.ZodObject<{
    ticketId: z.ZodEffects<z.ZodString, string, string>;
    scheduleAssignments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        schedule: z.ZodEffects<z.ZodString, string, string>;
        assignments: z.ZodArray<z.ZodObject<{
            fieldEngineer: z.ZodEffects<z.ZodString, string, string>;
            vendorContract: z.ZodEffects<z.ZodString, string, string>;
            tasks: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        }, "strip", z.ZodTypeAny, {
            fieldEngineer: string;
            tasks: string[];
            vendorContract: string;
        }, {
            fieldEngineer: string;
            tasks: string[];
            vendorContract: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            tasks: string[];
            vendorContract: string;
        }[];
    }, {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            tasks: string[];
            vendorContract: string;
        }[];
    }>, "many">>;
    document: z.ZodOptional<z.ZodObject<{
        projectDescription: z.ZodString;
        mopDescription: z.ZodString;
        MOP: z.ZodArray<z.ZodString, "many">;
        SOW: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    }, {
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    }>>;
    tasks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        taskName: z.ZodString;
        startdatetime: z.ZodString;
        enddatetime: z.ZodString;
        taskDescription: z.ZodString;
        logistics: z.ZodArray<z.ZodString, "many">;
        difficultyLevel: z.ZodNumber;
        relatedMedia: z.ZodArray<z.ZodString, "many">;
        status: z.ZodNativeEnum<typeof TaskStatusEnum>;
    }, "strip", z.ZodTypeAny, {
        status: TaskStatusEnum;
        taskName: string;
        startdatetime: string;
        enddatetime: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }, {
        status: TaskStatusEnum;
        taskName: string;
        startdatetime: string;
        enddatetime: string;
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
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        taskName: string;
        startdatetime: string;
        enddatetime: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }[] | undefined;
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            tasks: string[];
            vendorContract: string;
        }[];
    }[] | undefined;
    communications?: {
        consumerPortal: {
            password: string;
            username: string;
            notes?: string | undefined;
        };
        communication: string[];
    } | undefined;
}, {
    ticketId: string;
    document?: {
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        taskName: string;
        startdatetime: string;
        enddatetime: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }[] | undefined;
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            tasks: string[];
            vendorContract: string;
        }[];
    }[] | undefined;
    communications?: {
        consumerPortal: {
            password: string;
            username: string;
            notes?: string | undefined;
        };
        communication: string[];
    } | undefined;
}>, {
    ticketId: string;
    document?: {
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        taskName: string;
        startdatetime: string;
        enddatetime: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }[] | undefined;
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            tasks: string[];
            vendorContract: string;
        }[];
    }[] | undefined;
    communications?: {
        consumerPortal: {
            password: string;
            username: string;
            notes?: string | undefined;
        };
        communication: string[];
    } | undefined;
}, {
    ticketId: string;
    document?: {
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        taskName: string;
        startdatetime: string;
        enddatetime: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }[] | undefined;
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            tasks: string[];
            vendorContract: string;
        }[];
    }[] | undefined;
    communications?: {
        consumerPortal: {
            password: string;
            username: string;
            notes?: string | undefined;
        };
        communication: string[];
    } | undefined;
}>;
export type ScheduleAssignmentType = z.infer<typeof scheduleAssignmentZodSchema>;
export type TicketType = z.infer<typeof ticketZodSchema>;
export type AssignmentType = z.infer<typeof assignmentZodSchema>;
export type TicketUpdateType = z.infer<typeof ticketUpdateZodSchema>;
export type TicketDocumentType = z.infer<typeof ticketDocumentZodSchema>;
export type TaskType = z.infer<typeof taskZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
export type OverriddenTicketType = TicketType & {
    number: string;
    chat: string;
    site: SiteAddressType;
    schedules: [string];
    status: string;
    tasks: [string];
    document: TicketDocumentType;
    communications: CommunicationType;
    subtickets: [string];
};
