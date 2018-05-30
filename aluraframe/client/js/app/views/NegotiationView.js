class NegotiationView {

    constructor (element) {
        this._element = element;
    }

    template (model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>
                            DATE
                        </th>
                        <th>
                            QUANTITY
                        </th>
                        <th>
                            VALUE
                        </th>
                        <th>
                            VOLUME
                        </th>
                    </tr>
                </thead>
                <tbody>
                    ${model.negotiations.map( negotiation => 
                        `<tr>
                            <td>
                                ${DateHelper.dateToString(negotiation.date)}
                            </td>
                            <td>
                                ${negotiation.qt}
                            </td>
                            <td>
                                ${negotiation.value}
                            </td>
                            <td>
                                ${negotiation.volume}
                            </td>
                        </tr>`
                    ).join('')}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Sum</td>
                        <td>${model.negotiations.reduce((total, n) => total + n.volume, 0.0)}</td>
                    </tr>
                </tfoot>
            </table>
        `;
    }

    update (template) {
        this._element.innerHTML = template;
    }
}