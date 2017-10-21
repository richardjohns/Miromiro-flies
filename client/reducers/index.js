import { combineReducers } from 'redux'

import cart from '../reducers/cart'
import users from '../reducers/users'
import beers from '../reducers/beers'

export default combineReducers({
    cart,
    users,
    beers
})
