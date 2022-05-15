import TYPES from '../types/home'

const initialState = {
  data: {}
}
const incCart = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.INCCART:
      return {
        ...state,
        data: action.data
      }

    default:
      return state
  }
}
export default incCart
