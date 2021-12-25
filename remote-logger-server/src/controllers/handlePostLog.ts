import {RequestHandler} from "express";
import {RemoteLog} from "../types";
import {Observer} from "rxjs";
import {LogLevel, LogRequestParams} from "@mrgrd56/remote-logger-common";

const handlePostLog = (logObserver: Observer<RemoteLog>): RequestHandler => (req, res) => {
    const data = req.body;
    const query = req.query as LogRequestParams;

    const {from, logLevel} = query;
    const ipAddress = (req.headers['x-forwarded-for']?.toString() ?? req.socket.remoteAddress)?.replace(/^.*:/, '');
    const requestTimeString = req.headers['date'] ?? new Date();
    const requestTime = requestTimeString ? new Date(requestTimeString) : undefined;

    logObserver.next({
        data,
        from,
        ipAddress,
        logLevel: logLevel ?? LogLevel.Info,
        time: requestTime
    });

    res.send();
};

export default handlePostLog;