import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from '../views/AppRouter'
import configureStore from '../store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    )
}

render(AppRouter)