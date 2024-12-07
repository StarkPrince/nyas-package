import { z } from "zod";
import { ContractStatusEnum, CountryEnum } from "../enums";
import {
  addressZodSchema,
  billingDetailZodSchema,
  contactDetailZodSchema,
} from "./common.zod";

const idPattern = /^[a-f\d]{24}$/i;

export const vendorContractZodSchema = z.object({
  vendorId: z
    .string()
    .refine((id) => idPattern.test(id), {
      message: "Invalid vendor Id",
    })
    .optional(),
  uploadedFiles: z.array(z.string()).optional(),
  billingDetails: z.array(billingDetailZodSchema).nonempty(),
  pointOfContact: z.array(contactDetailZodSchema).nonempty(),
  expiryDate: z
    .string()
    .min(1, "Expiry date cannot be blank")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  contractStartDate: z
    .string()
    .min(1, "Contract start date cannot be blank")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  onBoardingDate: z
    .string()
    .min(1, "Onboarding date cannot be blank")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  signedContractCopy: z.string().min(1, "Signed contract copy cannot be blank"),
  clientContracts: z
    .array(
      z.string().refine((id) => idPattern.test(id), {
        message: "Invalid client contract Id",
      })
    )
    .optional(),
  status: z
    .nativeEnum(ContractStatusEnum)
    .optional()
    .default(ContractStatusEnum.UPCOMING),
  fieldEngineers: z.array(z.string()),
});

export const vendorZodSchema = z.object({
  name: z.string().min(1, "Name cannot be blank"),
  address: addressZodSchema,
  pointOfContact: z.array(contactDetailZodSchema).nonempty(),
  countriesTheyServe: z.array(z.nativeEnum(CountryEnum)),
  clientsTheyWorkedFor: z.array(
    z
      .string()
      .refine((id) => idPattern.test(id), {
        message: "Invalid client Id",
      })
      .optional()
  ),
});

export const vendorUpdateZodSchema = z.object({
  name: z.string().optional(),
  address: z.string().optional(),
  pointOfContact: z.array(z.string()).optional(),
  countriesTheyServe: z.array(z.nativeEnum(CountryEnum)).optional(),
  clientsTheyWorkedFor: z.array(z.string()).optional(),
  vendorContracts: z.array(z.string()).optional(),
});

export type VendorType = z.infer<typeof vendorZodSchema>;
export type VendorContractType = z.infer<typeof vendorContractZodSchema>;
export type OverriddenVendorType = Omit<VendorType, "pointOfContact"> & {
  pointOfContact: string[];
  vendorContracts: string[];
};
export type OverriddenVendorContractType = Omit<
  VendorContractType,
  "pointOfContact" | "billingDetails"
> & {
  pointOfContact: string[];
  billingDetails: string[];
  contractNumber: string;
};
