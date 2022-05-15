import TYPES from '../types/getorder'

const initialState = {
  data: [],
  isLoading: true,
  getsError: '',
  tokenAll: []
}
const getOrder = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_GET_ORDER:
      return {
        ...state,
        isLoading: false
      }
    case TYPES.SUCCESS_GET_ORDER:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        tokenAll: action.tokenall
      }
    case TYPES.FAIL_GET_ORDER:
      return {
        ...state,
        isLoading: false,
        getsError: action.getsError
      }
    default:
      return state
  }
}
export default getOrder
