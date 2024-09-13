import { z } from "zod";
import { FieldEngineerWorkStatusEnum } from "../enums";
import { LoginZodSchema } from "./auth.zod";
import { addressZodSchema, idPattern } from "./common.zod";
import { rejectedSubticketZodSchema } from "./subticket.zod";
import { ticketZodSchema } from "./ticket.zod";

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
    rating: z
      .number()
      .min(1, "Rating cannot be less than 1")
      .max(5, "Rating cannot be more than 5")
      .default(5),
    loginTokens: z.array(z.string().min(1, "Token cannot be blank")).optional(),
    rejectedSubtickets: z.array(rejectedSubticketZodSchema),
  })
  .strip();

export const feUserCreationZodSchema = z.object({
  name: z.string().min(1, "Name cannot be blank"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number cannot be blank"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .optional(),
});

export const fieldEngineerCreationZodSchema = z
  .object({
    user: feUserCreationZodSchema,
    vendorContracts: z
      .array(z.string().regex(idPattern, "Invalid vendor ID"))
      .optional(),
    location: locationZodSchema.optional(),
    tickets: z.array(ticketZodSchema).optional().default([]),
    subtickets: z
      .array(z.string().regex(idPattern, "Invalid subticket Id"))
      .optional()
      .default([]),
    address: addressZodSchema,
    yearsOfExperience: z.number().optional().default(0),
    rating: z
      .number()
      .min(1, "Rating cannot be less than 1")
      .max(5, "Rating cannot be more than 5")
      .default(5),
    loginTokens: z.array(z.string().min(1, "Token cannot be blank")).optional(),
  })
  .strip();

export const fieldEngineerStatusZodSchema = z
  .object({
    workStatus: z.nativeEnum(FieldEngineerWorkStatusEnum),
    location: locationZodSchema,
  })
  .strip();

export const cancelSubticketZodSchema = z.object({
  subticketId: z.string().regex(idPattern, "Invalid subticket ID"),
  reason: z.string().min(1, "Reason cannot be blank"),
  comments: z.string().min(1, "Comments cannot be blank"),
});

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
    location: locationZodSchema,
    event: z.nativeEnum(FieldEngineerWorkStatusEnum),
  })
  .strip();

export const checkedInZodSchema = z.object({
  location: locationZodSchema,
  subticketId: z.string().regex(idPattern, "Invalid user Id"),
});

export type FieldEngineerCreationType = z.infer<
  typeof fieldEngineerCreationZodSchema
>;
export type LocationType = z.infer<typeof locationZodSchema>;
export type FieldEngineerType = z.infer<typeof fieldEngineerZodSchema>;
export type FieldEngineerLoginType = z.infer<typeof LoginZodSchema>;
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
