import React from 'react';
import { connect } from 'react-redux';
import { defaultAction, markUnsafePaymentAction } from "./redux/actions.jsx";

class CardPaymentDataGridComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: {
                column: 'CardNumber',
                prefix: ''
            },
            sortParams: {
                column: 'CardNumber',
                descendingOrder: false
            }
        };

        this.handleSearchColumnChange = this.handleSearchColumnChange.bind(this);
        this.handleSearchPrefixChange = this.handleSearchPrefixChange.bind(this);
        this.handleSortColumnChange = this.handleSortColumnChange.bind(this);
        this.handleUnsafePaymentClick = this.handleUnsafePaymentClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.selectCardPayments(this.state.searchParams, this.state.sortParams)
    }

    handleSearchColumnChange(e) {this.setState({searchParams: {...this.state.searchParams, column: e.target.value}})}
    handleSearchPrefixChange(e) {this.setState({searchParams: {...this.state.searchParams, prefix: e.target.value}})}
    handleSortColumnChange(e) {this.setState({sortParams: {...this.state.sortParams, column: e.target.value}})}
    handleUnsafePaymentClick(e) {this.props.markUnsafeCardPayment(e.target.id, !e.target.checked)}
    handleSubmit(event) {
        event.preventDefault();
        this.props.selectCardPayments(this.state.searchParams, this.state.sortParams);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="cardPaymentSearchColumn">Столбец поиска</label>
                    <select id="cardPaymentSearchColumn" onChange={this.handleSearchColumnChange} value={this.state.searchParams.column}>
                        <option value="CardNumber">Номер карты</option>
                        <option value="Sum">Сумма перевода</option>
                        <option value="Expiration">ММ/ГГ действия</option>
                        <option value="Cvc">CVC</option>
                        <option value="Comment">Комментарий</option>
                        <option value="Email">Почта</option>
                    </select>

                    <label htmlFor="cardPaymentPrefix">Поиск</label>
                    <input type="text" id="cardPaymentPrefix" onChange={this.handleSearchPrefixChange} value={this.state.searchParams.prefix}/>
                    </div>

                    <div>
                    <label htmlFor="cardPaymentSortColumn">Столбец сортировки</label>
                    <select id="cardPaymentSortColumn" onChange={this.handleSortColumnChange} value={this.state.sortParams.column}>
                        <option value="CardNumber">Номер карты</option>
                        <option value="Sum">Сумма перевода</option>
                        <option value="Expiration">ММ/ГГ действия</option>
                        <option value="Cvc">CVC</option>
                        <option value="Comment">Комментарий</option>
                        <option value="Email">Почта</option>
                    </select>
                    </div>

                    <div>
                    <input type="submit" value="Обновить"/>
                    </div>
                </form>

                <table>
                    <thead>
                        <tr>
                            <td>Номер карты</td>
                            <td>ММ/ГГ</td>
                            <td>CVC</td>
                            <td>Сумма перевода</td>
                            <td>Комментарий</td>
                            <td>Почта</td>
                            <td>Безопасность платежа</td>
                            <td>Отметьте галочками небезопасные платежи</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.reducer.data.map(record =>
                        <tr key={record.cardPaymentId}>
                            <td className={resolvePaymentClass(record)}>{record.cardNumber}</td>
                            <td className={resolvePaymentClass(record)}>{record.expiration}</td>
                            <td className={resolvePaymentClass(record)}>{record.cvc}</td>
                            <td className={resolvePaymentClass(record)}>{record.sum}</td>
                            <td className={resolvePaymentClass(record)}>{record.comment}</td>
                            <td className={resolvePaymentClass(record)}>{record.email}</td>
                            <td className={resolvePaymentClass(record)}>{record.isSafe ? "Безопасный" : "Небезопасный"}</td>
                            <td><input type="checkbox"
                                       id={record.cardPaymentId}
                                       defaultChecked={!record.isSafe}
                                       onClick={this.handleUnsafePaymentClick}/></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

let resolvePaymentClass = (record) => {
    return record.isSafe ? "safePaymentRow" : "unsafePaymentRow";
};

let api = (dispatch) => {
    return {
      selectCardPayments: (searchParams, sortParams) => {
	      console.log(window.constants);
            let query = window.constants.selectCardPayments +
                `?searchColumn=${searchParams.column}&prefix=${searchParams.prefix}&sortColumn=${sortParams.column}&descendingOrder=${sortParams.descendingOrder}`;

            dispatch(defaultAction(query));
        },
        markUnsafeCardPayment: (id, isSafe) => {
            dispatch(markUnsafePaymentAction(id, isSafe));
        }
    }
};

export default connect(state => state, api)(CardPaymentDataGridComponent)