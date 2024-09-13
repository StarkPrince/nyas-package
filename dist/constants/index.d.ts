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
    FILE_NOT_FOUND_MESSAGE: string;
    ARRAY_EXPECTED_MESSAGE: string;
    FILE_UPLOAD_ERROR_MESSAGE: string;
    INVALID_ARRAY_MESSAGE: string;
    FILENAME_NOT_FOUND_MESSAGE: string;
    FILE_DELETED_MESSAGE: string;
    CONTRACT_NOT_FOUND_MESSAGE: string;
    CHAT_NOT_FOUND_MESSAGE: string;
    USER_NOT_FOUND_MESSAGE: string;
    FIELD_ENGINEER_NOT_FOUND_MESSAGE: string;
    BILLING_DETAILS_NOT_FOUND_MESSAGE: string;
    CLIENT_ID_REQUIRED_MESSAGE: string;
    CLIENT_NOT_FOUND_MESSAGE: string;
    CLIENT_CONTRACT_NOT_FOUND_MESSAGE: string;
    CLIENT_NO_CONTRACT_MESSAGE: string;
    SUBTICKET_NOT_FOUND_MESSAGE: string;
    TICKET_NOT_ASSIGNED_MESSAGE: string;
    SUBTICKET_NOT_ASSIGNED_MESSAGE: string;
};
export declare const redisKeys: {
    refreshToken: (userId: string) => string;
    otp: (key: string) => string;
    forgotPasswordOtp: (userId: string) => string;
    verifyOtp: (email: string) => string;
    accessToken: (userId: string) => string;
    rateLimit: (userId: string, route: string) => string;
};
export declare const messages: {
    getUserAlreadyExistsMessage: (username: string) => string;
};
