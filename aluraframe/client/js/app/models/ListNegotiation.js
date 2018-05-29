class ListNegotiation {

    constructor() {
        this._negotiations = [];
    }

    add (negotiation) {
        if (!this._isNegotiation(negotiation)) {
            throw new Error('Only allowed add a Negotiation instance')
        }
        this._negotiations.push(negotiation);
    }

    get negotiations () {
        return [].concat(negotiations);
    }

    _isNegotiation (data) {
        return (data instanceof Negotiation) ? true : false;
    }


}