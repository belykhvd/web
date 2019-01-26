import {INITIAL_STATE, REQUEST_SUCCESS, REQUEST_FAIL, MARK_UNSAFE_PAYMENT_SUCCESS} from "./states.jsx";

const initialState = { state: '', data: [], paymentId: null, error: null };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INITIAL_STATE:
            return initialState;

        case REQUEST_SUCCESS:
            return { ...state, state: REQUEST_SUCCESS, data: action.data, error: null };

        case REQUEST_FAIL:
            return { ...state, state: REQUEST_FAIL, data: [], error: action.error };

        case MARK_UNSAFE_PAYMENT_SUCCESS:
            state.data.forEach(v => {
               if (v.cardPaymentId === action.cardPaymentId)
                   v.isSafe = action.isSafe;
            });
            return { ...state };

        default:
            return state;
    }
}