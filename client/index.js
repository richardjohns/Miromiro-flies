import React from 'react'
import ReactDOM from 'react-dom'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import reducers from './reducers'
import { createStore } from 'redux'

import App from './components/App'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// Note the store is set here, taking the combined reducers.

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </Provider >,
    document.getElementById('app')
  )
})
