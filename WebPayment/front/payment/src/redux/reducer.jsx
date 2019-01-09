import {REQUEST_SUCCESS, REQUEST_FAIL, MARK_UNSAFE_PAYMENT_SUCCESS} from "./states.jsx";

const initialState = { data: [], paymentId: null, error: null };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_SUCCESS:
            return { ...state, data: action.data, error: null };

        case REQUEST_FAIL:
            return { ...state, data: [], error: action.error };

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