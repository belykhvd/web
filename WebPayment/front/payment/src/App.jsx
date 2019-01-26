import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import CardPayment from "./containers/cardPayment/cardPayment.jsx";
import BankPayment from "./containers/bankPayment/bankPayment.jsx"
import PaymentRequest from "./containers/paymentRequest/paymentRequest.jsx";
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleListItemChosen = this.handleListItemChosen.bind(this);
    }

    handleListItemChosen(event) {
        if (this.refs.cardPaymentRef !== undefined)
            this.refs.cardPaymentRef.className = "payment-api__li";
        if (this.refs.bankPaymentRef !== undefined)
            this.refs.bankPaymentRef.className = "payment-api__li";
        if (this.refs.paymentRequestRef !== undefined)
            this.refs.paymentRequestRef.className = "payment-api__li";
        event.target.parentNode.className = "li-selected";
    }

  render() {
    return (
      <div className="mainContainer">
        <div className="mainHeader">
          <div className="headerInfo">
            <p><b>Индивидуальный предприниматель Швецова Мария Валерьевна</b></p>
            <p>+7 919 3977777
              <a href="https://www.mary.com">www.mary.com</a>
              <a href="mailto:mary@tochka.com">mary@tochka.com</a></p>
            <p>Информация о компании</p>
            <p>Показать реквизиты</p>
          </div>
          <div className="headerPhoto">
          </div>
        </div>
        <div className="mainApi">

            <Router>
                <div>
                    <ul className="paymentApi-ul">
                        <li className="li-selected" ref="cardPaymentRef" onClick={this.handleListItemChosen}><Link to="/CardPayment">Заплатить</Link></li>
                        <li className="payment-api__li" ref="paymentRequestRef" onClick={this.handleListItemChosen}><Link to="/PaymentRequest">Запросить платеж</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/CardPayment" component={PaymentMiniRouter} />
                        <Route path="/PaymentRequest" component={PaymentRequest} />
                        <Route path="/" component={PaymentMiniRouter} />
                    </Switch>
                </div>
            </Router>


        </div>
        <div className="mainFooter">
          <p><b>О компании Индивидуальный предприниматель Швецова Мария Валерьевна</b></p>
          <div className="footerAd" id="ad1">
          </div>
          <div className="footerAd" id="ad2">
          </div>
          <div className="footerAd" id="ad3">
          </div>
        </div>
      </div>
    )
  }
}

class PaymentMiniRouter extends React.Component {
    constructor(props) {
        super(props);
        this.handleListItemChosen = this.handleListItemChosen.bind(this);
    }

    handleListItemChosen(event) {
        if (this.refs.cardPaymentRef !== undefined)
            this.refs.cardPaymentRef.className = "payment-api__li";
        if (this.refs.bankPaymentRef !== undefined)
            this.refs.bankPaymentRef.className = "payment-api__li";
        if (this.refs.paymentRequestRef !== undefined)
            this.refs.paymentRequestRef.className = "payment-api__li";
        event.target.parentNode.className = "li-selected";
    }

    render() {
        return (
            <Router>
                <div>
                    <ul className="paymentApi-ul">
                        <li className="li-selected" ref="cardPaymentRef" onClick={this.handleListItemChosen}><Link to="/CardPayment">C карты любого банка</Link></li>
                        <li className="payment-api__li" ref="bankPaymentRef" onClick={this.handleListItemChosen}><Link to="/BankPayment">Из своего интернет-банка</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/CardPayment" component={CardPayment} />
                        <Route path="/BankPayment" component={BankPayment} />
                        <Route path="/" component={CardPayment} />
                    </Switch>
                </div>
            </Router>
        )
    }
}