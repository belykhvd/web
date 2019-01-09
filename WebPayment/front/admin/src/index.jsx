import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/rootReducer.jsx'
import AdminComponent from './admin.jsx'
import './style.css'

function configureStore(initialState) {
	return createStore(rootReducer, initialState, applyMiddleware(thunk))
}

const store = configureStore();

render (
	<Provider store={store}>
		<AdminComponent />
	</Provider>,
	document.getElementById('root')
);