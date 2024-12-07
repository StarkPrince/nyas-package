import { z } from "zod";
import { ContractStatusEnum, CurrencyEnum } from "../enums";
import {
  addressZodSchema,
  billingDetailZodSchema,
  contactDetailZodSchema,
  idPattern,
} from "./common.zod";

export const clientContractZodSchema = z.object({
  billingDetails: z.array(billingDetailZodSchema).nonempty(),
  pointOfContact: z.array(contactDetailZodSchema).nonempty(),
  clientId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid client Id",
  }),
  signedContractCopy: z.string().min(1, "Signed contract copy cannot be blank"),
  uploadedFiles: z.array(z.string()).optional(),
  expiryDate: z
    .string()
    .min(1, "Expiry date cannot be blank")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  vendorContracts: z
    .array(
      z.string().refine((id) => idPattern.test(id), {
        message: "Invalid user Id",
      })
    )
    .optional(),
  contractStartDate: z
    .string()
    .min(1, "Contact start date cannot be blank")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  status: z
    .nativeEnum(ContractStatusEnum)
    .optional()
    .default(ContractStatusEnum.UPCOMING),
  onBoardingDate: z
    .string()
    .min(1, "Onboarding date cannot be blank")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
});

export const clientZodSchema = z.object({
  name: z.string().min(1, "Name cannot be blank"), // Ensures name is not empty
  address: addressZodSchema,
  pointOfContact: z.array(contactDetailZodSchema).nonempty(),
  purchaseOrderNumber: z.string(),
  purchaseOrderValue: z.string(),
  purchaseOrderCurrency: z.nativeEnum(CurrencyEnum),
  applicableSites: z
    .array(
      z.string().refine((id) => idPattern.test(id), {
        message: "Invalid site Id",
      })
    )
    .optional()
    .default([]),
});

export const clientUpdateZodSchema = z.object({
  name: z.string().optional(),
  address: addressZodSchema,
  pointOfContact: z.array(contactDetailZodSchema).nonempty(),
  purchaseOrderNumber: z.string().optional(),
  purchaseOrderValue: z.string().optional(),
  purchaseOrderCurrency: z.nativeEnum(CurrencyEnum).optional(),
  applicableSites: z.array(z.string()).optional(),
  clientContracts: z.array(z.string()).nullable(),
});

export type ClientType = z.infer<typeof clientZodSchema>;
export type ClientContractType = z.infer<typeof clientContractZodSchema>;
export type OverriddenClientType = Omit<ClientType, "pointOfContact"> & {
  pointOfContact: string[];
  clientContracts: string[];
};
export type OverriddenClientContractType = Omit<
  ClientContractType,
  "pointOfContact" | "billingDetails"
> & {
  pointOfContact: string[];
  billingDetails: string[];
  contractNumber: string;
};
