import React from 'react';
import { connect } from 'react-redux';
import { processPaymentAnyBankCard } from './paymentAnyBankCardActions.jsx'
import Input from '../../components/Input/input.jsx'
import InputInitData from './inputInitData.jsx'

class PaymentAnyBankCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            cardExpiration: '',
            cardCvc: '',
            transactionAmount: '',
            userComment: '',
            userEmail: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        let inputInfo = this.getInputInfo();
        let value = event.target.value;
        switch (event.target.id) {
            case inputInfo.cardNumber.id:
                this.setState({cardNumber: value});
                break;
            case inputInfo.cardExpiration.id:
                this.setState({cardExpiration: value});
                break;
            case inputInfo.cardCvc.id:
                this.setState({cardCvc: value});
                break;
            case inputInfo.transactionAmount.id:
                this.setState({transactionAmount: value});
                break;
            case inputInfo.userComment.id:
                this.setState({userComment: value});
                break;
            case inputInfo.userEmail.id:
                this.setState({userEmail: value});
                break;
        }
    }

    handleSubmit(event) {
        this.props.processPaymentAnyBankCard(
            this.state.cardNumber,
            this.state.cardExpiration,
            this.state.cardCvc,
            this.state.transactionAmount,
            this.state.userComment,
            this.state.userEmail);
        event.preventDefault();
    }

    render() {
        return (
            <div id="paymentAnyBankCard">
                <form onSubmit={this.handleSubmit}>
                    {this.initInputComponents().map(function(x) {return x;})}
                    <input type="submit" value="Заплатить"/>
                </form>
            </div>
        );
    }

    initInputComponents() {
        let inputInfo = this.getInputInfo();
        let inputs = [];
        InputInitData.forEach((value, index, array) => {
            value.inputValue = inputInfo[value.inputId].value;
            value.inputOnChangeHandler = this.handleInputChange;
            inputs[index] = <Input key={value.key} props={value}/>
        });
        return inputs;
    }

    getInputInfo() {
        return {
            cardNumber: {id: 'cardNumber', value: this.state.cardNumber},
            cardExpiration: {id: 'cardExpiration', value: this.state.cardExpiration},
            cardCvc: {id: 'cardCvc', value: this.state.cardCvc},
            transactionAmount: {id: 'transactionAmount', value: this.state.transactionAmount},
            userComment: {id: 'userComment', value: this.state.userComment},
            userEmail: {id: 'userEmail', value: this.state.userEmail}
        }
    }
}

let mapProps = (state) => {
    return {
        r: state.pdata
    }
};

let mapDispatch = (dispatch) => {
    return {
        processPaymentAnyBankCard:
            (cardNumber, cardExpiration, cardCvc, transactionAmount, userComment, userEmail) =>
                dispatch(processPaymentAnyBankCard(cardNumber, cardExpiration, cardCvc, transactionAmount, userComment, userEmail))
    }
};

export default connect(mapProps, mapDispatch)(PaymentAnyBankCardComponent)