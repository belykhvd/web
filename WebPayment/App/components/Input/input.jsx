import React from 'react'
import './style.css'


export default class InputComponent extends React.Component {
    render() {
        const {props} = this.props;
        return (
            <div className="payment-input">
                <label htmlFor={props.inputId} className="payment-input__label">{props.labelText}</label>
                <input type = "text"
                       className = "payment-input__input"
                       id = {props.inputId}
                       value = {props.inputValue}
                       onChange = {props.inputOnChangeHandler}
                       placeholder = {props.inputPlaceholder}
                       maxLength = {props.inputMaxLength}
                       required = {props.inputRequired}
                       autoComplete = "off" />
            </div>
        )
    }
}