import logger from './logger';
export default class FetchHelper {
    constructor(...options) {
        this.options = options[0];
    }
    send() {
        logger.info(this.options.application)
        return this.options;
    }
}