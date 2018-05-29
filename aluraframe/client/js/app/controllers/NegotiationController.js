class NegotiationController {

    constructor () {
        //bind: aponta this de querySelector para document
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQtd = $('#quantidade');
        this._inputValue = $('#valor');
        this._negotiations = new ListNegotiation();
    }

    add(event) {
        // Nao deixar dar reload na pag
        event.preventDefault();

        let negotiation = this._createnegotiation();
        this._negotiations.add(negotiation);
    }

    _createnegotiation() {
        let date = DateHelper.stringToDate(this._inputDate.value);
        return new Negotiation(date, this._inputQtd, this._inputValue);
    }
}