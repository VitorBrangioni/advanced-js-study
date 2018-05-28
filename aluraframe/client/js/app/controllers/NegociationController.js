class NegociationController {

    constructor () {
        //bind: aponta this de querySelector para document
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQtd = $('#quantidade');
        this._inputValue = $('#valor');
    }

    add(event) {
        // Nao deixar dar reload na pag
        event.preventDefault();

        // using spread operator and map
        let date = new Date(...
            this._inputDate.value.split('-')
                .map(function (data, i) {
                    return data - i % 2;
                })
        );

        console.log(date);

    }
}