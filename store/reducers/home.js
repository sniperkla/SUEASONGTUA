import TYPES from '../types/home'

const initialState = {
  data: ''
}
const userReduce = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TEST:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}
export default userReduce
