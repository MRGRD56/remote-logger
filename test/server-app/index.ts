import remoteLoggerServer from '@mrgrd56/remote-logger-server';
import consoleLogHandler from "@mrgrd56/remote-logger-server/logHandlers/consoleLogHandler";

const loggerServer = remoteLoggerServer(3322, {
    accessToken: undefined//'ecd356f4-ab2f-4ef2-b09f-ce60ff5aa74d'
});

loggerServer.listen(consoleLogHandler({
    printSender: false
}));