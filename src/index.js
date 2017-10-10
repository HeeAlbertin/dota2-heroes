import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'

import App from './containers/app'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css'


ReactDOM.render(
	// com redux, renderiza com o provider
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
