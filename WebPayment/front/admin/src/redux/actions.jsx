import "isomorphic-fetch"
import {MARK_UNSAFE_PAYMENT_SUCCESS, REQUEST_FAIL, REQUEST_SUCCESS} from "./states.jsx";

export function handleOnFulfilled(json) {
    return json.isSuccess
        ? {type: REQUEST_SUCCESS, data: json.data, error: null}
        : {type: REQUEST_FAIL, error: json.error}
}

export function handleOnRejected(ex) {
    return {type: REQUEST_FAIL, error: ex}
}

export function defaultAction(query) {
	console.log(window.constants);
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