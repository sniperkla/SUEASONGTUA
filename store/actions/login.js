import TYPES from '../types/login'
import { postApiData } from '../../helper/network'
import { url } from '../../config/url'
import axios from 'axios'

export const getLogin = (mock) => async (dispatch, getState) => {
  const urlLink = url.login
  axios
    .post(urlLink, mock)
    .then(function (response) {
      dispatch({
        type: TYPES.SUCCESS_LOGIN,
        data: response.data.user
      })
    })
    .catch(function (error) {
      if (error.response.data.message === 'Invalid Credentials') {
        dispatch({
          type: TYPES.FAIL_LOGIN,
          getsError: error.response.data.message
        })
      } else if (error.response.data.message === 'All input is required') {
        dispatch({
          type: TYPES.FAIL_LOGIN,
          getsError: error.response.data.message
        })
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
