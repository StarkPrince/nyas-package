export * from "./cities";
export * from "./countries";
export * from "./currencies";
export * from "./permissions";
export * from "./timezoneEnums";

export enum ChatTypeEnum {
  TEXT = "text",
  IMAGE = "image",
  DOCUMENT = "document",
  SYSTEM = "system",
}

export enum ReadStatusEnum {
  READ = "read",
  UNREAD = "unread",
}

export enum NotificationTypeEnum {
  ACTIONABLE = "ACTIONABLE",
  READONLY = "READONLY",
  ERROR = "ERROR",
}

export enum TicketStatusEnum {
  DRAFT = "draft",
  ASSIGN_PENDING = "assign-pending",
  FE_PENDING = "fe-pending",
  APPROVAL_PENDING = "approval-pending",
  ALLOCATED = "allocated",
  ONGOING = "ongoing",
  COMPLETED = "completed",
  ARCHIVED = "archived",
  CANCELLED = "cancelled",
}

export enum PunctualityEnum {
  EARLY = "early",
  ON_TIME = "on-time",
  DELAYED = "delayed",
  AUTO = "auto",
}

export enum SubTicketStatusEnum {
  ASSIGN_PENDING = "draft",
  FE_PENDING = "assigned",
  APPROVAL_PENDING = "accepted",
  ALLOCATED = "approved",
  ONGOING = "chat-enabled",
  STARTED = "checkedIn",
  COMPLETED = "checkedOut",
  CANCELLED = "cancelled",
}

export enum S3FolderEnum {
  PROFILE_IMAGES = "ProfileImages",
  CHAT_DOCUMENTS = "ChatDocuments",
  CHAT_IMAGES = "ChatImages",
  CONTRACT_DOCUMENTS = "ContractDocuments",
}

export enum UpdateTicketEnum {
  TASK_ADDITION = "tasks",
  DOCUMENT_COMMUNICATION_ADDITION = "documents_communications",
  ENGINEER_ADDITION = "fieldEngineers",
}

export enum SubticketUpdateEnum {
  SCHEDULE = "schedule",
  STATUS = "status",
  FIELD_ENGINEER = "fieldEngineer",
}

export enum UserStatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
  SUSPENDED = "suspended",
  BLOCKED = "blocked",
}

export enum ExtensionStatusEnum {
  APPROVED = "approved",
  REJECTED = "rejected",
  PENDING = "pending",
  SCHEDULE_EXTENDED = "schedule-extended",
}

export enum SubticketResponseEnum {
  ACCEPTED = "accepted",
  REJECTED = "rejected",
  PENDING = "pending",
}

export enum BillingTypeEnum {
  HOURLY = "hourly",
  DAILY = "daily",
}

export enum FieldEngineerWorkStatusEnum {
  CHECKED_IN = "checkedIn",
  BREAK_START = "break-start",
  BREAK_END = "break-end",
  CHECKED_OUT = "checkedOut",
  HOURLY_UPDATE = "hourly-update",
  HOURS_BEFORE_24 = "24HoursBefore",
  HOURS_BEFORE_4 = "4HoursBefore",
}

export enum LogisticsEnum {
  TOOL = "tool",
  MATERIAL = "material",
  EQUIPMENT = "equipment",
}

export enum TaskStatusEnum {
  ALLOCATED = "allocated",
  ONGOING = "ongoing",
  COMPLETED = "completed",
}

export enum ContractStatusEnum {
  UPCOMING = "upcoming",
  ACTIVE = "active",
  EXPIRED = "expired",
}
