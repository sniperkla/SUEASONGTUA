import React from 'react'
import { useDecrease } from '../../../hooks/cart'

const Item = (props) => {
  const { time, menu, name, total, price, count } = props

  return (
    <center>
      <div className="bg-[#FFFFFF7F] flex justify-center">
        <table>
          <thead>
            <th className="w-48 md:w-64   lg:w-64 text-center"></th>
            <th className="w-20 md:w-32   lg:w-32 text-center"></th>
            <th className="w-20 md:w-32   lg:w-32 text-center"></th>
            <th className="w-12  md:w-32    lg:w-32 text-center"></th>
          </thead>

          <tbody>
            <td className="text-sm  px-2 ">{name}</td>
            <td className="text-md  text-center ">{price}</td>
            <td className="text-md  text-center">x{count} </td>
            <td className="pr-1">
              <img className="w-8 " src="/images/wait.gif"></img>
            </td>
          </tbody>
        </table>
      </div>
    </center>
  )
}
export default Item
