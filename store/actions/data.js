import TYPES from '../types/data'
import { postApiData, getApiData } from '../../helper/network'

export const getData = () => async (dispatch, getState) => {
  dispatch({ type: TYPES.GETDATA })
  const url = 'http://203.170.129.189:4050/api/admin/list/menu'

  try {
    const responseData = await getApiData(url)

    if (responseData.data) {
      await dispatch({ type: TYPES.SUCCESS_GET_DATA, data: responseData.data })
    } else {
      dispatch({ type: TYPES.FAIL_GET_DATA })
    }
  } catch (err) {
    dispatch({ type: TYPES.FAIL_GET_DATA })
  }
}
