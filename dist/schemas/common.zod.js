"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskTemplateZodSchema = exports.logisticsZodSchema = exports.extensionZodSchema = exports.siteAddressZodSchema = exports.scheduleZodSchema = exports.billingDetailZodSchema = exports.addressZodSchema = exports.contactDetailZodSchema = exports.idPattern = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums"); // The generated map
const fieldEngineer_zod_1 = require("./fieldEngineer.zod");
exports.idPattern = /^[a-f\d]{24}$/i;
exports.contactDetailZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name cannot be blank"),
    email: zod_1.z.string().email().min(1, "Email cannot be blank"),
    phoneNumber: zod_1.z.string().min(1, "Phone number cannot be blank"),
});
exports.addressZodSchema = zod_1.z.object({
    line1: zod_1.z.string().min(1, "Address line 1 cannot be blank"),
    line2: zod_1.z.string().optional(),
    city: zod_1.z.string().min(1, "City cannot be blank"),
    country: zod_1.z.nativeEnum(enums_1.CountryEnum),
    location: fieldEngineer_zod_1.locationZodSchema,
});
exports.billingDetailZodSchema = zod_1.z
    .object({
    type: zod_1.z.nativeEnum(enums_1.BillingTypeEnum),
    additionalRates: zod_1.z
        .array(zod_1.z.object({
        hours: zod_1.z.number().nonnegative(),
        rate: zod_1.z.number().nonnegative(),
    }))
        .optional(),
    dailyRate: zod_1.z.number().nonnegative().optional(), // This is also optional initially
    country: zod_1.z.nativeEnum(enums_1.CountryEnum),
    currency: zod_1.z.nativeEnum(enums_1.CurrencyEnum),
    outOfWorkingHoursRate: zod_1.z.number().nonnegative(),
    nightRate: zod_1.z.number().nonnegative(),
    applicableSites: zod_1.z.array(zod_1.z.string().refine((id) => exports.idPattern.test(id), {
        message: "Invalid site Id",
    })),
})
    .strip()
    .refine((data) => (data.type === enums_1.BillingTypeEnum.HOURLY && !!data.additionalRates) ||
    (data.type === enums_1.BillingTypeEnum.DAILY && data.dailyRate !== undefined), {
    message: "If billing type is 'hourly', 'additionalRates' is required. If billing type is 'daily', 'dailyRate' is required.",
    path: ["type"], // Error is shown at the 'type' field
});
exports.scheduleZodSchema = zod_1.z
    .object({
    startdatetime: zod_1.z
        .string()
        .min(1, "Start time cannot be blank")
        .refine((time) => !isNaN(Date.parse(time)), "Invalid start time format"),
    enddatetime: zod_1.z
        .string()
        .min(1, "End time cannot be blank")
        .refine((time) => !isNaN(Date.parse(time)), "Invalid end time format"),
})
    .strip();
exports.siteAddressZodSchema = zod_1.z
    .object({
    siteDetails: zod_1.z.string().min(1, "Site details cannot be blank"),
    cageNumber: zod_1.z.string().optional(),
    coloDetails: zod_1.z.string().optional(),
    country: zod_1.z.nativeEnum(enums_1.CountryEnum),
    city: zod_1.z.string().min(1, "City cannot be blank"),
    location: zod_1.z.object({
        lat: zod_1.z.number().min(-90).max(90),
        long: zod_1.z.number().min(-180).max(180),
    }),
})
    .refine((data) => {
    const cityMap = enums_1.countryCityMap[data.country];
    return cityMap && Object.keys(cityMap).includes(data.city);
}, {
    message: "Selected city does not belong to the selected country",
    path: ["city"],
})
    .transform((data) => {
    var _a;
    // Convert city code to the full city name after validation
    const cityName = (_a = enums_1.countryCityMap[data.country]) === null || _a === void 0 ? void 0 : _a[data.city];
    return Object.assign(Object.assign({}, data), { city: cityName });
});
exports.extensionZodSchema = zod_1.z
    .object({
    subticketId: zod_1.z.string().refine((id) => exports.idPattern.test(id), {
        message: "Invalid subticket Id",
    }),
    status: zod_1.z.nativeEnum(enums_1.ExtensionStatusEnum),
    type: zod_1.z.nativeEnum(enums_1.BillingTypeEnum),
    reason: zod_1.z.string().min(1, "Reason cannot be blank"),
    comments: zod_1.z.string().min(1, "Comments cannot be blank"),
    schedules: zod_1.z
        .array(exports.scheduleZodSchema)
        .min(1, "At least one schedule is required"),
})
    .refine((data) => {
    if (data.type === enums_1.BillingTypeEnum.HOURLY) {
        // Check each schedule to ensure it's within 1 hour
        return data.schedules.every((schedule, index) => {
            const start = new Date(schedule.startdatetime).getTime();
            const end = new Date(schedule.enddatetime).getTime();
            const duration = end - start;
            return duration <= 3600000 && duration > 0; // Return true if within 1 hour
        });
    }
    return true;
}, {
    message: "Each schedule in HOURLY type must not exceed 1 hour",
    path: ["schedules"], // Referring to the schedules array
})
    .refine((data) => {
    if (data.type === enums_1.BillingTypeEnum.DAILY) {
        return data.schedules.length === 1;
    }
    return true;
}, {
    message: "Only one schedule is allowed for DAILY type",
});
exports.logisticsZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name cannot be blank"),
    description: zod_1.z.string().min(1, "Description cannot be blank"),
    imageUrl: zod_1.z.string().min(1, "Image URL cannot be blank"),
    type: zod_1.z.nativeEnum(enums_1.LogisticsEnum),
});
exports.taskTemplateZodSchema = zod_1.z
    .object({
    taskName: zod_1.z.string(),
    taskDescription: zod_1.z.string(),
    logistics: zod_1.z.array(zod_1.z.string()),
    difficultyLevel: zod_1.z.number().min(1).max(5),
    relatedMedia: zod_1.z.array(zod_1.z.string()),
})
    .strip();
