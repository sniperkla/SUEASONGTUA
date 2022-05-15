import { Route } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { getLogin } from '../store/actions/login'
import Router from 'next/router'

export const getLogins = () => {
  const loginState = useSelector((state) => state.loginState.data)
  const getsError = useSelector((state) => state.loginState.getsError)
  const check = ''
  const dispatch = useDispatch()
  const handlegetLogins = (mock) => {
    dispatch(getLogin(mock))
  }

  return {
    handlegetLogins,
    loginState,
    getsError
  }
}
