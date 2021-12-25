import {RequestHandler} from "express";
import {BaseRequestParams} from "@mrgrd56/remote-logger-common";

const checkAccessToken = (actualAccessToken?: string): RequestHandler => (req, res, next) => {
    const {accessToken} = req.query as BaseRequestParams;

    if (actualAccessToken === undefined || actualAccessToken === accessToken) {
        next();
    } else {
        if (accessToken) {
            res.status(403);
            res.send('Invalid access token');
        } else {
            res.status(401);
            res.send('Access token is required');
        }

        res.end();
    }
};

export default checkAccessToken;