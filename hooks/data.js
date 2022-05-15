import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../store/actions/data'
import { useEffect } from 'react'

export const allData = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [])
  const userData = useSelector((state) => state.userData.data)
  const loading = useSelector((state) => state.userData.loading)
  return {
    userData,
    loading
  }
}
