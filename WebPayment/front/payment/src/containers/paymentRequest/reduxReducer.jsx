import {INITIAL_STATE,SUBMIT_SUCCESS_STATE,SUBMIT_ERROR_STATE} from "./reduxStates.jsx";

const initialState = {stateDescriptor: INITIAL_STATE, data: null, error: null};

export default function defaultReducer(state = initialState, action) {
    switch (action.type) {
        case INITIAL_STATE:
            return initialState;

        case SUBMIT_SUCCESS_STATE:
            return { ...state, stateDescriptor: SUBMIT_SUCCESS_STATE, data: action.data, error: null };

        case SUBMIT_ERROR_STATE:
            return { ...state, stateDescriptor: SUBMIT_ERROR_STATE, error: action.error };

        default:
            return state;
    }
}