import axios from 'axios'
import { url } from '../../config/url'
import TYPES from '../types/updateorders'

export const getUpdateOrder = (result) => async (dispatch, getState) => {
  const urlLink = url.updateMenu
  dispatch({ type: TYPES.START_UPDATE_ORDER })
  axios
    .post(urlLink, result)
    .then(function (response) {
      dispatch({
        type: TYPES.SUCCESS_UPDATE_ORDER,
        data: response.data.data
      })
      console.log('data is ss', response.data)
    })
    .catch(function (error) {
      if (error.response.data.message === 'Token not haved') {
        dispatch({
          type: TYPES.FAIL_UPDATE_ORDER,
          getsError: 'กรุณาสแกน Token (Token not haved)'
        })
      }
    })
}
