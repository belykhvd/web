import React from 'react';
import { connect } from 'react-redux';
import { sendAction,returnToInitialState } from "../../redux/actions.jsx";
import Input from '../../components/Input/input.jsx'
import InputInitData from './inputInitData.jsx'
import {REQUEST_FAIL, REQUEST_SUCCESS} from "../../redux/states.jsx";

class CardPaymentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state['validators'] = {};
        InputInitData.forEach((v) => {
            this.state[v.inputId] = '';
            this.state.validators[v.inputId] = v.validator;
        });
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReturnToInitialState = this.handleReturnToInitialState.bind(this);
        this.handleReturnAfterError = this.handleReturnAfterError.bind(this);
    }

    handleInputChange(e) {this.setState({[e.target.id]: e.target.value})}
    handleSubmit(event) {
        event.preventDefault();
        this.props.processCardPayment(this.state);
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

    isFormValid() {
        for (let validatorKey in this.state.validators) {
            if (this.state.validators.hasOwnProperty(validatorKey)) {
                let validator = this.state.validators[validatorKey];
                if (validator !== undefined && !validator(this.state[validatorKey]).isSuccess) {
                    return false;
                }
            }
        }

        return true;
    }

    render() {
        switch (this.props.state) {
            case REQUEST_SUCCESS:
                return (
                    <div>
                        <p>Запрос успешно выполнен ✅</p>
                        <p><a href="#" onClick={this.handleReturnToInitialState}>оплатить следующий счет</a></p>
                    </div>
                );
            case REQUEST_FAIL:
                return (
                    <div>
                        <p>❌ Возникла ошибка</p>
                        <p>{this.props.error}</p>
                        <p><a href="#" onClick={this.handleReturnAfterError}>отредактировать форму</a></p>
                    </div>
                );
            default:
                return (
                    <div id="cardPayment">
                        <form onSubmit={this.handleSubmit}>
                            {this.initInputComponents()}
                            <input type="submit" value="Заплатить" disabled={!this.isFormValid()}/>
                        </form>
                    </div>
                );
        }
    }

    initInputComponents() {
        let inputs = [];
        InputInitData.forEach((value, index) => {
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
        state: state.reducer.state,
        data: state.reducer.data,
        error: state.reducer.error
    }
};

let api = dispatch => {
    return {
        processCardPayment: data => dispatch(sendAction(window.constants.processCardPayment, data, '')),
        returnToInitialState: () => dispatch(returnToInitialState())
    }
};

export default connect(mapProps, api)(CardPaymentComponent)