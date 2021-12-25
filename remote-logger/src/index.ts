import {RemoteLogger, RemoteLoggerParams} from "./types";
import axios, {AxiosRequestHeaders} from "axios";
import {BaseRequestParams, LogLevel, LogRequestParams} from "@mrgrd56/remote-logger-common";
import * as moment from "moment";

const remoteLogger = (url: string, params?: RemoteLoggerParams): RemoteLogger => {
    const axiosInstance = axios.create({
        baseURL: url
    });

    const requestParams: BaseRequestParams = {
        accessToken: params?.accessToken
    };

    if (!params?.skipServerValidation) {
        let isValid: boolean;
        axiosInstance.get('/check_remote_logger', {
            params: requestParams
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

                const errorText = [error.message, error.response?.data].filter(data => data).join('\n');
                throw Error(errorText);
            });
    }

    const createLogFunction = (logLevel: LogLevel) => (...data: any[]) => {
        const params: LogRequestParams = {
            ...requestParams,
            logLevel
        };

        const headers: AxiosRequestHeaders = {
            date: moment().locale('en').format('ddd, DD MMM YYYY HH:mm:ss ZZ')
        };

        axiosInstance.post('/log', data, {
            params,
            headers
        });
    }

    return {
        log: createLogFunction(LogLevel.Info),
        warn: createLogFunction(LogLevel.Warn),
        error: createLogFunction(LogLevel.Error),
        debug: createLogFunction(LogLevel.Debug)
    };
};

export default remoteLogger;