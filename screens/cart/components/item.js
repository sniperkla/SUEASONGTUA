import React from 'react'
import { useDecrease } from '../../../hooks/cart'
import { notifytoast } from '../../../function/notify'

const Item = (props) => {
  const { name, price, count } = props
  const { handleDecrease } = useDecrease() // hook handleDecrease
  const { notifyRemoveItem } = notifytoast()
  const handleDecreaseClick = () => {
    handleDecrease(props)
  }

  return (
    <center>
      <div className="bg-[#FFFFFF7F] flex justify-center">
        <table>
          <thead>
            <tr>
              <th className="w-48 md:w-64  lg:w-64 text-center"></th>
              <th className="w-20 md:w-32   lg:w-32 text-center"></th>
              <th className="w-20 md:w-32   lg:w-32 text-center"></th>
              <th className="w-12 md:w-32   lg:w-32 text-center"></th>
            </tr>
          </thead>
          <tbody>
            <td className="text-sm px-2">{name}</td>
            <td className="text-md  text-center ">{price}</td>
            <td className="text-md   text-center">x{count} </td>
            <td className="pr-1">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 w-8"
                onClick={(e) => {
                  handleDecreaseClick()
                }}
              >
                -
              </button>
            </td>
          </tbody>
        </table>
      </div>
    </center>
  )
}
export default Item
