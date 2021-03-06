
class Negotiation {

    constructor (date, qt, value) {
        this._date = new Date(date.getTime());
        this._qt = qt;
        this._value = value;

        // congela objeto superficialmente
        Object.freeze(this);
    }

    get date () {
        return new Date(this._date.getTime());
    }

    get qt () {
        return this._qt;
    }

    get value () {
        return this._value;
    }

    get volume () {
        return this._value * this._qt;
    }

} 