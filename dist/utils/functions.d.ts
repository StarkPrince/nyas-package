import { Schema } from "mongoose";
import { ModelSchemaEntry, ScheduleType } from "..";
export declare const detectScheduleConflict: (schedules: ScheduleType[]) => Array<{
    schedule1: ScheduleType;
    schedule2: ScheduleType;
}>;
export declare const getFieldEngineerSuffix: (index: number) => string;
export declare const getScheduleDuration: (schedule: ScheduleType) => number;
export declare const capitalizeWords: (str: string) => string;
export declare const createHtmlTemplate: (title: string, userName: string, body: string, linkText: string, linkUrl: string) => string;
export declare const createOnBoardingTemplate: (user: {
    name: string;
    role: string;
    password: string;
}, title: string, linkText: string, linkUrl: string) => string;
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
