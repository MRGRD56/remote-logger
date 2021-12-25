import {LogHandler} from "../types";
import {LogFunction, LogLevel} from "@mrgrd56/remote-logger-common";
import * as moment from "moment";
import * as chalk from "chalk";
import {Chalk} from "chalk";

const consoleLogFunctions: Readonly<Record<LogLevel, LogFunction>> = {
    [LogLevel.Info]: console.log,
    [LogLevel.Warn]: console.warn,
    [LogLevel.Error]: console.error,
    [LogLevel.Debug]: console.debug
} as const;

const logLevelChalks: Readonly<Record<LogLevel, Chalk>> = {
    [LogLevel.Info]: chalk.bgBlue,
    [LogLevel.Warn]: chalk.bgYellow,
    [LogLevel.Error]: chalk.bgRed,
    [LogLevel.Debug]: chalk.bgWhite
} as const;

export interface ConsoleLogHandlerParams {
    printTime?: boolean;
    printSender?: boolean;
    printLogLevel?: boolean;
    isDataAsArray?: boolean;
}

const consoleLogHandler = (params?: ConsoleLogHandlerParams): LogHandler => ({data, logLevel, time, from, ipAddress}) => {
    const consoleLogFunction = consoleLogFunctions[logLevel];
    const logLevelChalk = logLevelChalks[logLevel];

    const timeString = time && params?.printTime !== false ? chalk.blueBright(moment(time).format('HH:mm:ss')) : undefined;

    const logLevelString = params?.printLogLevel !== false ? logLevelChalk(logLevel.padEnd(5, ' ')) : undefined;

    const senderStringRaw = from ?? ipAddress;
    const senderString = senderStringRaw && params?.printSender !== false ? chalk.blueBright(`${senderStringRaw}`) : undefined;

    const metaString = [timeString, senderString, logLevelString].filter(item => item).join(' ');

    if (params?.isDataAsArray !== false) {
        const dataArray = Array.isArray(data) ? data : [data];
        consoleLogFunction(metaString, ...dataArray);
    } else {
        consoleLogFunction(metaString, data);
    }
};

export default consoleLogHandler;