"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorContractZodSchema = exports.vendorZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
const idPattern = /^[a-f\d]{24}$/i;
exports.vendorZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name cannot be blank"),
    address: common_zod_1.addressZodSchema,
    pointOfContact: zod_1.z.array(common_zod_1.contactDetailZodSchema).nonempty(),
    vendorContracts: zod_1.z
        .array(zod_1.z.string().refine((id) => idPattern.test(id), {
        message: "Invalid vendor contract Id",
    }))
        .optional(),
    countriesTheyServe: zod_1.z.array(zod_1.z.nativeEnum(enums_1.CountryEnum)),
    clientsTheyWorkedFor: zod_1.z.array(zod_1.z
        .string()
        .refine((id) => idPattern.test(id), {
        message: "Invalid client Id",
    })
        .optional()),
});
exports.vendorContractZodSchema = zod_1.z.object({
    vendorId: zod_1.z
        .string()
        .refine((id) => idPattern.test(id), {
        message: "Invalid vendor Id",
    })
        .optional(),
    contractNumber: zod_1.z.string().min(1, "Contract name cannot be blank"),
    uploadedFiles: zod_1.z.array(zod_1.z.string()).optional(),
    billingDetails: zod_1.z.array(common_zod_1.billingDetailZodSchema).nonempty(),
    pointOfContact: zod_1.z.array(common_zod_1.contactDetailZodSchema).nonempty(),
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
    signedContractCopy: zod_1.z.string().min(1, "Signed contract copy cannot be blank"),
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
