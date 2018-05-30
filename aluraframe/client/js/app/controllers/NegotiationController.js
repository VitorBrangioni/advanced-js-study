class NegotiationController {

    constructor () {
        //bind: aponta this de querySelector para document
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQtd = $('#quantidade');
        this._inputValue = $('#valor');
        this._negotiations = new ListNegotiation();
        this._negotiationView = new NegotiationView($('#negotiationView'));
        this._updateView();
    }

    add(event) {
        // Nao deixar dar reload na pag
        event.preventDefault();

        let negotiation = this._createnegotiation();
        this._negotiations.add(negotiation);
        this._updateView();

        this._cleanForm();
    }

    _updateView () {
        let template = this._negotiationView.template(this._negotiations);
        this._negotiationView.update(template);
    }

    _createnegotiation() {
        let date = DateHelper.stringToDate(this._inputDate.value);
        return new Negotiation(date, this._inputQtd.value, this._inputValue.value);
    }

    _cleanForm () {
        this._inputDate.value = '';
        this._inputQtd.value = 1;
        this._inputValue.value = '';

        this._inputDate.focus();
    }
}