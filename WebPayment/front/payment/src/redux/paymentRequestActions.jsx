import "isomorphic-fetch"
import {INITIAL_STATE, SUBMIT_ERROR_STATE, SUBMIT_SUCCESS_STATE} from "./reduxStates.jsx";

export function handleOnFulfilled(json) {
    return json.isSuccess
        ? {type: SUBMIT_SUCCESS_STATE, data: json.data}
        : {type: SUBMIT_ERROR_STATE, error: json.error}
}

export function handleOnRejected(ex) {
    return {type: SUBMIT_ERROR_STATE, error: ex}
}

export function processPaymentRequest(data)
{
    return (dispatch) => {
        let queryTrailer = '?';
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let backendKey = key.charAt(14).toLowerCase() + key.substring(15);
                queryTrailer += backendKey + '=' + data[key] + '&';
            }
        }
        queryTrailer = queryTrailer.substr(0, queryTrailer.length - 1);

        fetch(window.constants.processPaymentRequest + queryTrailer)
            .then(response => response.json())
            .then(responseJson => dispatch(handleOnFulfilled(responseJson)))
            .catch(ex => dispatch(handleOnRejected(ex)));
    }
}

export function returnToInitialState() {
    return (dispatch) => dispatch({type: INITIAL_STATE})
}