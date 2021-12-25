import {LogFunction} from "@mrgrd56/remote-logger-common";

export interface RemoteLoggerParams {
    accessToken?: string;
    skipServerValidation?: boolean;
}

export interface RemoteLogger {
    log: LogFunction;
    warn: LogFunction;
    error: LogFunction;
    debug: LogFunction;
}