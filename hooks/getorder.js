import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getOrder } from '../store/actions/getorder'

export const getOrders = (result) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrder(result))
  }, [])

  // const handlegetOrder = (result) => {
  //   dispatch(getOrder(result))
  // }

  const getOrderData = useSelector((state) => state.getOrder.data)
  const isLoading = useSelector((state) => state.getOrder.isLoading)
  const getsError = useSelector((state) => state.getOrder.getsError) 
  const idOrder = useSelector((state) => state.getOrder.tokenAll)



  const newdata = getOrderData

  return {
    newdata,
    isLoading,
    getOrderData,
    getsError,
    idOrder
  }
}
