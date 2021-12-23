import remoteLoggerServer from '@mrgrd56/remote-logger-server';

const loggerServer = remoteLoggerServer(3322, {
    accessToken: 'ecd356f4-ab2f-4ef2-b09f-ce60ff5aa74d'
});

loggerServer.listen(({from, data}) => {
    const dataArray = Array.isArray(data) ? data : [data];
    console.log(`[${from}]`, ...dataArray);
});