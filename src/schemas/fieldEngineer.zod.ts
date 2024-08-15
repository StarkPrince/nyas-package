import { z } from "zod";
import { FieldEngineerWorkStatusEnum } from "../types/enum";
import { addressZodSchema, idPattern } from "./common.zod";
import { ticketZodSchema } from "./ticket.zod";
import { userLoginZodSchema, userZodSchema } from "./user.zod";

export const locationZodSchema = z.object({
  lat: z.number(),
  long: z.number(),
});

export const fieldEngineerZodSchema = z
  .object({
    user: z.string().regex(idPattern, "Invalid user ID"),
    vendorContracts: z
      .array(z.string().regex(idPattern, "Invalid vendor ID"))
      .default([]),
    location: locationZodSchema.optional(),
    tickets: z.array(ticketZodSchema).default([]),
    subtickets: z
      .array(z.string().regex(idPattern, "Invalid subticket Id"))
      .default([]),
    address: addressZodSchema,
    yearsOfExperience: z.number().default(0),
    rating: z.number().default(5),
    loginTokens: z.array(z.string().min(1, "Token cannot be blank")).optional(),
  })
  .strip();

export const fieldEngineerCreationZodSchema = z
  .object({
    user: userZodSchema,
    vendorContracts: z
      .array(z.string().regex(idPattern, "Invalid vendor ID"))
      .default([]),
    location: locationZodSchema.optional(),
    tickets: z.array(ticketZodSchema).default([]),
    subtickets: z
      .array(z.string().regex(idPattern, "Invalid subticket Id"))
      .default([]),
    address: addressZodSchema,
    yearsOfExperience: z.number().default(0),
    rating: z.number().default(5),
    loginTokens: z.array(z.string().min(1, "Token cannot be blank")).optional(),
  })
  .strip();

export const fieldEngineerStatusZodSchema = z
  .object({
    workStatus: z.nativeEnum(FieldEngineerWorkStatusEnum),
    location: locationZodSchema,
    timestamp: z.string().min(1, "Timestamp cannot be blank"),
  })
  .strip();

export const fieldEngineerGetTicketsZodSchema = z
  .object({
    input_date: z
      .string()
      .min(1, "Input date cannot be blank")
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  })
  .strip();

export const fieldEngineerGetSubTicketsZodSchema = z
  .object({
    input_date: z
      .string()
      .min(1, "Input date cannot be blank")
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  })
  .strip();

export const fieldEngineerUpdateLocationZodSchema = z
  .object({
    subticketId: z.string().regex(idPattern, "Invalid user Id"),
    lat: z.number(),
    long: z.number(),
    event: z.nativeEnum(FieldEngineerWorkStatusEnum),
  })
  .strip();

export type FieldEngineerType = z.infer<typeof fieldEngineerZodSchema>;
export type FieldEngineerLoginType = z.infer<typeof userLoginZodSchema>;
export type FieldEngineerGetTicketsType = z.infer<
  typeof fieldEngineerGetTicketsZodSchema
>;
export type FieldEngineerGetSubTicketsType = z.infer<
  typeof fieldEngineerGetSubTicketsZodSchema
>;
export type FieldEngineerUpdateLocationType = z.infer<
  typeof fieldEngineerUpdateLocationZodSchema
>;
export type FieldEngineerStatusType = z.infer<
  typeof fieldEngineerStatusZodSchema
>;
