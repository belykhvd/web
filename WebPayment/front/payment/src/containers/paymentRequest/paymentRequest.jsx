import React from 'react';
import { connect } from 'react-redux';
import { processPaymentRequest, returnToInitialState } from './paymentRequestActions.jsx'
import Input from '../../components/Input/input.jsx'
import InputInitData from './inputInitData.jsx'
import {SUBMIT_SUCCESS_STATE,SUBMIT_ERROR_STATE} from "./reduxStates.jsx";

class PaymentRequestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        InputInitData.forEach((v) => {
           this.state[v.inputId] = ''
        });
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReturnToInitialState = this.handleReturnToInitialState.bind(this);
        this.handleReturnAfterError = this.handleReturnAfterError.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.paymentRequestPhone = this.state.paymentRequestPhone.replace('+', '%2B');
        this.props.processPaymentRequest(this.state);
    }

    handleReturnToInitialState() {
        let stateProps = {};
        InputInitData.forEach(v => {
            stateProps[v.inputId] = '';
        });
        this.setState(stateProps);
        this.props.returnToInitialState();
    }
    handleReturnAfterError() {
        this.props.returnToInitialState();
    }
    
    render() {
        switch (this.props.stateDescriptor) {
            case SUBMIT_SUCCESS_STATE:
                return (
                  <div>
                      <p>Запрос успешно выполнен ✅</p>
                      <p><a href="#" onClick={this.handleReturnToInitialState}>запросить другой платеж</a></p>
                  </div>
                );
            case SUBMIT_ERROR_STATE:
                return (
                  <div>
                      <p>❌ Возникла ошибка</p>
                      <p>{this.props.error}</p>
                      <p><a href="#" onClick={this.handleReturnAfterError}>отредактировать форму</a></p>
                  </div>
                );
            default:
                return (
                    <div id="paymentRequest">
                        <form onSubmit={this.handleSubmit}>
                            {this.initInputComponents()}
                            <input type="submit" value="Создать платеж"/>
                        </form>
                    </div>
                );
        }

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

let buildStateFromInitData = () => {
    let stateProps = {};
    InputInitData.forEach(v => {
        stateProps[v.inputId] = '';
    });
    return stateProps;
};

let mapProps = (state) => {
    return {
        stateDescriptor: state.defaultReducer.stateDescriptor,
        data: state.defaultReducer.data,
        error: state.defaultReducer.error
    }
};

let api = (dispatch) => {
    return {
        processPaymentRequest: (data) => dispatch(processPaymentRequest(data)),
        returnToInitialState: () => dispatch(returnToInitialState())
    }
};

export default connect(mapProps, api)(PaymentRequestComponent)