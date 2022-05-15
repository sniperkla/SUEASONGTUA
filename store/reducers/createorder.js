import TYPES from '../types/createorder'

const initialState = {
  data: [],
  isLoadingOrder: false,
  getsError: ''
}
const createOrder = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_CREATE_ORDER:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.SUCCESS_CREATE_ORDER:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case TYPES.FAIL_CREATE_ORDER:
      return {
        ...state,
        isLoading: false,
        getsError: action.getsError
      }
    default:
      return state
  }
}
export default createOrder
