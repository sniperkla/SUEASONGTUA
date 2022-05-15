import TYPES from '../types/data'


const initialState = {
  data: [],
  loading:false
}
const dataInc = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SUCCESS_DATA_INC:
      return {
        ...state,
        data: action.data,
        loading: true
      }
    case TYPES.FAIL_GET_DATA:
      return {
        ...state,
        data: [],
        loading: false
      }
    default:
      return state
  }
}
export default dataInc
