import "isomorphic-fetch"
import {INITIAL_STATE, MARK_UNSAFE_PAYMENT_SUCCESS, REQUEST_FAIL, REQUEST_SUCCESS} from "./states.jsx";

export function handleOnFulfilled(json) {
    return json.isSuccess
        ? {type: REQUEST_SUCCESS, data: json.data, error: null}
        : {type: REQUEST_FAIL, error: json.error}
}

export function handleOnRejected(ex) {
    return {type: REQUEST_FAIL, error: ex}
}

export function defaultAction(query)
{
    return (dispatch) => {
        fetch(query)
            .then(response => response.json())
            .then(json => dispatch(handleOnFulfilled(json)))
            .catch(ex => dispatch(handleOnRejected(ex)));
    }
}

export function markUnsafePaymentOnFulfilled(json, cardPaymentId, isSafe) {
    return json.isSuccess
        ? {type: MARK_UNSAFE_PAYMENT_SUCCESS, cardPaymentId: cardPaymentId, isSafe: isSafe}
        : {type: REQUEST_FAIL, error: json.error}
}

export function markUnsafePaymentAction(cardPaymentId, isSafe) {
    return dispatch => {
        let query =  window.constants.markUnsafeCardPayment + `?paymentId=${cardPaymentId}&isSafe=${isSafe}`;
        fetch(query)
            .then(r => r.json())
            .then(json => dispatch(markUnsafePaymentOnFulfilled(json, cardPaymentId, isSafe)))
            .catch(ex => dispatch(handleOnRejected(ex)))
    }
}

let download = require('./download.js');
export function downloadFileAction(apiMethod, data, idPrefix) {
    return dispatch => {
        let offset = idPrefix.length;
        let queryTrailer = '?';
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let backendKey = key.charAt(offset).toLowerCase() + key.substring(offset + 1);
                if (key !== 'vat')
                    queryTrailer += `${backendKey}=${data[key]}&`;
                else
                    queryTrailer += `${backendKey}=${preprocessVat(data[key])}&`;
            }
        }
        queryTrailer = queryTrailer.substr(0, queryTrailer.length - 1);
        fetch(apiMethod + queryTrailer)
            .then(r => r.blob())
            .then(blob => download(blob, 'Выписка.txt'))
            .then(() => dispatch(handleOnFulfilled({isSuccess: true})))
            .catch(ex => dispatch(handleOnRejected(ex)));
    }
}

export function preprocessVat(vat) {
    switch (vat) {
        case 'НДС 10%':
            return 10;
        case 'НДС 18%':
            return 18;
        default:
            return 0;
    }
}

export function sendAction(apiMethod, data, idPrefix) {
    return dispatch => {
        let offset = idPrefix.length;
        let queryTrailer = '?';
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let backendKey = key.charAt(offset).toLowerCase() + key.substring(offset + 1);
                queryTrailer += `${backendKey}=${data[key]}&`;
            }
        }
        queryTrailer = queryTrailer.substr(0, queryTrailer.length - 1);
        fetch(apiMethod + queryTrailer)
            .then(response => response.json())
            .then(responseJson => dispatch(handleOnFulfilled(responseJson)))
            .catch(ex => dispatch(handleOnRejected(ex)));
    }
}

export function returnToInitialState() {
    return (dispatch) => dispatch({type: INITIAL_STATE})
}