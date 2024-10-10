export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS_MESSAGE: "Invalid credentials provided.",
  SERVER_ERROR_MESSAGE: "Internal server error occurred.",
  NOT_FOUND_MESSAGE: "Resource not found.",
  INVALID_OTP_MESSAGE: "Invalid OTP provided.",
  RESET_PASSWORD_OLD_PASSWORD_NOT_MATCHED_MESSAGE:
    "Old password does not match.",
  INVALID_TOKEN_MESSAGE: "Invalid token.",
  USER_DELETED_SUCCESS_MESSAGE: "User deleted successfully.",
  OTP_GENERATION_ERROR_MESSAGE: "Error occurred while generating OTP.",
  OTP_SENT_MESSAGE: "OTP sent successfully.",
  PASSWORD_CHANGED_MESSAGE: "Password changed successfully.",
  PASSWORD_MISMATCH_MESSAGE: "Passwords do not match.",
  FILE_NOT_FOUND_MESSAGE: "File not found.",
  ARRAY_EXPECTED_MESSAGE: "Array expected.",
  FILE_UPLOAD_ERROR_MESSAGE: "Error occurred while uploading file.",
  INVALID_ARRAY_MESSAGE: "Invalid array provided.",
  FILENAME_NOT_FOUND_MESSAGE: "Filename not found.",
  FILE_DELETED_MESSAGE: "File deleted successfully.",
  CONTRACT_NOT_FOUND_MESSAGE: "Contract not found.",
  CHAT_NOT_FOUND_MESSAGE: "Chat not found.",
  USER_NOT_FOUND_MESSAGE: "User not found.",
  FIELD_ENGINEER_NOT_FOUND_MESSAGE: "Field engineer not found.",
  BILLING_DETAILS_NOT_FOUND_MESSAGE: "Billing details not found.",
  CLIENT_ID_REQUIRED_MESSAGE: "Client ID is required.",
  CLIENT_NOT_FOUND_MESSAGE: "Client not found.",
  CLIENT_CONTRACT_NOT_FOUND_MESSAGE: "Client contract not found.",
  CLIENT_NO_CONTRACT_MESSAGE: "Client has no contract.",
  SUBTICKET_NOT_FOUND_MESSAGE: "Subticket not found.",
  TICKET_NOT_ASSIGNED_MESSAGE: "Ticket not assigned to given Field Engineer.",
  SUBTICKET_NOT_ASSIGNED_MESSAGE:
    "Subticket not assigned to given Field Engineer.",
  USER_NOT_FOUND: "User not found.",
  SUBTICKET_NOT_FOUND: "Subticket not found.",
  FIELD_ENGINEER_NOT_FOUND: "Field Engineer not found.",
  SUBTICKET_NOT_ONGOING: "Subticket is not ongoing.",
  SUBTICKET_NOT_CHECKED_IN: "Subticket is not checked in.",
  SUBTICKET_ALREADY_CHECKED_OUT: "Subticket is already checked out.",
  SUBTICKET_ALREADY_CHECKED_IN: "Subticket is already checked in.",
  LOGIN_FAILED: "Login failed.",
  SUBTICKET_CANCELLED: "Subticket is cancelled.",
  SUBTICKET_NOT_ACCEPTED: "Subticket is not accepted.",
  SUBTICKET_NOT_PENDING_FOR_APPROVAL: "Subticket is not pending for approval.",
  SUBTICKET_NOT_APPROVED: "Subticket is not approved.",
  SUBTICKET_COMPLETED: "Subticket is completed.",
  USERNAME_ALREADY_TAKEN: "Username already taken.",
  PHONE_NUMBER_ALREADY_TAKEN: "Phone number already in use.",
  EMAIL_ALREADY_TAKEN: "Email already in use.",
  ADDRESS_BELONG_TO_OTHER_FIELD_ENGINEER:
    "Address belongs to other field engineer.",
  DUPLICATE_CLIENT_CONTRACT_NUMBER: "Duplicate Client Contract Number.",
  INSUFFICIENT_PERMISSION_FOR_TICKET_UPDATE:
    "You dont have sufficient permission to update the above ticket",
  TICKET_NOT_FOUND: "Ticket not found.",
};

export const STATUS_CODES = {
  // 1xx Informational responses
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,

  // 2xx Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,

  // 3xx Redirection
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,

  // 4xClient errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418, // Fun Easter egg HTTP status code

  // 5xx Server errors
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,

  NOT_ONGOING: 409,
  NOT_CHECKED_IN: 412,
  ALREADY_CHECKED_IN: 409,
  ALREADY_CHECKED_OUT: 409,
  CANCELLED: 409,
  NOT_ACCEPTED: 409,
  NOT_PENDING_FOR_APPROVAL: 409,
  NOT_APPROVED: 409,
  COMPLETED: 409,
};

export const redisKeys = {
  refreshToken: (userId: string) => `refreshToken:${userId}`,
  otp: (key: string) => `otp:${key}`,
  forgotPasswordOtp: (userId: string) => `forgotPasswordOTP:${userId}`,
  verifyOtp: (email: string) => `verifyOtp:${email}`,
  accessToken: (userId: string) => `accessToken:${userId}`,
  rateLimit: (userId: string, route: string) => `rateLimit:${userId}:${route}`,
};

export const messages = {
  getUserAlreadyExistsMessage: (username: string) =>
    `User having property ${username} already exists.`,
};
