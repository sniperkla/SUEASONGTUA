import TYPES from '../types/tableorder'

const initialState = {
  tableOrders: [],
  loading: true,
  getsError: null
}
const createTableOrder = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_TABLE_ORDER:
      return {
        ...state,
        loading: true
      }
    case TYPES.SUCCESS_TABLE_ORDER:
      return {
        ...state,
        loading: false,
        tableOrders: action.tableOrders
      }
    case TYPES.FAIL_TABLE_ORDER:
      return {
        ...state,
        loading: false,
        getsError: action.getsError
      }
    default:
      return state
  }
}
export default createTableOrder
