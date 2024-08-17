import { Document, Model, Schema } from "mongoose";
import {
  ForgotPasswordType,
  ForgotPasswordZodSchema,
  LoginType,
  LoginZodSchema,
  ResetPasswordType,
  ResetPasswordZodSchema,
} from "../schemas/auth.zod";
import {
  MessageType,
  NotificationType,
  TicketChatType,
} from "../schemas/chat.zod";
import {
  ClientContractType,
  clientContractZodSchema,
  ClientType,
  clientZodSchema,
} from "../schemas/client.zod";
import {
  AddressType,
  addressZodSchema,
  BillingDetailType,
  billingDetailZodSchema,
  CommunicationType,
  communicationZodSchema,
  ContactDetailType,
  contactDetailZodSchema,
  DocumentType,
  documentZodSchema,
  ExtensionType,
  extensionZodSchema,
  ScheduleType,
  scheduleZodSchema,
  SiteAddressType,
  siteAddressZodSchema,
} from "../schemas/common.zod";
import {
  fieldEngineerCreationZodSchema,
  FieldEngineerGetSubTicketsType,
  fieldEngineerGetSubTicketsZodSchema,
  FieldEngineerGetTicketsType,
  fieldEngineerGetTicketsZodSchema,
  FieldEngineerLoginType,
  FieldEngineerStatusType,
  fieldEngineerStatusZodSchema,
  FieldEngineerType,
  FieldEngineerUpdateLocationType,
  fieldEngineerUpdateLocationZodSchema,
  fieldEngineerZodSchema,
  locationZodSchema,
} from "../schemas/fieldEngineer.zod";
import {
  subticketStatusZodSchema,
  SubTicketType,
  subticketUpdateZodSchema,
  subticketZodSchema,
} from "../schemas/subticket.zod";
import {
  assignmentZodSchema,
  TaskType,
  taskZodSchema,
  ticketCreationZodSchema,
  TicketType,
  ticketUpdateZodSchema,
  ticketZodSchema,
} from "../schemas/ticket.zod";
import { UserType, userZodSchema } from "../schemas/user.zod";
import {
  VendorContractType,
  vendorContractZodSchema,
  VendorType,
  vendorZodSchema,
} from "../schemas/vendor.zod";

export interface ModelSchemaEntry {
  model: Model<any>;
  schema: Schema;
}
export interface IConfig {
  awsAccessKeyId: string;
  awsSecretAccessKey: string;
  awsRegion: string;
  awsBucketName: string;
  emailPassword: string;
  emailUser: string;
  port: number;
  jwtSecret: string;
  jwtRefreshSecret: string;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPass: string;
  redisUrl: string;
  mongoUri: string;
  environment: string;
  JWTPassword: string;
  adminAccessTokenKey: string;
  adminRefreshTokenKey: string;
  accessTokenMaxAge: number;
  refreshTokenMaxAge: number;
  jwtExpiresIn: string;
  refreshTokenExpiresIn: string;
  baseUrlForOtp: string;
  templateId: string;
  authKey: string;
  sender: string;
}
export interface IUserCreationError {
  error: string;
}

export interface ILoginSuccess {
  user: any;
  auth: boolean;
}

export interface ILoginError {
  error: string;
}

export interface IForgotPasswordSuccess {
  message: string;
}

export interface IForgotPasswordError {
  error: string;
}

export interface IResetPasswordSuccess {
  message: string;
}

export interface IResetPasswordError {
  error: string;
}

export interface IExtension extends Document, ExtensionType {}
export interface ISubTicket extends Document, SubTicketType {}
export interface ITask extends Document, TaskType {}
export interface ITicket extends Document, TicketType {}
export interface IUser extends Document, UserType {}
export interface IFieldEngineer extends Document, FieldEngineerType {}
export interface IPopulatedFieldEngineer
  extends Document,
    Omit<FieldEngineerType, "subtickets"> {
  subtickets: ISubTicket[];
}
export interface ITicketChat extends Document, TicketChatType {}
export interface INotification extends Document, NotificationType {}
export interface IMessage extends Document, MessageType {}
export interface IAddress extends Document, AddressType {}
export interface IContactDetail extends Document, ContactDetailType {}
export interface ISchedule extends Document, ScheduleType {}
export interface IBillingDetail extends Document, BillingDetailType {}
export interface ISiteAddress extends Document, SiteAddressType {}
export interface IDocument extends Document, DocumentType {}
export interface ICommunication extends Document, CommunicationType {}
export interface IClient extends Document, ClientType {}
export interface IClientContract extends Document, ClientContractType {}
export interface IVendor extends Document, VendorType {}
export interface IVendorContract extends Document, VendorContractType {}
export interface IFieldEngineerLogin extends Document, FieldEngineerLoginType {}
export interface IFieldEngineerGetTickets
  extends Document,
    FieldEngineerGetTicketsType {}
export interface IFieldEngineerGetSubTickets
  extends Document,
    FieldEngineerGetSubTicketsType {}
export interface IFieldEngineerUpdateLocation
  extends Document,
    FieldEngineerUpdateLocationType {}
export interface IFieldEngineerStatus
  extends Document,
    FieldEngineerStatusType {}

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userRole?: string;
      permissions?: string[];
      body?: { updatedBy?: string };
    }
  }
}

export {
  AddressType,
  addressZodSchema,
  assignmentZodSchema,
  BillingDetailType,
  billingDetailZodSchema,
  ClientContractType,
  clientContractZodSchema,
  ClientType,
  clientZodSchema,
  CommunicationType,
  communicationZodSchema,
  ContactDetailType,
  contactDetailZodSchema,
  DocumentType,
  documentZodSchema,
  ExtensionType,
  extensionZodSchema,
  fieldEngineerCreationZodSchema,
  FieldEngineerGetSubTicketsType,
  fieldEngineerGetSubTicketsZodSchema,
  FieldEngineerGetTicketsType,
  fieldEngineerGetTicketsZodSchema,
  FieldEngineerLoginType,
  FieldEngineerStatusType,
  fieldEngineerStatusZodSchema,
  FieldEngineerType,
  FieldEngineerUpdateLocationType,
  fieldEngineerUpdateLocationZodSchema,
  fieldEngineerZodSchema,
  ForgotPasswordType,
  ForgotPasswordZodSchema,
  locationZodSchema,
  LoginType,
  LoginZodSchema,
  MessageType,
  NotificationType,
  ResetPasswordType,
  ResetPasswordZodSchema,
  ScheduleType,
  scheduleZodSchema,
  SiteAddressType,
  siteAddressZodSchema,
  subticketStatusZodSchema,
  SubTicketType,
  subticketUpdateZodSchema,
  subticketZodSchema,
  TaskType,
  taskZodSchema,
  TicketChatType,
  ticketCreationZodSchema,
  TicketType,
  ticketUpdateZodSchema,
  ticketZodSchema,
  UserType,
  userZodSchema,
  VendorContractType,
  vendorContractZodSchema,
  VendorType,
  vendorZodSchema,
};
