export declare const constants: {
    INVALID_CREDENTIALS_MESSAGE: string;
    SERVER_ERROR_MESSAGE: string;
    NOT_FOUND_MESSAGE: string;
    INVALID_OTP_MESSAGE: string;
    RESET_PASSWORD_OLD_PASSWORD_NOT_MATCHED_MESSAGE: string;
    INVALID_TOKEN_MESSAGE: string;
    USER_DELETED_SUCCESS_MESSAGE: string;
    OTP_GENERATION_ERROR_MESSAGE: string;
    OTP_SENT_MESSAGE: string;
    PASSWORD_CHANGED_MESSAGE: string;
    PASSWORD_MISMATCH_MESSAGE: string;
};
export declare const redisKeys: {
    refreshToken: (userId: string) => string;
    otp: (key: string) => string;
    forgotPasswordOtp: (userId: string) => string;
    verifyOtp: (email: string) => string;
    accessToken: (userId: string) => string;
};
