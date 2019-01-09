import React from 'react';
import { connect } from 'react-redux';
import { sendAction } from "../../redux/actions.jsx";
import Input from '../../components/Input/input.jsx'
import InputInitData from './inputInitData.jsx'

class CardPaymentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        InputInitData.forEach((v) => {
            this.state[v.inputId] = ''
        });
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {this.setState({[e.target.id]: e.target.value})}
    handleSubmit(event) {
        event.preventDefault();
        this.props.processCardPayment(this.state);
    }

    render() {
        return (
            <div id="cardPayment">
                <form onSubmit={this.handleSubmit}>
                    {this.initInputComponents()}
                    <input type="submit" value="Заплатить"/>
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

let buildStateFromInitData = () => {
    let stateProps = {};
    InputInitData.forEach(v => {
        stateProps[v.inputId] = '';
    });
    return stateProps;
};


let api = dispatch => {
    return {
        processCardPayment: data => dispatch(sendAction(window.constants.processCardPayment, data, ''))
    }
};

export default connect(state => state, api)(CardPaymentComponent)