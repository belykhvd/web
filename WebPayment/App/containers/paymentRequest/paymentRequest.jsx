import React from 'react';
import { connect } from 'react-redux';
import { processPaymentRequest } from './paymentRequestActions.jsx'
import Input from '../../components/Input/input.jsx'
import InputInitData from './inputInitData.jsx'

class PaymentAnyBankCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        InputInitData.forEach((v, i, a) => {
           this.state[v.inputId] = ''
        });
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        let diff = {};
        diff[event.target.id] = event.target.value;
        this.setState(diff);
    }

    handleSubmit(event) {
        this.props.processPaymentRequest(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div id="paymentRequest">
                <form onSubmit={this.handleSubmit}>
                    {this.initInputComponents()}
                    <input type="submit" value="Создать платеж"/>
                </form>
            </div>
        );
    }

    initInputComponents() {
        let inputs = [];
        InputInitData.forEach((value, index, array) => {
            value.inputValue = this.state[value.inputId];
            value.inputOnChangeHandler = this.handleInputChange;
            inputs[index] = <Input key={value.key} props={value}/>
        });
        return inputs;
    }
}

let mapProps = (state) => {
    return {
        r: state.pdata
    }
};

let mapDispatch = (dispatch) => {
    return {
        processPaymentRequest: (data) => dispatch(processPaymentRequest(data))
    }
};

export default connect(mapProps, mapDispatch)(PaymentAnyBankCardComponent)