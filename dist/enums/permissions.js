"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolePermissions = exports.UserRolesEnum = exports.Permission = void 0;
var Permission;
(function (Permission) {
    // client permissions
    Permission["VIEW_CLIENTS"] = "view.clients";
    Permission["CREATE_CLIENT"] = "create.client";
    Permission["MODIFY_CLIENT"] = "modify.client";
    Permission["DELETE_CLIENT"] = "delete.client";
    // client contract permissions
    Permission["VIEW_CLIENT_CONTRACTS"] = "view.client.contracts";
    Permission["CREATE_CLIENT_CONTRACT"] = "create.client.contract";
    Permission["MODIFY_CLIENT_CONTRACT"] = "modify.client.contract";
    Permission["DELETE_CLIENT_CONTRACT"] = "delete.client.contract";
    // vendor permissions
    Permission["VIEW_VENDORS"] = "view.vendors";
    Permission["CREATE_VENDOR"] = "create.vendor";
    Permission["MODIFY_VENDOR"] = "modify.vendor";
    Permission["DELETE_VENDOR"] = "delete.vendor";
    // vendor contract permissions
    Permission["VIEW_VENDOR_CONTRACTS"] = "view.vendor.contracts";
    Permission["CREATE_VENDOR_CONTRACT"] = "create.vendor.contract";
    Permission["MODIFY_VENDOR_CONTRACT"] = "modify.vendor.contract";
    Permission["DELETE_VENDOR_CONTRACT"] = "delete.vendor.contract";
    // ticket permissions
    Permission["VIEW_TICKETS"] = "view.tickets";
    Permission["CREATE_TICKET"] = "create.ticket";
    Permission["MODIFY_TICKET"] = "modify.ticket";
    Permission["MODIFY_TICKETS"] = "modify.tickets";
    Permission["ARCHIVE_TICKET"] = "archive.ticket";
    Permission["ARCHIVE_TICKETS"] = "archive.tickets";
    Permission["DELETE_TICKET"] = "delete.ticket";
    Permission["DELETE_TICKETS"] = "delete.tickets";
    Permission["VIEW_PRICES"] = "view.prices";
    // subtickets permissions
    Permission["VIEW_SUBTICKETS"] = "view.subtickets";
    Permission["CREATE_SUBTICKET"] = "create.subticket";
    Permission["MODIFY_SUBTICKET"] = "modify.subticket";
    Permission["UPDATE_SUBTICKET_STATUS"] = "update_ticket_status";
    Permission["ACCEPT_SUBTICKET"] = "accept.subticket";
    Permission["CANCEL_SUBTICKET"] = "cancel.subticket";
    Permission["UPDATE_SUBTICKET_WORK_STATUS"] = "update.subticket.work.status";
    // field engineer permissions
    Permission["VIEW_FIELD_ENGINEERS"] = "view.field.engineers";
    Permission["CREATE_FIELD_ENGINEER"] = "create.field.engineer";
    Permission["MODIFY_FIELD_ENGINEER"] = "modify.field.engineer";
    Permission["DELETE_FIELD_ENGINEER"] = "delete.field.engineer";
    // user permissions
    Permission["VIEW_USERS"] = "view.users";
    Permission["CREATE_USER"] = "create.user";
    Permission["MODIFY_USER"] = "modify.user";
    Permission["DELETE_USER"] = "delete.user";
    Permission["CREATE_NOC_USER"] = "create.noc.user";
    // notification permissions
    Permission["READ_NOTIFICATIONS"] = "read.notifications";
    Permission["VIEW_NOTIFICATIONS"] = "view.notifications";
    // extension permissions
    Permission["VIEW_EXTENSIONS"] = "view.extensions";
    Permission["CREATE_EXTENSION"] = "create.extension";
    Permission["MODIFY_EXTENSION"] = "modify.extension";
    Permission["DELETE_EXTENSION"] = "delete.extension";
    // chat messages permissions
    Permission["VIEW_CHAT_MESSAGES"] = "view.chat.messages";
    Permission["CREATE_CHAT_MESSAGE"] = "create.chat.message";
    Permission["MODIFY_CHAT_MESSAGE"] = "modify.chat.message";
    Permission["DELETE_CHAT_MESSAGE"] = "delete.chat.message";
    Permission["CREATE_SITES"] = "create.sites";
    Permission["UPLOAD_FILES"] = "upload.files";
    Permission["UPLOAD_CHAT"] = "upload.chat";
    // logistics permissions
    Permission["VIEW_LOGISTICS"] = "view.logistics";
    Permission["CREATE_LOGISTICS"] = "create.logistics";
    Permission["MODIFY_LOGISTICS"] = "modify.logistics";
    Permission["DELETE_LOGISTICS"] = "delete.logistics";
    // site permissions
    Permission["VIEW_SITES"] = "view.sites";
    Permission["CREATE_SITE"] = "create.site";
    Permission["MODIFY_SITE"] = "modify.site";
    Permission["DELETE_SITE"] = "delete.site";
    // task permissions
    Permission["VIEW_TASKS"] = "view.tasks";
    Permission["CREATE_TASK"] = "create.task";
    Permission["MODIFY_TASK"] = "modify.task";
    Permission["DELETE_TASK"] = "delete.task";
    // task template permissions
    Permission["VIEW_TASK_TEMPLATES"] = "view.task.templates";
    Permission["CREATE_TASK_TEMPLATE"] = "create.task.template";
    Permission["MODIFY_TASK_TEMPLATE"] = "modify.task.template";
    Permission["DELETE_TASK_TEMPLATE"] = "delete.task.template";
    // media permissions
    Permission["VIEW_MEDIA"] = "view.media";
    Permission["CREATE_MEDIA"] = "create.media";
    Permission["MODIFY_MEDIA"] = "modify.media";
    Permission["DELETE_MEDIA"] = "delete.media";
    // work status
    Permission["VIEW_WORK_STATUS"] = "view.work.status";
    Permission["CREATE_WORK_STATUS"] = "create.work.status";
    Permission["MODIFY_WORK_STATUS"] = "modify.work.status";
    Permission["DELETE_WORK_STATUS"] = "delete.work.status";
    // Checkin/Checkout
    Permission["CHECK_IN"] = "check.in";
    Permission["CHECK_OUT"] = "check.out";
})(Permission || (exports.Permission = Permission = {}));
var UserRolesEnum;
(function (UserRolesEnum) {
    UserRolesEnum["NOC"] = "noc";
    UserRolesEnum["FIELD_ENGINEER"] = "fieldEngineer";
    UserRolesEnum["MBA"] = "mba";
})(UserRolesEnum || (exports.UserRolesEnum = UserRolesEnum = {}));
exports.rolePermissions = {
    [UserRolesEnum.FIELD_ENGINEER]: [
        Permission.VIEW_TICKETS,
        Permission.VIEW_SUBTICKETS,
        Permission.UPDATE_SUBTICKET_WORK_STATUS,
        Permission.UPDATE_SUBTICKET_STATUS,
        Permission.ACCEPT_SUBTICKET,
        Permission.CANCEL_SUBTICKET,
        Permission.CREATE_EXTENSION,
        Permission.VIEW_CHAT_MESSAGES,
        Permission.CREATE_CHAT_MESSAGE,
        Permission.MODIFY_CHAT_MESSAGE,
        Permission.DELETE_CHAT_MESSAGE,
        Permission.VIEW_FIELD_ENGINEERS,
        Permission.MODIFY_FIELD_ENGINEER,
        Permission.UPLOAD_CHAT,
        Permission.VIEW_SITES,
        Permission.VIEW_MEDIA,
        Permission.MODIFY_WORK_STATUS,
        Permission.CHECK_IN,
        Permission.CHECK_OUT,
        Permission.VIEW_LOGISTICS,
        Permission.READ_NOTIFICATIONS,
        Permission.VIEW_EXTENSIONS,
        Permission.VIEW_NOTIFICATIONS,
    ],
    [UserRolesEnum.NOC]: Object.values(Permission).filter((permission) => permission !== Permission.MODIFY_TICKETS &&
        permission !== Permission.CREATE_NOC_USER &&
        permission !== Permission.ARCHIVE_TICKETS &&
        permission !== Permission.DELETE_TICKETS &&
        permission !== Permission.ACCEPT_SUBTICKET &&
        permission !== Permission.UPDATE_SUBTICKET_WORK_STATUS &&
        permission !== Permission.CREATE_EXTENSION),
    [UserRolesEnum.MBA]: Object.values(Permission).filter((permission) => permission !== Permission.ACCEPT_SUBTICKET &&
        permission !== Permission.UPDATE_SUBTICKET_WORK_STATUS &&
        permission !== Permission.CREATE_EXTENSION),
};
