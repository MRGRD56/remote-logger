export interface BaseRequestParams {
    accessToken?: string;
}

export enum LogLevel {
    Info = 'info',
    Warn = 'warn',
    Error = 'error',
    Debug = 'debug'
}

export interface LogRequestParams extends BaseRequestParams {
    from?: string;
    logLevel?: LogLevel;
}

export type LogFunction = (...data: any[]) => void;