import { Model, Schema } from "mongoose";
import { ScheduleType } from "..";
export declare const detectScheduleConflict: (schedules: ScheduleType[]) => Array<{
    schedule1: any;
    schedule2: any;
}>;
export declare const getFieldEngineerSuffix: (index: number) => string;
export declare const getScheduleDuration: (schedule: any) => number;
export declare function getReferenceFields(schema: Schema): string[];
export declare function getIndexedFields(schema: Schema): string[];
interface ModelSchemaEntry {
    model: Model<any>;
    schema: Schema;
}
export declare function processReferences(data: any, schema: Schema, models: {
    [key: string]: ModelSchemaEntry;
}, userId?: string | undefined): Promise<any>;
export {};
