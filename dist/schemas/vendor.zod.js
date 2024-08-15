"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorContractZodSchema = exports.vendorZodSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const common_zod_1 = require("./common.zod");
const idPattern = /^[a-f\d]{24}$/i;
exports.vendorZodSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(1, "Name cannot be blank"),
    address: common_zod_1.addressZodSchema,
    contactDetails: zod_1.z.array(common_zod_1.contactDetailZodSchema).nonempty(),
    vendorContracts: zod_1.z.array(zod_1.z.string().regex(idPattern)).optional(),
    countriesTheyServe: zod_1.z.array(zod_1.z.nativeEnum(enums_1.CountryEnum)),
    clientsTheyWorkedFor: zod_1.z.array(zod_1.z.string().regex(idPattern, "Client Id not valid")),
})
    .strip();
exports.vendorContractZodSchema = zod_1.z
    .object({
    vendorId: zod_1.z.string().regex(idPattern),
    billingDetails: zod_1.z.array(common_zod_1.billingDetailZodSchema),
    contractStartDate: zod_1.z.string().min(1, "Contract start date cannot be blank"),
    onBoardingDate: zod_1.z.string().min(1, "Onboarding date cannot be blank"),
    applicableSites: zod_1.z
        .array(zod_1.z.string())
        .nonempty()
        .min(1, "At least one applicable site must be specified"),
    signedContractCopy: zod_1.z
        .string()
        .min(1, "Signed contract copy cannot be blank"),
    clientContracts: zod_1.z.array(zod_1.z.string().regex(idPattern)).optional(),
    countriesTheyServe: zod_1.z
        .array(zod_1.z.string())
        .nonempty()
        .min(1, "At least one country must be specified"),
    clientsTheyWorkedFor: zod_1.z
        .array(zod_1.z.string())
        .nonempty()
        .min(1, "At least one client must be specified"),
    status: zod_1.z
        .nativeEnum(enums_1.ContractStatusEnum)
        .optional()
        .default(enums_1.ContractStatusEnum.Upcoming),
    fieldEngineers: zod_1.z.array(zod_1.z.string()),
})
    .strip();
