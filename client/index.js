import React from 'react'
import ReactDOM from 'react-dom'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, IndexRoute, browserHistory, Switch } from 'react-router-dom'

import reducers from './reducers'
import { createStore } from 'redux'

import App from './components/App'
import Beers from './components/Beers'
import NoMatch from './components/NoMatch'
import Header from './components/Header'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// Note the store is set here, taking the combined reducers.

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
      {/* <Switch> */}
        <div>
        <Route path='/' component={App} />
        {/* <Route component={NoMatch} /> */}
        </div>
        {/* </Switch> */}
      </Router>
    </Provider >,
    document.getElementById('app')
  )
})
