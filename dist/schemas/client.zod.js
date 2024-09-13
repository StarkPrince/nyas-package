"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientContractZodSchema = exports.clientZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
exports.clientZodSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(1, "Name cannot be blank"), // Ensures name is not empty
    address: common_zod_1.addressZodSchema,
    contactDetails: zod_1.z.array(common_zod_1.contactDetailZodSchema).nonempty(),
    clientContracts: zod_1.z.array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid contract Id")),
    purchaseOrderNumber: zod_1.z.string(),
    purchaseOrderValue: zod_1.z.string(),
})
    .strip();
exports.clientContractZodSchema = zod_1.z
    .object({
    clientId: zod_1.z.string().regex(common_zod_1.idPattern, "Invalid client Id"),
    contractNumber: zod_1.z.string().min(1, "Contract name cannot be blank"),
    billingDetails: zod_1.z.array(common_zod_1.billingDetailZodSchema),
    signedContractCopy: zod_1.z
        .string()
        .min(1, "Signed contract copy cannot be blank"),
    uploadedFiles: zod_1.z.array(zod_1.z.string()).optional(),
    expiryDate: zod_1.z
        .string()
        .min(1, "Expiry date cannot be blank")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    vendorContracts: zod_1.z
        .array(zod_1.z.string().regex(common_zod_1.idPattern, "Invalid vendor Id"))
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
    pointOfContact: zod_1.z.array(common_zod_1.contactDetailZodSchema).nonempty(),
})
    .strip();
