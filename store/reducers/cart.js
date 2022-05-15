import TYPES from '../types/cart'

const initialState = {
  data: [],
  isLoading: false
}
const userReduce = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_DATA_CART:
      return {
        ...state,
        data: action.data
      }

    case TYPES.CLEAR_CART:
      return {
        ...state,
        data: []
      }
    default:
      return state
  }
}
export default userReduce
