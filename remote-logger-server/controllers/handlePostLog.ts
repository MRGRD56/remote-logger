import {Express} from "express";
import {RemoteLog} from "../types";

const handlePostLog = (app: Express, callback: (data: RemoteLog) => (void | Promise<void>)) => {
    return app.post('/log', ((req, res) => {
        const data = req.body;

        const from = req.query['from']?.toString() ?? req.headers['x-forwarded-for']?.toString() ?? req.socket.remoteAddress;

        callback({
            data,
            from
        });

        res.send();
    }));
};

export default handlePostLog;