import remoteLogger from "@mrgrd56/remote-logger";

const logger = remoteLogger('http://localhost:3322', {
    accessToken: 'ecd356f4-ab2f-4ef2-b09f-ce60ff5aa74d'
});

logger.log('hello world');