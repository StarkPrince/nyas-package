import { CurrencyEnum } from "@starkprince/nyas";
import { z } from "zod";
import { ContractStatusEnum } from "../enums";
import {
  addressZodSchema,
  billingDetailZodSchema,
  contactDetailZodSchema,
  idPattern,
} from "./common.zod";

export const clientZodSchema = z.object({
  name: z.string().min(1, "Name cannot be blank"), // Ensures name is not empty
  address: addressZodSchema,
  pointOfContact: z.array(contactDetailZodSchema).nonempty(),
  clientContracts: z.array(
    z.string().refine((id) => idPattern.test(id), {
      message: "Invalid contract Id",
    })
  ),
  purchaseOrderNumber: z.string(),
  purchaseOrderValue: z.string(),
  purchaseOrderCurrency: z.nativeEnum(CurrencyEnum),
  applicableSites: z.array(
    z.string().refine((id) => idPattern.test(id), {
      message: "Invalid site Id",
    })
  ),
});

export const clientContractZodSchema = z.object({
  billingDetails: z.array(billingDetailZodSchema).nonempty(),
  pointOfContact: z.array(contactDetailZodSchema).nonempty(),
  clientId: z.string().refine((id) => idPattern.test(id), {
    message: "Invalid client Id",
  }),
  contractNumber: z.string().min(1, "Contract name cannot be blank"),
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

export type ClientType = z.infer<typeof clientZodSchema>;
export type ClientContractType = z.infer<typeof clientContractZodSchema>;
export type OverriddenClientType = Omit<ClientType, "pointOfContact"> & {
  pointOfContact: string[];
};
export type OverriddenClientContractType = Omit<
  ClientContractType,
  "pointOfContact" | "billingDetails"
> & {
  pointOfContact: string[];
  billingDetails: string[];
};
