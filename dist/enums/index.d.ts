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
    LATE = "late",
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
    ADD_TASKS = "add-tasks",
    ADD_DOCUMENTS = "add-documents",
    ADD_COMMUNICATIONS = "add-communications",
    ADD_FIELDENGINEERS = "add-fieldEngineers"
}
export declare enum UserStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    BLOCKED = "blocked"
}
export declare enum ExtensionStatusEnum {
    APPROVED = "approved",
    REJECTED = "rejected",
    PENDING = "pending",
    CONSOLIDATED = "consolidated"
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
