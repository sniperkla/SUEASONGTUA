
import TYPES from '../types/cart'

export const clearCart = () => async (dispatch, getState) => {
  dispatch({ type: TYPES.CLEAR_CART })
}

export const setDataCart = (dataCart) => async (dispatch, getState) => {
  dispatch({ type: TYPES.SET_DATA_CART, data: dataCart })
}
