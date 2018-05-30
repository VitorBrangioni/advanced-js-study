class View {
    constructor (element) {
        this._element = element;
    }

    template (model) {
        throw new Error('Eh necessario implementar template');
    }

    update (template) {
        this._element.innerHTML = template;
    }
}