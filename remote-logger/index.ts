import {RemoteLogger, RemoteLoggerParams} from "./types";
import axios from "axios";
import {BaseRequestParams} from "@mrgrd56/remote-logger-common";

const remoteLogger = (url: string, params?: RemoteLoggerParams): RemoteLogger => {
    const axiosInstance = axios.create({
        baseURL: url
    });

    const baseRequestQuery: BaseRequestParams = {
        accessToken: params?.accessToken
    };

    if (!params?.skipServerValidation) {
        let isValid: boolean;
        axiosInstance.get('/check_remote_logger', {
            params: baseRequestQuery
        })
            .then(({data}) => {
                isValid = data.app === '@mrgrd56/remote-logger-server' && data.version;

                if (!isValid) {
                    throw new Error(`Server is invalid`);
                }
            })
            .catch(error => {
                if (!axios.isAxiosError(error)) {
                    return;
                }

                throw Error(error.message);
            });
    }

    const log = async (...data: any[]) => {
        await axiosInstance.post('/log', data);
    };

    return {
        log
    };
};

export default remoteLogger;