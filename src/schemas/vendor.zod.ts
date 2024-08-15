import { z } from "zod";
import { ContractStatusEnum, CountryEnum } from "../enums";
import {
  addressZodSchema,
  billingDetailZodSchema,
  contactDetailZodSchema,
} from "./common.zod";

const idPattern = /^[a-f\d]{24}$/i;

export const vendorZodSchema = z
  .object({
    name: z.string().min(1, "Name cannot be blank"),
    address: addressZodSchema,
    contactDetails: z.array(contactDetailZodSchema).nonempty(),
    vendorContracts: z.array(z.string().regex(idPattern)).optional(),
    countriesTheyServe: z.array(z.nativeEnum(CountryEnum)),
    clientsTheyWorkedFor: z.array(
      z.string().regex(idPattern, "Client Id not valid")
    ),
  })
  .strip();

export const vendorContractZodSchema = z
  .object({
    vendorId: z.string().regex(idPattern),
    billingDetails: z.array(billingDetailZodSchema),
    contractStartDate: z.string().min(1, "Contract start date cannot be blank"),
    onBoardingDate: z.string().min(1, "Onboarding date cannot be blank"),
    applicableSites: z
      .array(z.string())
      .nonempty()
      .min(1, "At least one applicable site must be specified"),
    signedContractCopy: z
      .string()
      .min(1, "Signed contract copy cannot be blank"),
    clientContracts: z.array(z.string().regex(idPattern)).optional(),
    countriesTheyServe: z
      .array(z.string())
      .nonempty()
      .min(1, "At least one country must be specified"),
    clientsTheyWorkedFor: z
      .array(z.string())
      .nonempty()
      .min(1, "At least one client must be specified"),
    status: z
      .nativeEnum(ContractStatusEnum)
      .optional()
      .default(ContractStatusEnum.Upcoming),
    fieldEngineers: z.array(z.string()),
  })
  .strip();

export type VendorType = z.infer<typeof vendorZodSchema>;
export type VendorContractType = z.infer<typeof vendorContractZodSchema>;
