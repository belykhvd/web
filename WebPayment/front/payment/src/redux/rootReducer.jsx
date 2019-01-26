import { combineReducers } from 'redux'
import reducer from './reducer.jsx'
import defaultReducer from './reduxReducer.jsx'

export default combineReducers({
    reducer,
    defaultReducer
})