import { useSelector } from 'react-redux'
export const dataOrder = () => {
  const dataOrder = useSelector((state) => state.createOrder.dataOrder)
  return {
    dataOrder
  }
}
