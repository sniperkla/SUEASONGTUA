import axios from 'axios'

const getHeaders = (token) => {
  return {
    Authorization: token
  }
}

export const getApiData = (url, accessToken) => {
  const headers = accessToken ? getHeaders(accessToken) : {}
  return axios({
    url,
    method: 'get',
    headers
  })
}

export const postApiData = (url, postData, accessToken) => {
  const headers = accessToken ? getHeaders(accessToken) : {}
  return axios({
    url,
    method: 'post',
    headers,
    data: postData
  })
}

export const putApiData = (url, postData, accessToken) => {
  const headers = accessToken ? getHeaders(accessToken) : {}
  return axios({
    url,
    method: 'put',
    headers,
    data: postData
  })
}

export const delApiData = (url, accessToken) => {
  const headers = accessToken ? getHeaders(accessToken) : {}
  const config = {
    headers: headers
  }
  return axios.delete(url, config)
}
