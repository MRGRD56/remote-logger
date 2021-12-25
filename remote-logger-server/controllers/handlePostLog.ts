import {RequestHandler} from "express";
import {RemoteLog} from "../types";
import {Observer} from "rxjs";

const handlePostLog = (logObserver: Observer<RemoteLog>): RequestHandler => (req, res) => {
    const data = req.body;

    const from = req.query['from']?.toString() ?? req.headers['x-forwarded-for']?.toString() ?? req.socket.remoteAddress;

    logObserver.next({
        data,
        from
    });

    res.send();
};

export default handlePostLog;