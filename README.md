# remote-logger
Node.JS Remote Logger

## Client

[@mrgrd56/remote-logger](https://www.npmjs.com/package/@mrgrd56/remote-logger)

#### Usage
```ts
import remoteLogger from '@mrgrd56/remote-logger';

const logger = remoteLogger('http://localhost:3322', {
    accessToken: 'ecd356f4-ab2f-4ef2-b09f-ce60ff5aa74d'
});

logger.log('hello world');
logger.warn('I warn ya one last time!');
logger.error('an error occurred ＼（〇_ｏ）／', { code: 54272932 });
logger.debug([4, 2], 'some debug message')
```

## Server

[@mrgrd56/remote-logger-server](https://www.npmjs.com/package/@mrgrd56/remote-logger-server)

#### Usage
```ts
import remoteLoggerServer from '@mrgrd56/remote-logger-server';
import consoleLogHandler from '@mrgrd56/remote-logger-server/lib/src/logHandlers/consoleLogHandler';

const loggerServer = remoteLoggerServer(3322, {
    accessToken: 'ecd356f4-ab2f-4ef2-b09f-ce60ff5aa74d'
});

loggerServer.listen(consoleLogHandler());
//or just loggerServer.listenConsole();
```
