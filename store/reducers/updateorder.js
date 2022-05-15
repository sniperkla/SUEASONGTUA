import TYPES from '../types/updateorders'

const initialState = {
  data: [],
  isLoadingOrder: false,
  getsError: ''
}
const updateOrder = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_UPDATE_ORDER:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.SUCCESS_UPDATE_ORDER:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case TYPES.FAIL_UPDATE_ORDER:
      return {
        ...state,
        isLoading: false,
        getsError: action.getsError
      }
    default:
      return state
  }
}
export default updateOrder
