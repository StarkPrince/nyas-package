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
};

export const redisKeys = {
  refreshToken: (userId: string) => `refreshToken:${userId}`,
  otp: (key: string) => `otp:${key}`,
  forgotPasswordOtp: (userId: string) => `forgotPasswordOTP:${userId}`,
  verifyOtp: (email: string) => `verifyOtp:${email}`,
  accessToken: (userId: string) => `accessToken:${userId}`,
};

export const messages = {
  getUserAlreadyExistsMessage: (username: string) =>
    `User having property ${username} already exists.`,
};
