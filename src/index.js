import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/app'
/* REDUX IMPORTS */
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
/* END REDUX IMPORTS */

import appReducers from './redux/reducers/reducers'

import registerServiceWorker from './registerServiceWorker'

/* STYLES IMPORTS */
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css'
/* END STYLES IMPORTS */

const enhancer = compose (
	applyMiddleware(
		thunk
	)
)

const store = createStore(appReducers, enhancer)

ReactDOM.render(
	// com redux, renderiza com o provider
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker()
