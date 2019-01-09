import React from 'react';
import { connect } from 'react-redux';
import { defaultAction } from "./redux/actions.jsx";

class PaymentRequestDataGridComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: {
                column: 'Inn',
                prefix: ''
            },
            sortParams: {
                column: 'Inn',
                descendingOrder: false
            }
        };

        this.handleSearchColumnChange = this.handleSearchColumnChange.bind(this);
        this.handleSearchPrefixChange = this.handleSearchPrefixChange.bind(this);
        this.handleSortColumnChange = this.handleSortColumnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.selectPaymentRequests(this.state.searchParams, this.state.sortParams)
    }

    handleSearchColumnChange(e) {this.setState({searchParams: {...this.state.searchParams, column: e.target.value}})}
    handleSearchPrefixChange(e) {this.setState({searchParams: {...this.state.searchParams, prefix: e.target.value}})}
    handleSortColumnChange(e) {this.setState({sortParams: {...this.state.sortParams, column: e.target.value}})}
    handleSubmit(event) {
        event.preventDefault();
        this.props.selectPaymentRequests(this.state.searchParams, this.state.sortParams);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="paymentRequestSearchColumn">Столбец поиска</label>
                        <select id="paymentRequestSearchColumn" onChange={this.handleSearchColumnChange} value={this.state.searchParams.column}>
                            <option value="Inn">ИНН</option>
                            <option value="Bic">БИК</option>
                            <option value="AccountNumber">Номер счета</option>
                            <option value="Vat">НДС</option>
                            <option value="Sum">Сумма</option>
                            <option value="Phone">Номер телефона</option>
                            <option value="Email">Почта</option>
                        </select>

                        <label htmlFor="paymentRequestPrefix">Поиск</label>
                        <input type="text" id="paymentRequestPrefix" onChange={this.handleSearchPrefixChange} value={this.state.searchParams.prefix}/>
                    </div>

                    <div>
                        <label htmlFor="paymentRequestSortColumn">Столбец сортировки</label>
                        <select id="paymentRequestSortColumn" onChange={this.handleSortColumnChange} value={this.state.sortParams.column}>
                            <option value="Inn">ИНН</option>
                            <option value="Bic">БИК</option>
                            <option value="AccountNumber">Номер счета</option>
                            <option value="Vat">НДС</option>
                            <option value="Sum">Сумма</option>
                            <option value="Phone">Номер телефона</option>
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
                        <td>ИНН</td>
                        <td>БИК</td>
                        <td>Номер счета</td>
                        <td>НДС</td>
                        <td>Сумма</td>
                        <td>Номер телефона</td>
                        <td>Почта</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.reducer.data.map(record =>
                        <tr>
                            <td>{record.inn}</td>
                            <td>{record.bic}</td>
                            <td>{record.accountNumber}</td>
                            <td>{record.vat}</td>
                            <td>{record.sum}</td>
                            <td>{record.phone}</td>
                            <td>{record.email}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

let api = (dispatch) => {
    return {
        selectPaymentRequests: (searchParams, sortParams) => {
            let query = window.constants.selectPaymentRequests +
                `?searchColumn=${searchParams.column}&prefix=${searchParams.prefix}&sortColumn=${sortParams.column}&descendingOrder=${sortParams.descendingOrder}`;

            dispatch(defaultAction(query));
        }
    }
};

export default connect(state => state, api)(PaymentRequestDataGridComponent)