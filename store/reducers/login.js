import TYPES from '../types/login'

const initialState = {
  data: [],
  loading: false,
  getsError: ''
}
const loginState = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SUCCESS_LOGIN:
      return {
        ...state,
        data: action.data,
        loading: true
      }
    case TYPES.FAIL_LOGIN:
      return {
        ...state,
        data: [],
        getsError: action.getsError
      }
    default:
      return state
  }
}
export default loginState
