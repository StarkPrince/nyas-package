import { z } from "zod";
import { ContractStatusEnum, CountryEnum, CurrencyEnum } from "../types/enum";
import {
  addressZodSchema,
  billingDetailZodSchema,
  contactDetailZodSchema,
  idPattern,
  siteAddressZodSchema,
} from "./common.zod";
import { vendorZodSchema } from "./vendor.zod";

export const clientZodSchema = z
  .object({
    name: z.string().min(1, "Name cannot be blank"), // Ensures name is not empty
    address: addressZodSchema,
    contactDetails: z.array(contactDetailZodSchema).nonempty(),
    clientContracts: z.array(
      z.string().regex(idPattern, "Invalid contract Id")
    ),
    purchaseOrderNumber: z.string(),
    purchaseOrderValue: z.string(),
  })
  .strip();

export const clientContractZodSchema = z
  .object({
    clientId: z.union([
      clientZodSchema,
      z.string().regex(idPattern, "Invalid client Id"),
    ]),
    billingDetails: z.array(
      z.union([
        billingDetailZodSchema,
        z.string().regex(idPattern, "Invalid billing Id"),
      ])
    ),
    applicableSites: z.array(
      z.union([
        siteAddressZodSchema,
        z.string().regex(idPattern, "Invalid site Id"),
      ])
    ),
    signedContractCopy: z
      .string()
      .min(1, "Signed contract copy cannot be blank"),
    vendorContracts: z
      .array(
        z.union([
          vendorZodSchema,
          z.string().regex(idPattern, "Invalid vendor Id"),
        ])
      )
      .optional(),
    contactStartDate: z
      .string()
      .min(1, "Contact start date cannot be blank")
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    status: z
      .nativeEnum(ContractStatusEnum)
      .optional()
      .default(ContractStatusEnum.Upcoming),
    onBoardingDate: z
      .string()
      .min(1, "Onboarding date cannot be blank")
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    country: z.nativeEnum(CountryEnum),
    pointOfContact: z.array(contactDetailZodSchema).nonempty(),
    currency: z.nativeEnum(CurrencyEnum),
  })
  .strip();

export type ClientType = z.infer<typeof clientZodSchema>;
export type ClientContractType = z.infer<typeof clientContractZodSchema>;
