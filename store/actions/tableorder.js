import TYPES from '../types/tableorder'
import { postApiData } from '../../helper/network'
import { url } from '../../config/url'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import axios from 'axios'

export const getTableOrder = (value) => async (dispatch, getState) => {
  dispatch({ type: TYPES.START_TABLE_ORDER })
  const cookies = parseCookies()
  const urlLink = url.tableOrder
  const accessToken = cookies.token

  axios
    .post(urlLink, value, {
      headers: {
        Authorization: `Basic ${accessToken}`
      }
    })
    .then(function (response) {
      dispatch({
        type: TYPES.SUCCESS_TABLE_ORDER,
        tableOrders: response.data
      })
    })
    .catch(function (error) {
      console.log('erorr what', error.response.data.message)
      if (error.response.data.message === 'Invalid Token')
        dispatch({
          type: TYPES.FAIL_TABLE_ORDER,
          getsError: error.response.data.message
        })
    })
}
