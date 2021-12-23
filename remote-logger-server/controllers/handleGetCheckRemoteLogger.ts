import {RequestHandler} from "express";
import * as packageJson from '../package.json';

const handleGetCheckRemoteLogger: RequestHandler = (req, res) => {
    res.send({
        app: packageJson.name,
        version: packageJson.version
    });
};

export default handleGetCheckRemoteLogger;