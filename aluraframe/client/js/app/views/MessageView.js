class MessageView extends View {

    constructor (element) {
        super(element);
    }

    template (model) {
        return (model.title && model.body) ?
            `<div class="alert alert-success">
                <strong>${model.title}</strong> ${model.body}
            </div>`: null;
    }
}