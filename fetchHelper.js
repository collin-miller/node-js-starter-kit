export default class FetchHelper {
    constructor(...options) {
        this.options = options[0];
    }
    send() {
        return this.options;
    }
}