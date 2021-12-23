import remoteLoggerServer from '@mrgrd56/remote-logger-server';

const loggerServer = remoteLoggerServer(3322, {
    accessToken: 'lorem ipsum'
});

loggerServer.listen(data => {
    console.log(`[${data.from}]`, data.data);
});