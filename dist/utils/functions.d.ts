import { Schema } from "mongoose";
import { IBillingDetail, ISchedule, ModelSchemaEntry, ScheduleType } from "..";
export declare const detectScheduleConflict: (schedules: ScheduleType[]) => Array<{
    schedule1: any;
    schedule2: any;
}>;
export declare const getFieldEngineerSuffix: (index: number) => string;
export declare const getScheduleDuration: (schedule: any) => number;
export declare const calculatePrice: (timePeriod: ISchedule, rateDetails: IBillingDetail) => number;
export declare const isSchemaTypeArray: (schemaType: any) => schemaType is Schema.Types.Array;
export declare const isSchemaTypeObjectId: (schemaType: any) => schemaType is Schema.Types.ObjectId;
export declare const isRefField: (schemaType: {
    options: any;
    caster: {
        options: any;
    };
}) => boolean;
export declare const getReferenceFields: (schema: Schema) => string[];
export declare const getIndexedFields: (schema: Schema) => string[];
export declare const processReferences: (data: any, schema: Schema, models: {
    [key: string]: ModelSchemaEntry;
}, userId?: string | undefined) => Promise<any>;
export declare const processNestedReferences: (data: any, schema: Schema, models: {
    [key: string]: ModelSchemaEntry;
}, userId?: string) => Promise<void>;
