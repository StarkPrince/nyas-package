import { Document, Model, Schema } from "mongoose";
import {
  MessageType,
  NotificationType,
  TicketChatType,
} from "../schemas/chat.zod";
import { ClientContractType, ClientType } from "../schemas/client.zod";
import {
  AddressType,
  BillingDetailType,
  ContactDetailType,
  ExtensionType,
  ScheduleType,
  SiteAddressType,
  TaskTemplateType,
} from "../schemas/common.zod";
import {
  FieldEngineerStatusType,
  FieldEngineerType,
} from "../schemas/fieldEngineer.zod";
import {
  RejectedSubticketType,
  SubTicketStatusType,
  SubTicketType,
} from "../schemas/subticket.zod";
import {
  CommunicationType,
  TaskType,
  TicketDocumentType,
  TicketType,
} from "../schemas/ticket.zod";
import { UserType } from "../schemas/user.zod";
import { VendorContractType, VendorType } from "../schemas/vendor.zod";
export * from "../schemas/auth.zod";
export * from "../schemas/chat.zod";
export * from "../schemas/client.zod";
export * from "../schemas/common.zod";
export * from "../schemas/fieldEngineer.zod";
export * from "../schemas/subticket.zod";
export * from "../schemas/ticket.zod";
export * from "../schemas/user.zod";
export * from "../schemas/vendor.zod";
export interface PaginationOptions {
  page: number;
  limit: number;
  populateFields?: string[];
}
export interface PaginatedResults<T> {
  next?: {
    page: number;
    limit: number;
  };
  previous?: {
    page: number;
    limit: number;
  };
  data: T[];
}

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
  no_of_devices: number;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  GOOGLE_TOKEN_ENDPOINT: string;
  punctualityThreshold: number;
  emergencyContract: {
    role: string;
    phoneNumber: string;
    email: string;
  };
  ticketTTL: number;
  subticketTTL: number;
  clientTTL: number;
  clientContractTTL: number;
  vendorTTL: number;
  vendorContractTTL: number;
  fieldEngineerTTL: number;
  dbUser: string;
  dbHost: string;
  dbPassword: string;
  dbPort: number;
  dbSsl: any;
}

export interface ICreatedUpdatedWithUser {
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface ICreatedUpdated {
  createdAt: Date;
  updatedAt: Date;
}

export interface ITaskTemplate
  extends Document,
    TaskTemplateType,
    ICreatedUpdatedWithUser {}

//client Interfaces
export interface IClient
  extends Document,
    ClientType,
    ICreatedUpdatedWithUser {}

export interface IClientContract
  extends Document,
    ClientContractType,
    ICreatedUpdatedWithUser {}

//common Interfaces
export interface IAddress
  extends Document,
    AddressType,
    ICreatedUpdatedWithUser {}
export interface IBillingDetail
  extends Document,
    BillingDetailType,
    ICreatedUpdatedWithUser {}
export interface ICommunication
  extends Document,
    CommunicationType,
    ICreatedUpdated {}
export interface IContactDetail
  extends Document,
    ContactDetailType,
    ICreatedUpdatedWithUser {}
export interface ITicketDocument
  extends Document,
    TicketDocumentType,
    ICreatedUpdatedWithUser {}
export interface IExtension
  extends Document,
    ExtensionType,
    ICreatedUpdatedWithUser {}
export interface ISchedule extends Document, ScheduleType {}
export interface ISiteAddress
  extends Document,
    SiteAddressType,
    ICreatedUpdatedWithUser {}

export interface IMessage extends Document, MessageType, ICreatedUpdated {
  chatId: string;
  userId: string;
}

// types/errorResponse.ts
export interface ErrorResponse {
  success: false;
  error: {
    code: number;
    message: string;
    details?: any;
  };
}

export interface IMedia extends Document {
  countries: string[];
  categories: string[];
  _id: string;
  fileName: string;
  fileUrl: string;
  folder: string;
  size: number;
  uploadedAt: Date;
}

export interface ISubTicketStatus extends Document, SubTicketStatusType {}
export interface ISubTicket
  extends Document,
    SubTicketType,
    ICreatedUpdatedWithUser {
  status: ISubTicketStatus;
}

export interface IRejectedSubticket
  extends Document,
    RejectedSubticketType,
    ICreatedUpdatedWithUser {}

export interface ITask extends Document, TaskType, ICreatedUpdated {}
export interface ITicket
  extends Document,
    TicketType,
    ICreatedUpdatedWithUser {}
export interface IUser extends Document, UserType, ICreatedUpdated {}
export interface IFieldEngineer
  extends Document,
    FieldEngineerType,
    ICreatedUpdatedWithUser {}
export interface IPopulatedFieldEngineer
  extends Document,
    Omit<FieldEngineerType, "subtickets"> {
  subtickets: ISubTicket[];
}
export interface ITicketChat
  extends Document,
    TicketChatType,
    ICreatedUpdated {}
export interface INotification
  extends Document,
    NotificationType,
    ICreatedUpdated {}
export interface IVendor
  extends Document,
    VendorType,
    ICreatedUpdatedWithUser {}
export interface IVendorContract
  extends Document,
    VendorContractType,
    ICreatedUpdatedWithUser {}
export interface IBillingDetail
  extends Document,
    BillingDetailType,
    ICreatedUpdatedWithUser {}
export interface IFieldEngineerStatus
  extends Document,
    FieldEngineerStatusType,
    ICreatedUpdatedWithUser {}

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userRole?: string;
      permissions?: string[];
      body?: { updatedBy?: string };
      ipAddress: string | null;
      clientTimezone: string;
    }
  }
}

export * from "../schemas/chat.zod";
