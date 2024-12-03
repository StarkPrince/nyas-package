"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientZodSchema = exports.clientContractZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
exports.clientContractZodSchema = zod_1.z.object({
    billingDetails: zod_1.z.array(common_zod_1.billingDetailZodSchema).nonempty(),
    pointOfContact: zod_1.z.array(common_zod_1.contactDetailZodSchema).nonempty(),
    clientId: zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid client Id",
    }),
    signedContractCopy: zod_1.z.string().min(1, "Signed contract copy cannot be blank"),
    uploadedFiles: zod_1.z.array(zod_1.z.string()).optional(),
    expiryDate: zod_1.z
        .string()
        .min(1, "Expiry date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    vendorContracts: zod_1.z
        .array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid user Id",
    }))
        .optional(),
    contractStartDate: zod_1.z
        .string()
        .min(1, "Contact start date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    status: zod_1.z
        .nativeEnum(enums_1.ContractStatusEnum)
        .optional()
        .default(enums_1.ContractStatusEnum.UPCOMING),
    onBoardingDate: zod_1.z
        .string()
        .min(1, "Onboarding date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
});
exports.clientZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name cannot be blank"), // Ensures name is not empty
    address: common_zod_1.addressZodSchema,
    pointOfContact: zod_1.z.array(common_zod_1.contactDetailZodSchema).nonempty(),
    clientContracts: zod_1.z.array(exports.clientContractZodSchema).optional(),
    purchaseOrderNumber: zod_1.z.string(),
    purchaseOrderValue: zod_1.z.string(),
    purchaseOrderCurrency: zod_1.z.nativeEnum(enums_1.CurrencyEnum),
    applicableSites: zod_1.z
        .array(zod_1.z.string().refine((id) => common_zod_1.idPattern.test(id), {
        message: "Invalid site Id",
    }))
        .optional()
        .default([]),
});
