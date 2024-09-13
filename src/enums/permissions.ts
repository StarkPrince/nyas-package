export enum Permission {
  // client permissions
  VIEW_CLIENTS = "view.clients",
  CREATE_CLIENT = "create.client",
  MODIFY_CLIENT = "modify.client",
  DELETE_CLIENT = "delete.client",

  // client contract permissions
  VIEW_CLIENT_CONTRACTS = "view.client.contracts",
  CREATE_CLIENT_CONTRACT = "create.client.contract",
  MODIFY_CLIENT_CONTRACT = "modify.client.contract",
  DELETE_CLIENT_CONTRACT = "delete.client.contract",

  // vendor permissions
  VIEW_VENDORS = "view.vendors",
  CREATE_VENDOR = "create.vendor",
  MODIFY_VENDOR = "modify.vendor",
  DELETE_VENDOR = "delete.vendor",

  // vendor contract permissions
  VIEW_VENDOR_CONTRACTS = "view.vendor.contracts",
  CREATE_VENDOR_CONTRACT = "create.vendor.contract",
  MODIFY_VENDOR_CONTRACT = "modify.vendor.contract",
  DELETE_VENDOR_CONTRACT = "delete.vendor.contract",

  // ticket permissions
  VIEW_TICKETS = "view.tickets",
  CREATE_TICKET = "create.ticket",
  MODIFY_TICKET = "modify.ticket",
  MODIFY_TICKETS = "modify.tickets",
  ARCHIVE_TICKET = "archive.ticket",
  ARCHIVE_TICKETS = "archive.tickets",
  DELETE_TICKET = "delete.ticket",
  DELETE_TICKETS = "delete.tickets",
  VIEW_PRICES = "view.prices",

  // subtickets permissions
  VIEW_SUBTICKETS = "view.subtickets",
  CREATE_SUBTICKET = "create.subticket",
  MODIFY_SUBTICKET = "modify.subticket",
  UPDATE_SUBTICKET_STATUS = "update_ticket_status",
  ACCEPT_SUBTICKET = "accept.subticket",
  CANCEL_SUBTICKET = "cancel.subticket",
  UPDATE_SUBTICKET_WORK_STATUS = "update.subticket.work.status",

  // field engineer permissions
  VIEW_FIELD_ENGINEERS = "view.field.engineers",
  CREATE_FIELD_ENGINEER = "create.field.engineer",
  MODIFY_FIELD_ENGINEER = "modify.field.engineer",
  DELETE_FIELD_ENGINEER = "delete.field.engineer",

  // user permissions
  VIEW_USERS = "view.users",
  CREATE_USER = "create.user",
  MODIFY_USER = "modify.user",
  DELETE_USER = "delete.user",

  CREATE_NOC_USER = "create.noc.user",

  // notification permissions
  READ_NOTIFICATIONS = "read.notifications",
  VIEW_NOTIFICATIONS = "view.notifications",

  // extension permissions
  VIEW_EXTENSIONS = "view.extensions",
  CREATE_EXTENSION = "create.extension",
  MODIFY_EXTENSION = "modify.extension",
  DELETE_EXTENSION = "delete.extension",

  // chat messages permissions
  VIEW_CHAT_MESSAGES = "view.chat.messages",
  CREATE_CHAT_MESSAGE = "create.chat.message",
  MODIFY_CHAT_MESSAGE = "modify.chat.message",
  DELETE_CHAT_MESSAGE = "delete.chat.message",

  CREATE_SITES = "create.sites",

  UPLOAD_FILES = "upload.files",
  UPLOAD_CHAT = "upload.chat",

  // logistics permissions
  VIEW_LOGISTICS = "view.logistics",
  CREATE_LOGISTICS = "create.logistics",
  MODIFY_LOGISTICS = "modify.logistics",
  DELETE_LOGISTICS = "delete.logistics",

  // site permissions
  VIEW_SITES = "view.sites",
  CREATE_SITE = "create.site",
  MODIFY_SITE = "modify.site",
  DELETE_SITE = "delete.site",

  // task permissions
  VIEW_TASKS = "view.tasks",
  CREATE_TASK = "create.task",
  MODIFY_TASK = "modify.task",
  DELETE_TASK = "delete.task",

  // task template permissions
  VIEW_TASK_TEMPLATES = "view.task.templates",
  CREATE_TASK_TEMPLATE = "create.task.template",
  MODIFY_TASK_TEMPLATE = "modify.task.template",
  DELETE_TASK_TEMPLATE = "delete.task.template",

  // media permissions
  VIEW_MEDIA = "view.media",
  CREATE_MEDIA = "create.media",
  MODIFY_MEDIA = "modify.media",
  DELETE_MEDIA = "delete.media",

  // work status
  VIEW_WORK_STATUS = "view.work.status",
  CREATE_WORK_STATUS = "create.work.status",
  MODIFY_WORK_STATUS = "modify.work.status",
  DELETE_WORK_STATUS = "delete.work.status",

  // Checkin/Checkout
  CHECK_IN = "check.in",
  CHECK_OUT = "check.out",
}

export enum UserRolesEnum {
  NOC = "noc",
  FIELD_ENGINEER = "fieldEngineer",
  MBA = "mba",
}

export const rolePermissions = {
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
  ],
  [UserRolesEnum.NOC]: Object.values(Permission).filter(
    (permission) =>
      permission !== Permission.MODIFY_TICKETS &&
      permission !== Permission.CREATE_NOC_USER &&
      permission !== Permission.ARCHIVE_TICKETS &&
      permission !== Permission.DELETE_TICKETS &&
      permission !== Permission.ACCEPT_SUBTICKET &&
      permission !== Permission.UPDATE_SUBTICKET_WORK_STATUS &&
      permission !== Permission.CREATE_EXTENSION
  ),
  [UserRolesEnum.MBA]: Object.values(Permission).filter(
    (permission) =>
      permission !== Permission.ACCEPT_SUBTICKET &&
      permission !== Permission.UPDATE_SUBTICKET_WORK_STATUS &&
      permission !== Permission.CREATE_EXTENSION
  ),
};
