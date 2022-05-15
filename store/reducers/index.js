import { combineReducers } from 'redux'

import userData from './data'
import userReduce from './home'
import dataInc from './increase'
import createOrder from './createorder'
import incCart from './inc'
import cart from './cart'
import createTableOrder from './tableorder'
import getOrder from './getorder'
import updateOrder from './updateorder'
import loginState from './login'

const rootReducer = combineReducers({
  reduce: userReduce,
  userData: userData,
  dataInc: dataInc,
  createOrder: createOrder,
  incCart: incCart,
  cart: cart,
  tableOrder: createTableOrder,
  getOrder: getOrder,
  updateOrder: updateOrder,
  loginState: loginState
})

export default rootReducer
