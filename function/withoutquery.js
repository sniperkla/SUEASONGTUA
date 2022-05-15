import { getOrder } from '../store/actions/getorder'
import { useDispatch } from 'react-redux'
export const withoutQuery = () => {
  const result = []
  const dispatch = useDispatch()
  if (typeof window !== 'undefined') {
    result = { token: localStorage.getItem('query') }
    dispatch(getOrder(result))
  }
}
