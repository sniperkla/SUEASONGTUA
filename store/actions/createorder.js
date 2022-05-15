import TYPES from '../types/createorder'
import { postApiData } from '../../helper/network'
import { url } from '../../config/url'
import axios from 'axios'

export const getCreateOrder = (result) => async (dispatch, getState) => {
  const urlLink = url.createOrder
  dispatch({ type: TYPES.START_CREATE_ORDER })
  axios
    .post(urlLink, result)
    .then(function (response) {
      dispatch({
        type: TYPES.SUCCESS_CREATE_ORDER,
        data: response.data.data
      })
      localStorage.setItem('dupeorder', 'true')
      localStorage.setItem('tokenexpire', 'false')
    })
    .catch(function (error) {
      if (error.response.data.message === 'order not have') {
        localStorage.setItem('dupeorder', 'true')
        localStorage.setItem('tokenexpire', 'false')
        // dispatch({
        //   type: TYPES.FAIL_CREATE_ORDER,
        //   getsError: error.response.data.message
        // })
      } else if (error.response.data.message === 'Token is expired') {
        localStorage.setItem('tokenexpire', 'true')
        localStorage.setItem('dupeorder', 'false')
      }
    })
  // dispatch({ type: TYPES.START_CREATE_ORDER })

  //

  // try {
  //   const responseData = await postApiData(urlLink, value)

  //   if (responseData.data) {
  //     await dispatch({
  //       type: TYPES.SUCCESS_CREATE_ORDER,
  //       dataOrder: responseData.data
  //     })
  //   } else {
  //     dispatch({
  //       type: TYPES.FAIL_CREATE_ORDER,
  //       getsError: responseData.message
  //     })
  //   }
  // } catch (err) {
  //   dispatch({ type: TYPES.FAIL_CREATE_ORDER })
  // }
}
