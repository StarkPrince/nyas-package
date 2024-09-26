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
exports.ContractStatusEnum = exports.TaskStatusEnum = exports.LogisticsEnum = exports.FieldEngineerWorkStatusEnum = exports.BillingTypeEnum = exports.ExtensionStatusEnum = exports.UserStatusEnum = exports.UpdateTicketEnum = exports.S3FolderEnum = exports.SubTicketStatusEnum = exports.PunctualityEnum = exports.TicketStatusEnum = exports.ReadStatusEnum = exports.ChatTypeEnum = void 0;
__exportStar(require("./cities"), exports);
__exportStar(require("./countries"), exports);
__exportStar(require("./currencies"), exports);
__exportStar(require("./permissions"), exports);
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
    PunctualityEnum["LATE"] = "late";
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
    UpdateTicketEnum["ADD_TASKS"] = "add-tasks";
    UpdateTicketEnum["ADD_DOCUMENTS"] = "add-documents";
    UpdateTicketEnum["ADD_COMMUNICATIONS"] = "add-communications";
    UpdateTicketEnum["ADD_FIELDENGINEERS"] = "add-fieldEngineers";
})(UpdateTicketEnum || (exports.UpdateTicketEnum = UpdateTicketEnum = {}));
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["ACTIVE"] = "active";
    UserStatusEnum["INACTIVE"] = "inactive";
    UserStatusEnum["BLOCKED"] = "blocked";
})(UserStatusEnum || (exports.UserStatusEnum = UserStatusEnum = {}));
var ExtensionStatusEnum;
(function (ExtensionStatusEnum) {
    ExtensionStatusEnum["APPROVED"] = "approved";
    ExtensionStatusEnum["REJECTED"] = "rejected";
    ExtensionStatusEnum["PENDING"] = "pending";
})(ExtensionStatusEnum || (exports.ExtensionStatusEnum = ExtensionStatusEnum = {}));
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
