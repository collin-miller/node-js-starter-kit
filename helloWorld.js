export default class HelloWorld {
    constructor(options) {
        this.message = options.message;
        this.logger = options.logger || console
    }
    writeToLog() {
        this.logger.info(this.message);
    }
}