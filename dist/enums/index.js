"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceExtraExpenditureTypeEnum = exports.InvoiceStatusEnum = exports.WorkHourType = exports.SubticketInvoiceStatusEnum = exports.ContractStatusEnum = exports.TaskStatusEnum = exports.LogisticsEnum = exports.FieldEngineerWorkStatusEnum = exports.BillingTypeEnum = exports.SubticketResponseEnum = exports.ExtensionStatusEnum = exports.UserStatusEnum = exports.SubticketUpdateEnum = exports.UpdateTicketEnum = exports.S3FolderEnum = exports.SubTicketStatusEnum = exports.PunctualityEnum = exports.TicketStatusEnum = exports.NotificationTypeEnum = exports.ReadStatusEnum = exports.ChatTypeEnum = void 0;
__exportStar(require("./cities"), exports);
__exportStar(require("./countries"), exports);
__exportStar(require("./currencies"), exports);
__exportStar(require("./permissions"), exports);
__exportStar(require("./timezoneEnums"), exports);
var ChatTypeEnum;
(function (ChatTypeEnum) {
    ChatTypeEnum["TEXT"] = "text";
    ChatTypeEnum["IMAGE"] = "image";
    ChatTypeEnum["DOCUMENT"] = "document";
    ChatTypeEnum["SYSTEM"] = "system";
})(ChatTypeEnum || (exports.ChatTypeEnum = ChatTypeEnum = {}));
var ReadStatusEnum;
(function (ReadStatusEnum) {
    ReadStatusEnum["READ"] = "read";
    ReadStatusEnum["UNREAD"] = "unread";
})(ReadStatusEnum || (exports.ReadStatusEnum = ReadStatusEnum = {}));
var NotificationTypeEnum;
(function (NotificationTypeEnum) {
    NotificationTypeEnum["ACTIONABLE"] = "ACTIONABLE";
    NotificationTypeEnum["READONLY"] = "READONLY";
    NotificationTypeEnum["ERROR"] = "ERROR";
})(NotificationTypeEnum || (exports.NotificationTypeEnum = NotificationTypeEnum = {}));
var TicketStatusEnum;
(function (TicketStatusEnum) {
    TicketStatusEnum["DRAFT"] = "draft";
    TicketStatusEnum["ASSIGN_PENDING"] = "assign-pending";
    TicketStatusEnum["FE_PENDING"] = "fe-pending";
    TicketStatusEnum["APPROVAL_PENDING"] = "approval-pending";
    TicketStatusEnum["ALLOCATED"] = "allocated";
    TicketStatusEnum["ONGOING"] = "ongoing";
    TicketStatusEnum["COMPLETED"] = "completed";
    TicketStatusEnum["ARCHIVED"] = "archived";
    TicketStatusEnum["CANCELLED"] = "cancelled";
})(TicketStatusEnum || (exports.TicketStatusEnum = TicketStatusEnum = {}));
var PunctualityEnum;
(function (PunctualityEnum) {
    PunctualityEnum["EARLY"] = "early";
    PunctualityEnum["ON_TIME"] = "on-time";
    PunctualityEnum["DELAYED"] = "delayed";
    PunctualityEnum["AUTO"] = "auto";
})(PunctualityEnum || (exports.PunctualityEnum = PunctualityEnum = {}));
var SubTicketStatusEnum;
(function (SubTicketStatusEnum) {
    SubTicketStatusEnum["ASSIGN_PENDING"] = "draft";
    SubTicketStatusEnum["FE_PENDING"] = "assigned";
    SubTicketStatusEnum["APPROVAL_PENDING"] = "accepted";
    SubTicketStatusEnum["ALLOCATED"] = "approved";
    SubTicketStatusEnum["ONGOING"] = "chat-enabled";
    SubTicketStatusEnum["STARTED"] = "checkedIn";
    SubTicketStatusEnum["COMPLETED"] = "checkedOut";
    SubTicketStatusEnum["CANCELLED"] = "cancelled";
})(SubTicketStatusEnum || (exports.SubTicketStatusEnum = SubTicketStatusEnum = {}));
var S3FolderEnum;
(function (S3FolderEnum) {
    S3FolderEnum["PROFILE_IMAGES"] = "ProfileImages";
    S3FolderEnum["CHAT_DOCUMENTS"] = "ChatDocuments";
    S3FolderEnum["CHAT_IMAGES"] = "ChatImages";
    S3FolderEnum["CONTRACT_DOCUMENTS"] = "ContractDocuments";
})(S3FolderEnum || (exports.S3FolderEnum = S3FolderEnum = {}));
var UpdateTicketEnum;
(function (UpdateTicketEnum) {
    UpdateTicketEnum["TASK_ADDITION"] = "tasks";
    UpdateTicketEnum["DOCUMENT_COMMUNICATION_ADDITION"] = "documents_communications";
    UpdateTicketEnum["ENGINEER_ADDITION"] = "fieldEngineers";
    UpdateTicketEnum["SITE_DETAILS_MODIFICATION"] = "siteDetails";
})(UpdateTicketEnum || (exports.UpdateTicketEnum = UpdateTicketEnum = {}));
var SubticketUpdateEnum;
(function (SubticketUpdateEnum) {
    SubticketUpdateEnum["SCHEDULE"] = "schedule";
    SubticketUpdateEnum["STATUS"] = "status";
    SubticketUpdateEnum["FIELD_ENGINEER"] = "fieldEngineer";
})(SubticketUpdateEnum || (exports.SubticketUpdateEnum = SubticketUpdateEnum = {}));
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["ACTIVE"] = "active";
    UserStatusEnum["INACTIVE"] = "inactive";
    UserStatusEnum["SUSPENDED"] = "suspended";
    UserStatusEnum["BLOCKED"] = "blocked";
})(UserStatusEnum || (exports.UserStatusEnum = UserStatusEnum = {}));
var ExtensionStatusEnum;
(function (ExtensionStatusEnum) {
    ExtensionStatusEnum["APPROVED"] = "approved";
    ExtensionStatusEnum["REJECTED"] = "rejected";
    ExtensionStatusEnum["PENDING"] = "pending";
    ExtensionStatusEnum["SCHEDULE_EXTENDED"] = "schedule-extended";
})(ExtensionStatusEnum || (exports.ExtensionStatusEnum = ExtensionStatusEnum = {}));
var SubticketResponseEnum;
(function (SubticketResponseEnum) {
    SubticketResponseEnum["ACCEPTED"] = "accepted";
    SubticketResponseEnum["REJECTED"] = "rejected";
    SubticketResponseEnum["PENDING"] = "pending";
})(SubticketResponseEnum || (exports.SubticketResponseEnum = SubticketResponseEnum = {}));
var BillingTypeEnum;
(function (BillingTypeEnum) {
    BillingTypeEnum["HOURLY"] = "hourly";
    BillingTypeEnum["DAILY"] = "daily";
})(BillingTypeEnum || (exports.BillingTypeEnum = BillingTypeEnum = {}));
var FieldEngineerWorkStatusEnum;
(function (FieldEngineerWorkStatusEnum) {
    FieldEngineerWorkStatusEnum["CHECKED_IN"] = "checkedIn";
    FieldEngineerWorkStatusEnum["BREAK_START"] = "break-start";
    FieldEngineerWorkStatusEnum["BREAK_END"] = "break-end";
    FieldEngineerWorkStatusEnum["CHECKED_OUT"] = "checkedOut";
    FieldEngineerWorkStatusEnum["HOURLY_UPDATE"] = "hourly-update";
    FieldEngineerWorkStatusEnum["HOURS_BEFORE_24"] = "24HoursBefore";
    FieldEngineerWorkStatusEnum["HOURS_BEFORE_4"] = "4HoursBefore";
    FieldEngineerWorkStatusEnum["HOURS_BEFORE_3"] = "3HoursBefore";
    FieldEngineerWorkStatusEnum["HOURS_BEFORE_2"] = "2HoursBefore";
    FieldEngineerWorkStatusEnum["HOURS_BEFORE_1"] = "1HoursBefore";
})(FieldEngineerWorkStatusEnum || (exports.FieldEngineerWorkStatusEnum = FieldEngineerWorkStatusEnum = {}));
var LogisticsEnum;
(function (LogisticsEnum) {
    LogisticsEnum["TOOL"] = "tool";
    LogisticsEnum["MATERIAL"] = "material";
    LogisticsEnum["EQUIPMENT"] = "equipment";
})(LogisticsEnum || (exports.LogisticsEnum = LogisticsEnum = {}));
var TaskStatusEnum;
(function (TaskStatusEnum) {
    TaskStatusEnum["ALLOCATED"] = "allocated";
    TaskStatusEnum["ONGOING"] = "ongoing";
    TaskStatusEnum["COMPLETED"] = "completed";
})(TaskStatusEnum || (exports.TaskStatusEnum = TaskStatusEnum = {}));
var ContractStatusEnum;
(function (ContractStatusEnum) {
    ContractStatusEnum["UPCOMING"] = "upcoming";
    ContractStatusEnum["ACTIVE"] = "active";
    ContractStatusEnum["EXPIRED"] = "expired";
})(ContractStatusEnum || (exports.ContractStatusEnum = ContractStatusEnum = {}));
var SubticketInvoiceStatusEnum;
(function (SubticketInvoiceStatusEnum) {
    SubticketInvoiceStatusEnum["PENDING"] = "pending";
    SubticketInvoiceStatusEnum["PAID"] = "paid";
    SubticketInvoiceStatusEnum["CANCELLED"] = "cancelled";
    SubticketInvoiceStatusEnum["DELAYED"] = "delayed";
})(SubticketInvoiceStatusEnum || (exports.SubticketInvoiceStatusEnum = SubticketInvoiceStatusEnum = {}));
var WorkHourType;
(function (WorkHourType) {
    WorkHourType["WORKING_HOURS"] = "workingHours";
    WorkHourType["NIGHT_HOURS"] = "nightHours";
    WorkHourType["OUT_OF_WORKING_HOURS"] = "outOfWorkingHours";
})(WorkHourType || (exports.WorkHourType = WorkHourType = {}));
var InvoiceStatusEnum;
(function (InvoiceStatusEnum) {
    InvoiceStatusEnum["PENDING"] = "pending";
    InvoiceStatusEnum["PAID"] = "paid";
})(InvoiceStatusEnum || (exports.InvoiceStatusEnum = InvoiceStatusEnum = {}));
var InvoiceExtraExpenditureTypeEnum;
(function (InvoiceExtraExpenditureTypeEnum) {
    InvoiceExtraExpenditureTypeEnum["TRAVELING"] = "Traveling";
    InvoiceExtraExpenditureTypeEnum["FOOD_STAY"] = "Food & Stay";
    InvoiceExtraExpenditureTypeEnum["CONSUMABLES"] = "Consumables";
    InvoiceExtraExpenditureTypeEnum["MATERIALS"] = "Materials";
    InvoiceExtraExpenditureTypeEnum["OTHER"] = "Other";
})(InvoiceExtraExpenditureTypeEnum || (exports.InvoiceExtraExpenditureTypeEnum = InvoiceExtraExpenditureTypeEnum = {}));
