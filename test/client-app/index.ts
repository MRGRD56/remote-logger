import remoteLogger from "@mrgrd56/remote-logger";

const logger = remoteLogger('http://localhost:33223', {
    accessToken: 'ecd356f4-ab2f-4ef2-b09f-ce60ff5aa74d_'
});

logger.log('hello world');
logger.warn('I warn ya one last time!');
logger.error('an error occurred ＼（〇_ｏ）／', { code: 54273229 });
logger.debug([4, 2], 'some debug message')