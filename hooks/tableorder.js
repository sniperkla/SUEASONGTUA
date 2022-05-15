import { useSelector, useDispatch } from 'react-redux'
import { getTableOrder } from '../store/actions/tableorder'
import { useEffect } from 'react'
export const getTableOrders = (value) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTableOrder(value))
  }, [])
  const tableorders = useSelector((state) => state.tableOrder.tableOrders)
  const loading = useSelector((state) => state.tableOrder.loading)
  const getsError = useSelector((state) => state.tableOrder.getsError)
  return {
    tableorders,
    loading,
    getsError
  }
}
