import React from 'react'
import '../Input/style.css'

export default class SelectComponent extends React.Component {
    render() {
        const {props} = this.props;
        return (
            <div className="payment-input">
                <label htmlFor={props.inputId} className="payment-input__label">{props.labelText}</label>
                <select id = {props.inputId}
                        value = {props.inputValue}
                        onChange = {props.inputOnChangeHandler}>
                    {props.inputValues.map((v, i) => <option key={props.optionKeys[i]}>{v}</option>)}
                </select>
            </div>
        )
    }
}