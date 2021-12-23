export interface RemoteLoggerParams {
    accessToken?: string;
    skipServerValidation?: boolean;
}

export interface RemoteLogger {
    log: (...data: any[]) => Promise<void>;
}