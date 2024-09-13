export * from "./cities";
export * from "./countries";
export * from "./currencies";
export * from "./permissions";

export enum ChatTypeEnum {
  TEXT = "text",
  IMAGE = "image",
  DOCUMENT = "document",
  SYSTEM = "system",
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

export const validSubticketStatusOrder = [
  SubTicketStatusEnum.ASSIGN_PENDING,
  SubTicketStatusEnum.FE_PENDING,
  SubTicketStatusEnum.APPROVAL_PENDING,
  SubTicketStatusEnum.ALLOCATED,
  SubTicketStatusEnum.ONGOING,
  SubTicketStatusEnum.STARTED,
  SubTicketStatusEnum.COMPLETED,
  SubTicketStatusEnum.CANCELLED,
];

export enum S3FolderEnum {
  PROFILE_IMAGES = "ProfileImages",
  CHAT_DOCUMENTS = "ChatDocuments",
  CHAT_IMAGES = "ChatImages",
  CONTRACT_DOCUMENTS = "ContractDocuments",
}

export enum UpdateTicketEnum {
  ADD_TASKS = "add-tasks",
  ADD_DOCUMENTS = "add-documents",
  ADD_COMMUNICATIONS = "add-communications",
  ADD_FIELDENGINEERS = "add-fieldEngineers",
}

export enum UserStatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
  BLOCKED = "blocked",
}

export enum ExtensionStatusEnum {
  APPROVED = "approved",
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
