class NegotiationController {

    constructor () {
        //bind: aponta this de querySelector para document
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQtd = $('#quantidade');
        this._inputValue = $('#valor');
        this._negotiations = new ListNegotiation();
        this._negotiationView = new NegotiationView($('#negotiationView'));
        this._messageView = new MessageView($('#messageView'));
        this._updateView();
    }

    add(event) {
        // Nao deixar dar reload na pag
        event.preventDefault();

        let negotiation = this._createnegotiation();
        this._negotiations.add(negotiation);
        this._updateView('Negotiation Created!', 'Congratulations! You are not stupid.. :)');

        this._cleanForm();
    }

    _updateView (msgTitle = '', msgBody = '') {
        let negotiationsView = this._negotiationView.template(this._negotiations);
        let messageView = this._messageView.template(new Message(msgTitle, msgBody));
        this._negotiationView.update(negotiationsView);
        this._messageView.update(messageView);
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