import remoteLogger from "@mrgrd56/remote-logger";

const logger = remoteLogger('http://localhost:3322', {
    accessToken: 'lorem ipsum'
});

logger.log('hello', 'world');