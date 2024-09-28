export declare enum Permission {
    VIEW_CLIENTS = "view.clients",
    CREATE_CLIENT = "create.client",
    MODIFY_CLIENT = "modify.client",
    DELETE_CLIENT = "delete.client",
    VIEW_CLIENT_CONTRACTS = "view.client.contracts",
    CREATE_CLIENT_CONTRACT = "create.client.contract",
    MODIFY_CLIENT_CONTRACT = "modify.client.contract",
    DELETE_CLIENT_CONTRACT = "delete.client.contract",
    VIEW_VENDORS = "view.vendors",
    CREATE_VENDOR = "create.vendor",
    MODIFY_VENDOR = "modify.vendor",
    DELETE_VENDOR = "delete.vendor",
    VIEW_VENDOR_CONTRACTS = "view.vendor.contracts",
    CREATE_VENDOR_CONTRACT = "create.vendor.contract",
    MODIFY_VENDOR_CONTRACT = "modify.vendor.contract",
    DELETE_VENDOR_CONTRACT = "delete.vendor.contract",
    VIEW_TICKETS = "view.tickets",
    CREATE_TICKET = "create.ticket",
    MODIFY_TICKET = "modify.ticket",
    MODIFY_TICKETS = "modify.tickets",
    ARCHIVE_TICKET = "archive.ticket",
    ARCHIVE_TICKETS = "archive.tickets",
    DELETE_TICKET = "delete.ticket",
    DELETE_TICKETS = "delete.tickets",
    VIEW_PRICES = "view.prices",
    VIEW_SUBTICKETS = "view.subtickets",
    CREATE_SUBTICKET = "create.subticket",
    MODIFY_SUBTICKET = "modify.subticket",
    UPDATE_SUBTICKET_STATUS = "update_ticket_status",
    ACCEPT_SUBTICKET = "accept.subticket",
    CANCEL_SUBTICKET = "cancel.subticket",
    UPDATE_SUBTICKET_WORK_STATUS = "update.subticket.work.status",
    VIEW_FIELD_ENGINEERS = "view.field.engineers",
    CREATE_FIELD_ENGINEER = "create.field.engineer",
    MODIFY_FIELD_ENGINEER = "modify.field.engineer",
    DELETE_FIELD_ENGINEER = "delete.field.engineer",
    VIEW_USERS = "view.users",
    CREATE_USER = "create.user",
    MODIFY_USER = "modify.user",
    DELETE_USER = "delete.user",
    CREATE_NOC_USER = "create.noc.user",
    READ_NOTIFICATIONS = "read.notifications",
    VIEW_NOTIFICATIONS = "view.notifications",
    VIEW_EXTENSIONS = "view.extensions",
    CREATE_EXTENSION = "create.extension",
    MODIFY_EXTENSION = "modify.extension",
    DELETE_EXTENSION = "delete.extension",
    VIEW_CHAT_MESSAGES = "view.chat.messages",
    CREATE_CHAT_MESSAGE = "create.chat.message",
    MODIFY_CHAT_MESSAGE = "modify.chat.message",
    DELETE_CHAT_MESSAGE = "delete.chat.message",
    CREATE_SITES = "create.sites",
    UPLOAD_FILES = "upload.files",
    UPLOAD_CHAT = "upload.chat",
    VIEW_LOGISTICS = "view.logistics",
    CREATE_LOGISTICS = "create.logistics",
    MODIFY_LOGISTICS = "modify.logistics",
    DELETE_LOGISTICS = "delete.logistics",
    VIEW_SITES = "view.sites",
    CREATE_SITE = "create.site",
    MODIFY_SITE = "modify.site",
    DELETE_SITE = "delete.site",
    VIEW_TASKS = "view.tasks",
    CREATE_TASK = "create.task",
    MODIFY_TASK = "modify.task",
    DELETE_TASK = "delete.task",
    VIEW_TASK_TEMPLATES = "view.task.templates",
    CREATE_TASK_TEMPLATE = "create.task.template",
    MODIFY_TASK_TEMPLATE = "modify.task.template",
    DELETE_TASK_TEMPLATE = "delete.task.template",
    VIEW_MEDIA = "view.media",
    CREATE_MEDIA = "create.media",
    MODIFY_MEDIA = "modify.media",
    DELETE_MEDIA = "delete.media",
    VIEW_WORK_STATUS = "view.work.status",
    CREATE_WORK_STATUS = "create.work.status",
    MODIFY_WORK_STATUS = "modify.work.status",
    DELETE_WORK_STATUS = "delete.work.status",
    CHECK_IN = "check.in",
    CHECK_OUT = "check.out",
    VIEW_EMERGENCY_CONTACT = "view.emergency.contact",
    DELETE_DEVICE_TOKEN = "delete.device.token",
    VIEW_DEVICE_TOKEN = "view.device.token",
    CREATE_DEVICE_TOKEN = "create.device.token",
    MODIFY_DEVICE_TOKEN = "modify.device.token",
    LOGOUT = "logout"
}
export declare enum UserRolesEnum {
    NOC = "noc",
    FIELD_ENGINEER = "fieldEngineer",
    MBA = "mba"
}
export declare const rolePermissions: {
    fieldEngineer: Permission[];
    noc: (Permission.VIEW_CLIENTS | Permission.CREATE_CLIENT | Permission.MODIFY_CLIENT | Permission.DELETE_CLIENT | Permission.VIEW_CLIENT_CONTRACTS | Permission.CREATE_CLIENT_CONTRACT | Permission.MODIFY_CLIENT_CONTRACT | Permission.DELETE_CLIENT_CONTRACT | Permission.VIEW_VENDORS | Permission.CREATE_VENDOR | Permission.MODIFY_VENDOR | Permission.DELETE_VENDOR | Permission.VIEW_VENDOR_CONTRACTS | Permission.CREATE_VENDOR_CONTRACT | Permission.MODIFY_VENDOR_CONTRACT | Permission.DELETE_VENDOR_CONTRACT | Permission.VIEW_TICKETS | Permission.CREATE_TICKET | Permission.MODIFY_TICKET | Permission.ARCHIVE_TICKET | Permission.DELETE_TICKET | Permission.VIEW_PRICES | Permission.VIEW_SUBTICKETS | Permission.CREATE_SUBTICKET | Permission.MODIFY_SUBTICKET | Permission.UPDATE_SUBTICKET_STATUS | Permission.CANCEL_SUBTICKET | Permission.VIEW_FIELD_ENGINEERS | Permission.CREATE_FIELD_ENGINEER | Permission.MODIFY_FIELD_ENGINEER | Permission.DELETE_FIELD_ENGINEER | Permission.VIEW_USERS | Permission.CREATE_USER | Permission.MODIFY_USER | Permission.DELETE_USER | Permission.READ_NOTIFICATIONS | Permission.VIEW_NOTIFICATIONS | Permission.VIEW_EXTENSIONS | Permission.MODIFY_EXTENSION | Permission.DELETE_EXTENSION | Permission.VIEW_CHAT_MESSAGES | Permission.CREATE_CHAT_MESSAGE | Permission.MODIFY_CHAT_MESSAGE | Permission.DELETE_CHAT_MESSAGE | Permission.CREATE_SITES | Permission.UPLOAD_FILES | Permission.UPLOAD_CHAT | Permission.VIEW_LOGISTICS | Permission.CREATE_LOGISTICS | Permission.MODIFY_LOGISTICS | Permission.DELETE_LOGISTICS | Permission.VIEW_SITES | Permission.CREATE_SITE | Permission.MODIFY_SITE | Permission.DELETE_SITE | Permission.VIEW_TASKS | Permission.CREATE_TASK | Permission.MODIFY_TASK | Permission.DELETE_TASK | Permission.VIEW_TASK_TEMPLATES | Permission.CREATE_TASK_TEMPLATE | Permission.MODIFY_TASK_TEMPLATE | Permission.DELETE_TASK_TEMPLATE | Permission.VIEW_MEDIA | Permission.CREATE_MEDIA | Permission.MODIFY_MEDIA | Permission.DELETE_MEDIA | Permission.VIEW_WORK_STATUS | Permission.CREATE_WORK_STATUS | Permission.MODIFY_WORK_STATUS | Permission.DELETE_WORK_STATUS | Permission.CHECK_IN | Permission.CHECK_OUT | Permission.VIEW_EMERGENCY_CONTACT | Permission.DELETE_DEVICE_TOKEN | Permission.VIEW_DEVICE_TOKEN | Permission.CREATE_DEVICE_TOKEN | Permission.MODIFY_DEVICE_TOKEN | Permission.LOGOUT)[];
    mba: (Permission.VIEW_CLIENTS | Permission.CREATE_CLIENT | Permission.MODIFY_CLIENT | Permission.DELETE_CLIENT | Permission.VIEW_CLIENT_CONTRACTS | Permission.CREATE_CLIENT_CONTRACT | Permission.MODIFY_CLIENT_CONTRACT | Permission.DELETE_CLIENT_CONTRACT | Permission.VIEW_VENDORS | Permission.CREATE_VENDOR | Permission.MODIFY_VENDOR | Permission.DELETE_VENDOR | Permission.VIEW_VENDOR_CONTRACTS | Permission.CREATE_VENDOR_CONTRACT | Permission.MODIFY_VENDOR_CONTRACT | Permission.DELETE_VENDOR_CONTRACT | Permission.VIEW_TICKETS | Permission.CREATE_TICKET | Permission.MODIFY_TICKET | Permission.MODIFY_TICKETS | Permission.ARCHIVE_TICKET | Permission.ARCHIVE_TICKETS | Permission.DELETE_TICKET | Permission.DELETE_TICKETS | Permission.VIEW_PRICES | Permission.VIEW_SUBTICKETS | Permission.CREATE_SUBTICKET | Permission.MODIFY_SUBTICKET | Permission.UPDATE_SUBTICKET_STATUS | Permission.CANCEL_SUBTICKET | Permission.VIEW_FIELD_ENGINEERS | Permission.CREATE_FIELD_ENGINEER | Permission.MODIFY_FIELD_ENGINEER | Permission.DELETE_FIELD_ENGINEER | Permission.VIEW_USERS | Permission.CREATE_USER | Permission.MODIFY_USER | Permission.DELETE_USER | Permission.CREATE_NOC_USER | Permission.READ_NOTIFICATIONS | Permission.VIEW_NOTIFICATIONS | Permission.VIEW_EXTENSIONS | Permission.MODIFY_EXTENSION | Permission.DELETE_EXTENSION | Permission.VIEW_CHAT_MESSAGES | Permission.CREATE_CHAT_MESSAGE | Permission.MODIFY_CHAT_MESSAGE | Permission.DELETE_CHAT_MESSAGE | Permission.CREATE_SITES | Permission.UPLOAD_FILES | Permission.UPLOAD_CHAT | Permission.VIEW_LOGISTICS | Permission.CREATE_LOGISTICS | Permission.MODIFY_LOGISTICS | Permission.DELETE_LOGISTICS | Permission.VIEW_SITES | Permission.CREATE_SITE | Permission.MODIFY_SITE | Permission.DELETE_SITE | Permission.VIEW_TASKS | Permission.CREATE_TASK | Permission.MODIFY_TASK | Permission.DELETE_TASK | Permission.VIEW_TASK_TEMPLATES | Permission.CREATE_TASK_TEMPLATE | Permission.MODIFY_TASK_TEMPLATE | Permission.DELETE_TASK_TEMPLATE | Permission.VIEW_MEDIA | Permission.CREATE_MEDIA | Permission.MODIFY_MEDIA | Permission.DELETE_MEDIA | Permission.VIEW_WORK_STATUS | Permission.CREATE_WORK_STATUS | Permission.MODIFY_WORK_STATUS | Permission.DELETE_WORK_STATUS | Permission.CHECK_IN | Permission.CHECK_OUT | Permission.VIEW_EMERGENCY_CONTACT | Permission.DELETE_DEVICE_TOKEN | Permission.VIEW_DEVICE_TOKEN | Permission.CREATE_DEVICE_TOKEN | Permission.MODIFY_DEVICE_TOKEN | Permission.LOGOUT)[];
};
