import { combineReducers } from 'redux'
import reducer from './reducer.jsx'
import defaultReducer from '../containers/paymentRequest/reduxReducer.jsx'

export default combineReducers({
    reducer,
    defaultReducer
})