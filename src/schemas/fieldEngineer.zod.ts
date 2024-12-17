import { z } from "zod";
import {
  CountryEnum,
  FieldEngineerWorkStatusEnum,
  PunctualityEnum,
} from "../enums";
import { LoginZodSchema } from "./auth.zod";
import { addressZodSchema, idPattern } from "./common.zod";

export const locationZodSchema = z.object({
  lat: z.number(),
  long: z.number(),
});

export const fieldEngineerZodSchema = z.object({
  user: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid user Id",
  }),
  vendorContracts: z
    .array(
      z.string().refine((id) => idPattern.test(id), {
        message: "Invalid vendor contact Id",
      })
    )
    .default([]),
  address: addressZodSchema,
  yearsOfExperience: z.number().default(0),
  ticketRatings: z.array(
    z.object({
      ticket: z.string().refine((id) => idPattern.test(id), {
        message: "Invalid ticket Id",
      }),
      rating: z.number().min(0).max(5),
    })
  ),
  rating: z.number().min(0).max(5),
});

export const fieldEngineerRegisterZodSchema = z.object({
  user: z.object({
    name: z.string().min(1, "Name cannot be blank"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(1, "Phone number cannot be blank"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .optional(),
  }),
  address: z.object({
    line1: z.string().min(1, "Address line 1 cannot be blank"),
    line2: z.string().optional(),
    city: z.string().min(1, "City cannot be blank"),
    country: z.nativeEnum(CountryEnum),
    location: z.object({
      lat: z.number(),
      long: z.number(),
    }),
  }),
});

export const fieldEngineerStatusZodSchema = z.object({
  workStatus: z.nativeEnum(FieldEngineerWorkStatusEnum),
  location: locationZodSchema,
  checkType: z.nativeEnum(PunctualityEnum).default(PunctualityEnum.AUTO),
  approved: z.boolean().optional().default(true),
  message: z.string().optional(),
});

//* view if to fix this
export const cancelSubticketZodSchema = z.object({
  subticketId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid subticket Id",
  }),
  reason: z.string().min(1, "Reason cannot be blank"),
  comments: z.string().min(1, "Comments cannot be blank"),
});

export const fieldEngineerGetSubTicketsZodSchema = z.object({
  input_date: z
    .string()
    .min(1, "Input date cannot be blank")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
});

export const fieldEngineerWorkStatusZodSchema = z
  .object({
    subticketId: z.string().refine((id) => idPattern.test(id), {
      message: "Invalid subticket Id",
    }),
    location: locationZodSchema,
    event: z.nativeEnum(FieldEngineerWorkStatusEnum),
    message: z.string().optional(),
    timestamp: z.string().optional(),
  })
  .refine(
    (data) => {
      // if even is checkedOut then timestamp is required
      if (data.event === FieldEngineerWorkStatusEnum.CHECKED_OUT) {
        return !!data.timestamp;
      }
      return true;
    },
    {
      message: "Timestamp is required for checkedOut event",
    }
  );

export type fieldEngineerRegisterType = z.infer<
  typeof fieldEngineerRegisterZodSchema
>;
export type LocationType = z.infer<typeof locationZodSchema>;
export type FieldEngineerType = z.infer<typeof fieldEngineerZodSchema>;
export type FieldEngineerLoginType = z.infer<typeof LoginZodSchema>;
export type FieldEngineerGetSubTicketsType = z.infer<
  typeof fieldEngineerGetSubTicketsZodSchema
>;
export type FieldEngineerUpdateLocationType = z.infer<
  typeof fieldEngineerWorkStatusZodSchema
>;
export type FieldEngineerStatusType = z.infer<
  typeof fieldEngineerStatusZodSchema
>;
export type OverriddenFieldEngineerType = FieldEngineerType & {
  subtickets: string[];
  tickets: string[];
};
