import { Document } from "mongoose";
import { MessageType, TicketChatType } from "../schemas/chat.zod";
import { ClientContractType, ClientType } from "../schemas/client.zod";
import {
  AddressType,
  BillingDetailType,
  CommunicationType,
  ContactDetailType,
  DocumentType,
  ExtensionType,
  ScheduleType,
  SiteAddressType,
} from "../schemas/common.zod";
import {
  FieldEngineerGetSubTicketsType,
  FieldEngineerGetTicketsType,
  FieldEngineerLoginType,
  FieldEngineerStatusType,
  FieldEngineerType,
  FieldEngineerUpdateLocationType,
} from "../schemas/fieldEngineer.zod";
import { NotificationType } from "../schemas/notification.zod";
import { SubTicketType } from "../schemas/subticket.zod";
import {
  FieldEngineerContractType,
  ScheduleFieldEngineerCreationType,
  ScheduleFieldEngineerType,
  TaskType,
  TicketType,
} from "../schemas/ticket.zod";
import { UserType } from "../schemas/user.zod";
import { VendorContractType, VendorType } from "../schemas/vendor.zod";

export interface Config {
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
export interface UserCreationError {
  error: string;
}

export interface LoginSuccess {
  user: any;
  auth: boolean;
}

export interface LoginError {
  error: string;
}

export interface ForgotPasswordSuccess {
  message: string;
}

export interface ForgotPasswordError {
  error: string;
}

export interface ResetPasswordSuccess {
  message: string;
}

export interface ResetPasswordError {
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
export interface IScheduleFieldEngineerCreation
  extends Document,
    ScheduleFieldEngineerCreationType {}
export interface IScheduleFieldEngineer
  extends Document,
    ScheduleFieldEngineerType {}
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
export interface IFieldEngineerContract
  extends Document,
    FieldEngineerContractType {}
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

// Extend the Request interface to include userId
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
  BillingDetailType,
  ClientContractType,
  ClientType,
  CommunicationType,
  ContactDetailType,
  DocumentType,
  ExtensionType,
  FieldEngineerContractType,
  FieldEngineerGetSubTicketsType,
  FieldEngineerGetTicketsType,
  FieldEngineerLoginType,
  FieldEngineerStatusType,
  FieldEngineerType,
  FieldEngineerUpdateLocationType,
  MessageType,
  NotificationType,
  ScheduleFieldEngineerCreationType,
  ScheduleFieldEngineerType,
  ScheduleType,
  SiteAddressType,
  SubTicketType,
  TaskType,
  TicketChatType,
  TicketType,
  UserType,
  VendorContractType,
  VendorType,
};
