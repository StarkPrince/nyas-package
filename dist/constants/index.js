"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = exports.redisKeys = exports.constants = void 0;
exports.constants = {
    INVALID_CREDENTIALS_MESSAGE: "Invalid credentials provided.",
    SERVER_ERROR_MESSAGE: "Internal server error occurred.",
    NOT_FOUND_MESSAGE: "Resource not found.",
    INVALID_OTP_MESSAGE: "Invalid OTP provided.",
    RESET_PASSWORD_OLD_PASSWORD_NOT_MATCHED_MESSAGE: "Old password does not match.",
    INVALID_TOKEN_MESSAGE: "Invalid token.",
    USER_DELETED_SUCCESS_MESSAGE: "User deleted successfully.",
    OTP_GENERATION_ERROR_MESSAGE: "Error occurred while generating OTP.",
    OTP_SENT_MESSAGE: "OTP sent successfully.",
    PASSWORD_CHANGED_MESSAGE: "Password changed successfully.",
    PASSWORD_MISMATCH_MESSAGE: "Passwords do not match.",
};
exports.redisKeys = {
    refreshToken: (userId) => `refreshToken:${userId}`,
    otp: (key) => `otp:${key}`,
    forgotPasswordOtp: (userId) => `forgotPasswordOTP:${userId}`,
    verifyOtp: (email) => `verifyOtp:${email}`,
    accessToken: (userId) => `accessToken:${userId}`,
};
exports.messages = {
    getUserAlreadyExistsMessage: (username) => `User having property ${username} already exists.`,
};
