import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import CardPaymentDataGrid from './cardPaymentDataGrid.jsx'
import PaymentRequestDataGrid from './paymentRequestDataGrid.jsx'
import './style.css'

export default class AdminComponent extends React.Component {
    render() {
        return (
            <div className="adminMainContainer">
                <Router>
                    <div>
                        <ul className="payment-api__ul">
                            <li className="payment-api__li"><Link to="/CardPaymentDataGrid">Платежи с карты</Link></li>
                            <li className="payment-api__li"><Link to="/PaymentRequestDataGrid">Запрошенные платежи</Link></li>
                        </ul>
                        <Switch>
                            <Route path="/CardPaymentDataGrid" component={CardPaymentDataGrid} />
                            <Route path="/PaymentRequestDataGrid" component={PaymentRequestDataGrid} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}