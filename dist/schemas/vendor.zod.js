"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkVendorContractToClientContractZodSchema = exports.vendorUpdateZodSchema = exports.vendorZodSchema = exports.vendorContractZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
const idPattern = /^[a-f\d]{24}$/i;
exports.vendorContractZodSchema = zod_1.z.object({
    vendorId: zod_1.z
        .string()
        .refine((id) => idPattern.test(id), {
        message: "Invalid vendor Id",
    })
        .optional(),
    uploadedFiles: zod_1.z.array(zod_1.z.string()).optional(),
    billingDetails: zod_1.z.array(common_zod_1.billingDetailZodSchema).min(1),
    pointOfContact: zod_1.z.array(common_zod_1.contactDetailZodSchema).min(0),
    expiryDate: zod_1.z
        .string()
        .min(1, "Expiry date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    contractStartDate: zod_1.z
        .string()
        .min(1, "Contract start date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    onBoardingDate: zod_1.z
        .string()
        .min(1, "Onboarding date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    signedContractCopy: zod_1.z
        .string()
        .min(1, "Signed contract copy cannot be blank")
        .optional(),
    clientContracts: zod_1.z
        .array(zod_1.z.string().refine((id) => idPattern.test(id), {
        message: "Invalid client contract Id",
    }))
        .optional(),
    status: zod_1.z
        .nativeEnum(enums_1.ContractStatusEnum)
        .optional()
        .default(enums_1.ContractStatusEnum.UPCOMING),
    fieldEngineers: zod_1.z.array(zod_1.z.string()),
});
exports.vendorZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name cannot be blank"),
    address: common_zod_1.addressZodSchema,
    pointOfContact: zod_1.z.array(common_zod_1.contactDetailZodSchema).min(1),
    countriesTheyServe: zod_1.z.array(zod_1.z.nativeEnum(enums_1.CountryEnum)),
    clientsTheyWorkedFor: zod_1.z.array(zod_1.z
        .string()
        .refine((id) => idPattern.test(id), {
        message: "Invalid client Id",
    })
        .optional()),
});
exports.vendorUpdateZodSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    address: common_zod_1.addressZodSchema,
    pointOfContact: zod_1.z.array(common_zod_1.contactDetailZodSchema).min(1),
    countriesTheyServe: zod_1.z.array(zod_1.z.nativeEnum(enums_1.CountryEnum)).optional(),
    clientsTheyWorkedFor: zod_1.z.array(zod_1.z.string()).optional(),
    vendorContracts: zod_1.z.array(zod_1.z.string()).nullable(),
});
exports.linkVendorContractToClientContractZodSchema = zod_1.z.object({
    vendorContractId: zod_1.z.string(),
    clientContractId: zod_1.z.string(),
});
