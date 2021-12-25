# remote-logger
Node.JS Remote Logger

## Client

[@mrgrd56/remote-logger](https://www.npmjs.com/package/@mrgrd56/remote-logger)

#### Usage
```ts
import remoteLogger from "@mrgrd56/remote-logger";

const logger = remoteLogger('http://localhost:3322', {
    accessToken: 'ecd356f4-ab2f-4ef2-b09f-ce60ff5aa74d'
});

logger.log('hello world');
```

## Server

[@mrgrd56/remote-logger-server](https://www.npmjs.com/package/@mrgrd56/remote-logger-server)

#### Usage
```ts
import remoteLoggerServer from '@mrgrd56/remote-logger-server';

const loggerServer = remoteLoggerServer(3322, {
    accessToken: 'ecd356f4-ab2f-4ef2-b09f-ce60ff5aa74d'
});

loggerServer.listen(({from, data}) => {
    const dataArray = Array.isArray(data) ? data : [data];
    console.log(`[${from}]`, ...dataArray);
});
```
