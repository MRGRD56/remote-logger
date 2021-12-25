import {LogLevel} from "@mrgrd56/remote-logger-common";

export enum AccessToken {
    AutoGenerate = 1
}

export const isAutoGeneratedToken = (accessToken?: string | AccessToken): accessToken is AccessToken.AutoGenerate => {
    return accessToken === AccessToken.AutoGenerate;
};

export interface RemoteLoggerServerParams {
    accessToken?: string | AccessToken;
    hostname?: string;
    serverStartCallback?: () => void;
    autoGeneratedTokenCallback?: (accessToken: string) => void;
}

export type LogHandler = (data: RemoteLog) => void;

export interface RemoteLoggerServer {
    listen: (callback: LogHandler) => void;
}

export interface RemoteLog {
    data: unknown;
    logLevel: LogLevel;
    time?: Date;
    from?: string;
    ipAddress?: string;
}