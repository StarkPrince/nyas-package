import { z } from "zod";
import { TaskStatusEnum, TicketStatusEnum } from "../enums";
import { communicationZodSchema, documentZodSchema } from "./common.zod";
export declare const taskZodSchema: z.ZodObject<{
    taskName: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
    taskDescription: z.ZodString;
    tools: z.ZodArray<z.ZodString, "many">;
    difficultyLevel: z.ZodNumber;
    status: z.ZodNativeEnum<typeof TaskStatusEnum>;
}, "strip", z.ZodTypeAny, {
    status: TaskStatusEnum;
    startTime: string;
    endTime: string;
    taskName: string;
    taskDescription: string;
    tools: string[];
    difficultyLevel: number;
}, {
    status: TaskStatusEnum;
    startTime: string;
    endTime: string;
    taskName: string;
    taskDescription: string;
    tools: string[];
    difficultyLevel: number;
}>;
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
export declare const ticketZodSchema: z.ZodObject<{
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
    status: z.ZodNativeEnum<typeof TicketStatusEnum>;
    teamMembers: z.ZodArray<z.ZodString, "many">;
    tasks: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        taskName: z.ZodString;
        startTime: z.ZodString;
        endTime: z.ZodString;
        taskDescription: z.ZodString;
        tools: z.ZodArray<z.ZodString, "many">;
        difficultyLevel: z.ZodNumber;
        status: z.ZodNativeEnum<typeof TaskStatusEnum>;
    }, "strip", z.ZodTypeAny, {
        status: TaskStatusEnum;
        startTime: string;
        endTime: string;
        taskName: string;
        taskDescription: string;
        tools: string[];
        difficultyLevel: number;
    }, {
        status: TaskStatusEnum;
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
    status: TicketStatusEnum;
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
        status: TaskStatusEnum;
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
    status: TicketStatusEnum;
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
        status: TaskStatusEnum;
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
}>;
export declare const ticketCreationZodSchema: z.ZodObject<{
    number: z.ZodString;
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
    schedules: z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        starttime: z.ZodEffects<z.ZodString, string, string>;
        endtime: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        day: string;
        starttime: string;
        endtime: string;
    }, {
        day: string;
        starttime: string;
        endtime: string;
    }>, "many">;
    status: z.ZodDefault<z.ZodNativeEnum<typeof TicketStatusEnum>>;
}, "strip", z.ZodTypeAny, {
    number: string;
    status: TicketStatusEnum;
    title: string;
    clientContractId: string;
    site: {
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    };
    numberOfEngineers: number;
    SLA: number;
    schedules: {
        day: string;
        starttime: string;
        endtime: string;
    }[];
}, {
    number: string;
    title: string;
    clientContractId: string;
    site: {
        cageNumber?: string | undefined;
        coloDetails?: string | undefined;
    };
    numberOfEngineers: number;
    SLA: number;
    schedules: {
        day: string;
        starttime: string;
        endtime: string;
    }[];
    status?: TicketStatusEnum | undefined;
}>;
export declare const ticketUpdateZodSchema: z.ZodObject<{
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
        startTime: z.ZodString;
        endTime: z.ZodString;
        taskDescription: z.ZodString;
        tools: z.ZodArray<z.ZodString, "many">;
        difficultyLevel: z.ZodNumber;
        status: z.ZodNativeEnum<typeof TaskStatusEnum>;
    }, "strip", z.ZodTypeAny, {
        status: TaskStatusEnum;
        startTime: string;
        endTime: string;
        taskName: string;
        taskDescription: string;
        tools: string[];
        difficultyLevel: number;
    }, {
        status: TaskStatusEnum;
        startTime: string;
        endTime: string;
        taskName: string;
        taskDescription: string;
        tools: string[];
        difficultyLevel: number;
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
    document?: {
        projectDescription: string;
        MOPs: string;
        SOWUpload: string;
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
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
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }[] | undefined;
}, {
    document?: {
        projectDescription: string;
        MOPs: string;
        SOWUpload: string;
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
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
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }[] | undefined;
}>;
export type TicketType = z.infer<typeof ticketZodSchema>;
export type TaskType = z.infer<typeof taskZodSchema>;
export type DocumentType = z.infer<typeof documentZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
