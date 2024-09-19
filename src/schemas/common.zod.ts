import { z } from "zod";
import {
  BillingTypeEnum,
  countryCityMap,
  CountryEnum,
  CurrencyEnum,
  ExtensionStatusEnum,
  LogisticsEnum,
} from "../enums"; // The generated map
import { locationZodSchema } from "./fieldEngineer.zod";

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
  location: locationZodSchema,
});

export const billingDetailZodSchema = z
  .object({
    type: z.nativeEnum(BillingTypeEnum),
    additionalRates: z
      .array(
        z.object({
          hours: z.number().nonnegative(),
          rate: z.number().nonnegative(),
        })
      )
      .optional(),
    dailyRate: z.number().nonnegative().optional(), // This is also optional initially
    country: z.nativeEnum(CountryEnum),
    currency: z.nativeEnum(CurrencyEnum),
    outOfWorkingHoursRate: z.number().nonnegative(),
    nightRate: z.number().nonnegative(),
    applicableSites: z.array(
      z.string().refine((id) => idPattern.test(id), {
        message: "Invalid site Id",
      })
    ),
  })
  .refine(
    (data) =>
      (data.type === BillingTypeEnum.HOURLY && !!data.additionalRates) ||
      (data.type === BillingTypeEnum.DAILY && data.dailyRate !== undefined),
    {
      message:
        "If billing type is 'hourly', 'additionalRates' is required. If billing type is 'daily', 'dailyRate' is required.",
      path: ["type"], // Error is shown at the 'type' field
    }
  );

export const scheduleZodSchema = z.object({
  startdatetime: z
    .string()
    .min(1, "Start time cannot be blank")
    .refine((time) => !isNaN(Date.parse(time)), "Invalid start time format"),
  enddatetime: z
    .string()
    .min(1, "End time cannot be blank")
    .refine((time) => !isNaN(Date.parse(time)), "Invalid end time format"),
});

export const siteAddressZodSchema = z
  .object({
    siteDetails: z.string().min(1, "Site details cannot be blank"),
    cageNumber: z.string().optional(),
    coloDetails: z.string().optional(),
    country: z.nativeEnum(CountryEnum),
    city: z.string().min(1, "City cannot be blank"),
    location: z.object({
      lat: z.number().min(-90).max(90),
      long: z.number().min(-180).max(180),
    }),
  })
  .refine(
    (data) => {
      const cityMap = countryCityMap[data.country];
      return cityMap && Object.keys(cityMap).includes(data.city);
    },
    {
      message: "Selected city does not belong to the selected country",
      path: ["city"],
    }
  )
  .transform((data) => {
    // Convert city code to the full city name after validation
    const cityName = countryCityMap[data.country]?.[data.city];
    return {
      ...data,
      city: cityName, // Replace AITA code with the city name
    };
  });

export const extensionZodSchema = z
  .object({
    subticketId: z.string().refine((id) => idPattern.test(id), {
      message: "Invalid subticket Id",
    }),
    status: z.nativeEnum(ExtensionStatusEnum),
    type: z.nativeEnum(BillingTypeEnum),
    reason: z.string().min(1, "Reason cannot be blank"),
    comments: z.string().min(1, "Comments cannot be blank"),
    schedules: scheduleZodSchema,
  })
  .refine(
    (data) => {
      if (data.type === BillingTypeEnum.HOURLY) {
        const startdatetime = new Date(data.schedules.startdatetime).getTime();
        const enddatetime = new Date(data.schedules.enddatetime).getTime();
        const duration = enddatetime - startdatetime;
        return duration <= 3600000 && duration > 0;
      }
      return true;
    },
    {
      message: "Each schedule in HOURLY type must not exceed 1 hour",
      path: ["schedules"], // Referring to the schedules array
    }
  );

export const logisticsZodSchema = z.object({
  name: z.string().min(1, "Name cannot be blank"),
  description: z.string().min(1, "Description cannot be blank"),
  imageUrl: z.string().min(1, "Image URL cannot be blank"),
  type: z.nativeEnum(LogisticsEnum),
});

export const taskTemplateZodSchema = z.object({
  taskName: z.string(),
  taskDescription: z.string(),
  logistics: z.array(z.string()),
  difficultyLevel: z.number().min(1).max(5),
  relatedMedia: z.array(z.string()),
});

export type AddressType = z.infer<typeof addressZodSchema>;
export type ContactDetailType = z.infer<typeof contactDetailZodSchema>;
export type ScheduleType = z.infer<typeof scheduleZodSchema>;
export type BillingDetailType = z.infer<typeof billingDetailZodSchema>;
export type SiteAddressType = z.infer<typeof siteAddressZodSchema>;

export type ExtensionType = z.infer<typeof extensionZodSchema>;
export type LogisticsType = z.infer<typeof logisticsZodSchema>;
export type TaskTemplateType = z.infer<typeof taskTemplateZodSchema>;
