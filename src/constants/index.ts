export const constants = {
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
