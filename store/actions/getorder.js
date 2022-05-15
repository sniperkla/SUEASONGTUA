import TYPES from '../types/getorder'
import { postApiData } from '../../helper/network'
import { url } from '../../config/url'
import axios from 'axios'

export const getOrder = (result) => async (dispatch, getState) => {
  if (typeof window !== 'undefined') {
    const urlLink = url.getOrder
    dispatch({ type: TYPES.START_GET_ORDER, isLoading: true })
    axios
      .post(urlLink, result)
      .then(function (response) {
        dispatch({
          type: TYPES.SUCCESS_GET_ORDER,
          data: response.data.data,
          tokenall: response.data.dataToken,
          isLoading: false
        })
        dispatch({
          type: TYPES.FAIL_GET_ORDER,
          getsError: null,
          isLoading: false
        })

        localStorage.setItem('dupeorder', 'true')
        localStorage.setItem('tokenexpire', 'false')
      })
      .catch(function (error) {
        if (error.response.data.message === 'order not have') {
          localStorage.setItem('dupeorder', 'first')
          localStorage.setItem('tokenexpire', 'false')
          dispatch({
            type: TYPES.FAIL_GET_ORDER,
            getsError: error.response.data.message,
            isLoading: false
          })
        } else if (error.response.data.message === 'Token is expired') {
          dispatch({
            type: TYPES.FAIL_GET_ORDER,
            getsError: error.response.data.message,
            isLoading: false
          })

          localStorage.setItem('tokenexpire', 'true')
          localStorage.setItem('dupeorder', 'false')
        } else if (error.response.data.message === 'Token not have') {
          dispatch({
            type: TYPES.FAIL_GET_ORDER,
            getsError: error.response.data.message,
            isLoading: false
          })
          localStorage.setItem('tokenexpire', 'false')
          localStorage.setItem('dupeorder', 'false')
        }
      })
  }
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
