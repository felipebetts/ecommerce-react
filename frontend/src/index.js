import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './main/App'

import storeConfig from './store/storeConfig'

const store = storeConfig()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)