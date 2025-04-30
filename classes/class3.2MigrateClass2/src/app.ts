import { buildLogger } from './plugins/logger.plugin';

const logger = buildLogger(`app`);

logger.log(`Hello World Diego`);
logger.error(`Error linea`);
