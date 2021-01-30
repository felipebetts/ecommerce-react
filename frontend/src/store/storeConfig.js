import { createStore, combineReducers } from 'redux'

import cart from './reducers/cart'
import products from './reducers/products'
import drawer from './reducers/drawer'

const reducers = combineReducers({
    cart,
    products,
    drawer 
})

const storeConfig = () => createStore(reducers)

export default storeConfig