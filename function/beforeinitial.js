import { useRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { getOrder } from '../store/actions/getorder'
import { createmenu } from '../function/createmenu'
import { useDispatch } from 'react-redux'

export const beforeInit = (router) => {
  const cookies = parseCookies()
  const result = []
  const dispatch = useDispatch()
  if (typeof window !== 'undefined') {
    localStorage.setItem('query', router)
    localStorage.removeItem('dupeorder')
    localStorage.removeItem('tokenexpire')

    result = { token: localStorage.getItem('query') }
      dispatch(getOrder(result))
    
    if (cookies.value === undefined) {
      setCookie(null, 'fromClient', 'value', {
        maxAge: 4 * 60 * 60,
        path: '/'
      })
    }
  }
}
