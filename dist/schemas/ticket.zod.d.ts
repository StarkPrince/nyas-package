import { z } from "zod";
import { TaskStatusEnum, TicketStatusEnum } from "../enums";
import { SiteAddressType } from "../schemas/common.zod";
export declare const assignmentZodSchema: z.ZodObject<{
    fieldEngineerOptions: z.ZodArray<z.ZodObject<{
        fieldEngineer: z.ZodEffects<z.ZodString, string, string>;
        vendorContract: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        fieldEngineer: string;
        vendorContract: string;
    }, {
        fieldEngineer: string;
        vendorContract: string;
    }>, "many">;
    tasks: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
}, "strip", z.ZodTypeAny, {
    tasks: string[];
    fieldEngineerOptions: {
        fieldEngineer: string;
        vendorContract: string;
    }[];
}, {
    tasks: string[];
    fieldEngineerOptions: {
        fieldEngineer: string;
        vendorContract: string;
    }[];
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
    startdatetime: string;
    enddatetime: string;
    taskName: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}, {
    status: TaskStatusEnum;
    startdatetime: string;
    enddatetime: string;
    taskName: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}>;
export declare const taskListZodSchema: z.ZodArray<z.ZodObject<{
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
    startdatetime: string;
    enddatetime: string;
    taskName: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}, {
    status: TaskStatusEnum;
    startdatetime: string;
    enddatetime: string;
    taskName: string;
    taskDescription: string;
    logistics: string[];
    difficultyLevel: number;
    relatedMedia: string[];
}>, "many">;
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
    schedules: {
        startdatetime: string;
        enddatetime: string;
    }[];
    title: string;
    clientContractId: string;
    site: string;
    numberOfEngineers: number;
    teamMembers: string[];
}, {
    SLA: number;
    schedules: {
        startdatetime: string;
        enddatetime: string;
    }[];
    title: string;
    clientContractId: string;
    site: string;
    numberOfEngineers: number;
    teamMembers: string[];
}>;
export declare const scheduleAssignmentZodSchema: z.ZodObject<{
    schedule: z.ZodEffects<z.ZodString, string, string>;
    assignments: z.ZodObject<{
        fieldEngineerOptions: z.ZodArray<z.ZodObject<{
            fieldEngineer: z.ZodEffects<z.ZodString, string, string>;
            vendorContract: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            fieldEngineer: string;
            vendorContract: string;
        }, {
            fieldEngineer: string;
            vendorContract: string;
        }>, "many">;
        tasks: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "strip", z.ZodTypeAny, {
        tasks: string[];
        fieldEngineerOptions: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }, {
        tasks: string[];
        fieldEngineerOptions: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }>;
    noOfSubtickets: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    schedule: string;
    assignments: {
        tasks: string[];
        fieldEngineerOptions: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    };
    noOfSubtickets: number;
}, {
    schedule: string;
    assignments: {
        tasks: string[];
        fieldEngineerOptions: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    };
    noOfSubtickets: number;
}>;
export declare const scheduleAssignmentListZodSchema: z.ZodArray<z.ZodObject<{
    schedule: z.ZodEffects<z.ZodString, string, string>;
    assignments: z.ZodObject<{
        fieldEngineerOptions: z.ZodArray<z.ZodObject<{
            fieldEngineer: z.ZodEffects<z.ZodString, string, string>;
            vendorContract: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            fieldEngineer: string;
            vendorContract: string;
        }, {
            fieldEngineer: string;
            vendorContract: string;
        }>, "many">;
        tasks: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "strip", z.ZodTypeAny, {
        tasks: string[];
        fieldEngineerOptions: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }, {
        tasks: string[];
        fieldEngineerOptions: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    }>;
    noOfSubtickets: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    schedule: string;
    assignments: {
        tasks: string[];
        fieldEngineerOptions: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    };
    noOfSubtickets: number;
}, {
    schedule: string;
    assignments: {
        tasks: string[];
        fieldEngineerOptions: {
            fieldEngineer: string;
            vendorContract: string;
        }[];
    };
    noOfSubtickets: number;
}>, "many">;
export declare const siteDetailsZodSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    site: z.ZodOptional<z.ZodString>;
    numberOfEngineers: z.ZodOptional<z.ZodNumber>;
    SLA: z.ZodOptional<z.ZodNumber>;
    schedules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        startdatetime: z.ZodEffects<z.ZodString, string, string>;
        enddatetime: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        startdatetime: string;
        enddatetime: string;
    }, {
        startdatetime: string;
        enddatetime: string;
    }>, "many">>;
    teamMembers: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
}, "strip", z.ZodTypeAny, {
    SLA?: number | undefined;
    schedules?: {
        startdatetime: string;
        enddatetime: string;
    }[] | undefined;
    title?: string | undefined;
    site?: string | undefined;
    numberOfEngineers?: number | undefined;
    teamMembers?: string[] | undefined;
}, {
    SLA?: number | undefined;
    schedules?: {
        startdatetime: string;
        enddatetime: string;
    }[] | undefined;
    title?: string | undefined;
    site?: string | undefined;
    numberOfEngineers?: number | undefined;
    teamMembers?: string[] | undefined;
}>;
export declare const ticketUpdateZodSchema: z.ZodEffects<z.ZodObject<{
    siteDetails: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        site: z.ZodOptional<z.ZodString>;
        numberOfEngineers: z.ZodOptional<z.ZodNumber>;
        SLA: z.ZodOptional<z.ZodNumber>;
        schedules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            startdatetime: z.ZodEffects<z.ZodString, string, string>;
            enddatetime: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            startdatetime: string;
            enddatetime: string;
        }, {
            startdatetime: string;
            enddatetime: string;
        }>, "many">>;
        teamMembers: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    }, "strip", z.ZodTypeAny, {
        SLA?: number | undefined;
        schedules?: {
            startdatetime: string;
            enddatetime: string;
        }[] | undefined;
        title?: string | undefined;
        site?: string | undefined;
        numberOfEngineers?: number | undefined;
        teamMembers?: string[] | undefined;
    }, {
        SLA?: number | undefined;
        schedules?: {
            startdatetime: string;
            enddatetime: string;
        }[] | undefined;
        title?: string | undefined;
        site?: string | undefined;
        numberOfEngineers?: number | undefined;
        teamMembers?: string[] | undefined;
    }>>;
    scheduleAssignments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        schedule: z.ZodEffects<z.ZodString, string, string>;
        assignments: z.ZodObject<{
            fieldEngineerOptions: z.ZodArray<z.ZodObject<{
                fieldEngineer: z.ZodEffects<z.ZodString, string, string>;
                vendorContract: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                fieldEngineer: string;
                vendorContract: string;
            }, {
                fieldEngineer: string;
                vendorContract: string;
            }>, "many">;
            tasks: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        }, "strip", z.ZodTypeAny, {
            tasks: string[];
            fieldEngineerOptions: {
                fieldEngineer: string;
                vendorContract: string;
            }[];
        }, {
            tasks: string[];
            fieldEngineerOptions: {
                fieldEngineer: string;
                vendorContract: string;
            }[];
        }>;
        noOfSubtickets: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        schedule: string;
        assignments: {
            tasks: string[];
            fieldEngineerOptions: {
                fieldEngineer: string;
                vendorContract: string;
            }[];
        };
        noOfSubtickets: number;
    }, {
        schedule: string;
        assignments: {
            tasks: string[];
            fieldEngineerOptions: {
                fieldEngineer: string;
                vendorContract: string;
            }[];
        };
        noOfSubtickets: number;
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
        startdatetime: string;
        enddatetime: string;
        taskName: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }, {
        status: TaskStatusEnum;
        startdatetime: string;
        enddatetime: string;
        taskName: string;
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
    document?: {
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        startdatetime: string;
        enddatetime: string;
        taskName: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }[] | undefined;
    siteDetails?: {
        SLA?: number | undefined;
        schedules?: {
            startdatetime: string;
            enddatetime: string;
        }[] | undefined;
        title?: string | undefined;
        site?: string | undefined;
        numberOfEngineers?: number | undefined;
        teamMembers?: string[] | undefined;
    } | undefined;
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            tasks: string[];
            fieldEngineerOptions: {
                fieldEngineer: string;
                vendorContract: string;
            }[];
        };
        noOfSubtickets: number;
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
    document?: {
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        startdatetime: string;
        enddatetime: string;
        taskName: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }[] | undefined;
    siteDetails?: {
        SLA?: number | undefined;
        schedules?: {
            startdatetime: string;
            enddatetime: string;
        }[] | undefined;
        title?: string | undefined;
        site?: string | undefined;
        numberOfEngineers?: number | undefined;
        teamMembers?: string[] | undefined;
    } | undefined;
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            tasks: string[];
            fieldEngineerOptions: {
                fieldEngineer: string;
                vendorContract: string;
            }[];
        };
        noOfSubtickets: number;
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
    document?: {
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        startdatetime: string;
        enddatetime: string;
        taskName: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }[] | undefined;
    siteDetails?: {
        SLA?: number | undefined;
        schedules?: {
            startdatetime: string;
            enddatetime: string;
        }[] | undefined;
        title?: string | undefined;
        site?: string | undefined;
        numberOfEngineers?: number | undefined;
        teamMembers?: string[] | undefined;
    } | undefined;
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            tasks: string[];
            fieldEngineerOptions: {
                fieldEngineer: string;
                vendorContract: string;
            }[];
        };
        noOfSubtickets: number;
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
    document?: {
        MOP: string[];
        projectDescription: string;
        mopDescription: string;
        SOW: string[];
    } | undefined;
    tasks?: {
        status: TaskStatusEnum;
        startdatetime: string;
        enddatetime: string;
        taskName: string;
        taskDescription: string;
        logistics: string[];
        difficultyLevel: number;
        relatedMedia: string[];
    }[] | undefined;
    siteDetails?: {
        SLA?: number | undefined;
        schedules?: {
            startdatetime: string;
            enddatetime: string;
        }[] | undefined;
        title?: string | undefined;
        site?: string | undefined;
        numberOfEngineers?: number | undefined;
        teamMembers?: string[] | undefined;
    } | undefined;
    scheduleAssignments?: {
        schedule: string;
        assignments: {
            tasks: string[];
            fieldEngineerOptions: {
                fieldEngineer: string;
                vendorContract: string;
            }[];
        };
        noOfSubtickets: number;
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
export declare const fieldEngineerRatingZodSchema: z.ZodObject<{
    submittedRating: z.ZodNumber;
    fieldEngineer: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fieldEngineer: string;
    submittedRating: number;
}, {
    fieldEngineer: string;
    submittedRating: number;
}>;
export declare const fieldEngineerRatingArrayZodSchema: z.ZodArray<z.ZodObject<{
    submittedRating: z.ZodNumber;
    fieldEngineer: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fieldEngineer: string;
    submittedRating: number;
}, {
    fieldEngineer: string;
    submittedRating: number;
}>, "many">;
export type FieldEngineerRatingType = z.infer<typeof fieldEngineerRatingZodSchema>;
export type TicketRatingsType = z.infer<typeof fieldEngineerRatingArrayZodSchema>;
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
    schedules: string[];
    status: TicketStatusEnum;
    tasks: string[];
    document: TicketDocumentType;
    communications: CommunicationType;
    subtickets: string[];
    ratings: TicketRatingsType;
};
