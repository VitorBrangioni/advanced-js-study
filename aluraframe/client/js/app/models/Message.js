class Message {

    constructor(title = '', body = '') {
        this._title = title;
        this._body = body;
    }


    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get body() {
        return this._body;
    }

    set msg(body) {
        this._body = body;
    }
}