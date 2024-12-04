export * from "./cities";
export * from "./countries";
export * from "./currencies";
export * from "./permissions";
export * from "./timezoneEnums";
export declare enum ChatTypeEnum {
    TEXT = "text",
    IMAGE = "image",
    DOCUMENT = "document",
    SYSTEM = "system"
}
export declare enum ReadStatusEnum {
    READ = "read",
    UNREAD = "unread"
}
export declare enum NotificationTypeEnum {
    ACTIONABLE = "ACTIONABLE",
    READONLY = "READONLY",
    ERROR = "ERROR"
}
export declare enum TicketStatusEnum {
    DRAFT = "draft",
    ASSIGN_PENDING = "assign-pending",
    FE_PENDING = "fe-pending",
    APPROVAL_PENDING = "approval-pending",
    ALLOCATED = "allocated",
    ONGOING = "ongoing",
    COMPLETED = "completed",
    ARCHIVED = "archived",
    CANCELLED = "cancelled"
}
export declare enum PunctualityEnum {
    EARLY = "early",
    ON_TIME = "on-time",
    DELAYED = "delayed",
    AUTO = "auto"
}
export declare enum SubTicketStatusEnum {
    ASSIGN_PENDING = "draft",
    FE_PENDING = "assigned",
    APPROVAL_PENDING = "accepted",
    ALLOCATED = "approved",
    ONGOING = "chat-enabled",
    STARTED = "checkedIn",
    COMPLETED = "checkedOut",
    CANCELLED = "cancelled"
}
export declare enum S3FolderEnum {
    PROFILE_IMAGES = "ProfileImages",
    CHAT_DOCUMENTS = "ChatDocuments",
    CHAT_IMAGES = "ChatImages",
    CONTRACT_DOCUMENTS = "ContractDocuments"
}
export declare enum UpdateTicketEnum {
    TASK_ADDITION = "tasks",
    DOCUMENT_COMMUNICATION_ADDITION = "documents_communications",
    ENGINEER_ADDITION = "fieldEngineers"
}
export declare enum SubticketUpdateEnum {
    SCHEDULE = "schedule",
    STATUS = "status",
    FIELD_ENGINEER = "fieldEngineer"
}
export declare enum UserStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    SUSPENDED = "suspended",
    BLOCKED = "blocked"
}
export declare enum ExtensionStatusEnum {
    APPROVED = "approved",
    REJECTED = "rejected",
    PENDING = "pending",
    SCHEDULE_EXTENDED = "schedule-extended"
}
export declare enum SubticketResponseEnum {
    ACCEPTED = "accepted",
    REJECTED = "rejected",
    PENDING = "pending"
}
export declare enum BillingTypeEnum {
    HOURLY = "hourly",
    DAILY = "daily"
}
export declare enum FieldEngineerWorkStatusEnum {
    CHECKED_IN = "checkedIn",
    BREAK_START = "break-start",
    BREAK_END = "break-end",
    CHECKED_OUT = "checkedOut",
    HOURLY_UPDATE = "hourly-update",
    HOURS_BEFORE_24 = "24HoursBefore",
    HOURS_BEFORE_4 = "4HoursBefore"
}
export declare enum LogisticsEnum {
    TOOL = "tool",
    MATERIAL = "material",
    EQUIPMENT = "equipment"
}
export declare enum TaskStatusEnum {
    ALLOCATED = "allocated",
    ONGOING = "ongoing",
    COMPLETED = "completed"
}
export declare enum ContractStatusEnum {
    UPCOMING = "upcoming",
    ACTIVE = "active",
    EXPIRED = "expired"
}
export declare enum SubticketInvoiceStatusEnum {
    PENDING = "pending",
    PAID = "paid",
    CANCELLED = "cancelled",
    DELAYED = "delayed"
}
export declare enum WorkHourType {
    WORKING_HOURS = "workingHours",
    NIGHT_HOURS = "nightHours",
    OUT_OF_WORKING_HOURS = "outOfWorkingHours"
}
export declare enum InvoiceStatusEnum {
    PENDING = "pending",
    PAID = "paid"
}
export declare enum InvoiceExtraExpenditureTypeEnum {
    TRAVELING = "Traveling",
    FOOD_STAY = "Food & Stay",
    CONSUMABLES = "Consumables",
    MATERIALS = "Materials",
    OTHER = "Other"
}
