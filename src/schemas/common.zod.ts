import { z } from "zod";
import {
  BillingTypeEnum,
  CountryEnum,
  CurrencyEnum,
  ExtensionStatusEnum,
} from "../enums";

export const idPattern = /^[a-f\d]{24}$/i;

export const contactDetailZodSchema = z.object({
  name: z.string().min(1, "Name cannot be blank"),
  email: z.string().email().min(1, "Email cannot be blank"),
  phoneNumber: z.string().min(1, "Phone number cannot be blank"),
});

export const addressZodSchema = z.object({
  line1: z.string().min(1, "Address line 1 cannot be blank"),
  line2: z.string().optional(),
  city: z.string().min(1, "City cannot be blank"),
  country: z.nativeEnum(CountryEnum),
});

export const billingDetailZodSchema = z
  .object({
    type: z.nativeEnum(BillingTypeEnum),
    additionalRates: z.array(
      z.object({
        hours: z.number().nonnegative(),
        rate: z.number().nonnegative(),
      })
    ),
    country: z.nativeEnum(CountryEnum),
    currency: z.nativeEnum(CurrencyEnum),
    outOfWorkingHoursRate: z.number().nonnegative(),
    nightRate: z.number().nonnegative(),
  })
  .strip();

export const scheduleZodSchema = z
  .object({
    day: z.string().min(1, "Day cannot be blank"),
    starttime: z
      .string()
      .min(1, "Start time cannot be blank")
      .refine(
        (time) => !isNaN(Date.parse(`1970-01-01T${time}Z`)),
        "Invalid start time format"
      ),
    endtime: z
      .string()
      .min(1, "End time cannot be blank")
      .refine(
        (time) => !isNaN(Date.parse(`1970-01-01T${time}Z`)),
        "Invalid end time format"
      ),
  })
  .strip();

export const siteAddressZodSchema = z
  .object({
    cageNumber: z.string().optional(),
    coloDetails: z.string().optional(),
  })
  .strip();

export const documentZodSchema = z
  .object({
    projectDescription: z
      .string()
      .min(1, "Project description cannot be blank"),
    MOPs: z.string().min(1, "MOPs cannot be blank"),
    SOWUpload: z.string().min(1, "SOW Upload cannot be blank"),
  })
  .strip();

export const communicationZodSchema = z
  .object({
    consumerPortal: z.object({
      username: z.string().min(1, "Username cannot be blank"),
      password: z.string().min(1, "Password cannot be blank"),
      notes: z.string().optional(),
    }),
    communication: z.array(
      z.string().min(1, "Communication detail cannot be blank")
    ),
  })
  .strip();

export const extensionZodSchema = z
  .object({
    fieldEngineer: z.string().regex(idPattern, "Invalid field Engineer ID"),
    status: z.nativeEnum(ExtensionStatusEnum),
    type: z.nativeEnum(BillingTypeEnum),
    reason: z.string().min(1, "Reason cannot be blank"),
    comments: z.string().min(1, "Comments cannot be blank"),
    startTime: z
      .string()
      .min(1, "Start time cannot be blank")
      .refine((time) => !isNaN(Date.parse(time)), "Invalid start time format"),
    endTime: z
      .string()
      .min(1, "End time cannot be blank")
      .refine((time) => !isNaN(Date.parse(time)), "Invalid end time format"),
  })
  .strip();

export type AddressType = z.infer<typeof addressZodSchema>;
export type ContactDetailType = z.infer<typeof contactDetailZodSchema>;
export type ScheduleType = z.infer<typeof scheduleZodSchema>;
export type BillingDetailType = z.infer<typeof billingDetailZodSchema>;
export type SiteAddressType = z.infer<typeof siteAddressZodSchema>;
export type DocumentType = z.infer<typeof documentZodSchema>;
export type CommunicationType = z.infer<typeof communicationZodSchema>;
export type ExtensionType = z.infer<typeof extensionZodSchema>;
