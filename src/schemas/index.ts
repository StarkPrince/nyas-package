// loop through all files in the current directory and export them as a single object

import {
  forgotPasswordZodSchema,
  resetPasswordZodSchema,
  userLoginZodSchema,
} from "./auth.zod";
import {
  addressZodSchema,
  billingDetailZodSchema,
  communicationZodSchema,
  contactDetailZodSchema,
  documentZodSchema,
  extensionZodSchema,
  scheduleZodSchema,
  siteAddressZodSchema,
} from "./common.zod";
import {
  fieldEngineerGetSubTicketsZodSchema,
  fieldEngineerGetTicketsZodSchema,
  fieldEngineerStatusZodSchema,
  fieldEngineerUpdateLocationZodSchema,
  fieldEngineerZodSchema,
  locationZodSchema,
} from "./fieldEngineer.zod";
import { subticketStatusZodSchema, subticketZodSchema } from "./subticket.zod";
import { taskZodSchema, ticketZodSchema } from "./ticket.zod";
import { userZodSchema } from "./user.zod";
import { vendorContractZodSchema, vendorZodSchema } from "./vendor.zod";

export {
  addressZodSchema,
  billingDetailZodSchema,
  communicationZodSchema,
  contactDetailZodSchema,
  documentZodSchema,
  extensionZodSchema,
  fieldEngineerGetSubTicketsZodSchema,
  fieldEngineerGetTicketsZodSchema,
  fieldEngineerStatusZodSchema,
  fieldEngineerUpdateLocationZodSchema,
  fieldEngineerZodSchema,
  forgotPasswordZodSchema,
  locationZodSchema,
  resetPasswordZodSchema,
  scheduleZodSchema,
  siteAddressZodSchema,
  subticketStatusZodSchema,
  subticketZodSchema,
  taskZodSchema,
  ticketZodSchema,
  userLoginZodSchema,
  userZodSchema,
  vendorContractZodSchema,
  vendorZodSchema,
};
