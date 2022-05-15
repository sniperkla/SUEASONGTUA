import { useState } from 'react'
import { handleOnclickAppitizer } from '../helper/handleclickappitizer'
export const handleButtonChangeAppitizer = () => {
  const {
    handleKobashi,
    handleDessert,
    handleIppin,
    handleKushikatsu,
    handleSalad,
    handleTempura,
    handleallAppitizer
  } = handleOnclickAppitizer()
  const buttonAllappitizer = (
    <button
      onClick={handleallAppitizer}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-28 h-10 sm:w-40 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-8 -mt-2"
        src="/images/allappitizer.png"
      ></img>
      <p className="text-[12px] lg:text-md font-bold px-1">ทั้งหมด</p>
    </button>
  )
  const buttonKobashi = (
    <button
      onClick={handleKobashi}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40    border-red-500 w-28 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-7 -mt-1" src="/images/snack.png"></img>
      <p className="text-[12px] lg:text-[12px] font-bold">กับแกล้ม</p>
    </button>
  )
  const buttonDessert = (
    <button
      onClick={handleDessert}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40    border-red-500 w-28 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-8 -mt-2" src="/images/dessert.png"></img>
      <p className="text-[11px] lg:text-md font-bold">ของหวาน</p>
    </button>
  )
  const buttonIppin = (
    <button
      onClick={handleIppin}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40   border-red-500 w-28 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-7 -mt-1"
        src="/images/appitizer.png"
      ></img>
      <p className="text-[11px] lg:text-md font-bold">ของทานเล่น</p>
    </button>
  )
  const buttonSalad = (
    <button
      onClick={handleSalad}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40   border-red-500 w-36 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-7 -mt-1" src="/images/salad.png"></img>
      <p className="px-1 text-[12px] lg:text-md font-bold ">สลัด</p>
    </button>
  )
  const buttonKushikatsu = (
    <button
      onClick={handleKushikatsu}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40   border-red-500 w-28 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-8 -mt-2" src="/images/fry.png"></img>
      <p className="text-[10px] lg:text-md font-bold">ชุบแป้งทอด</p>
    </button>
  )
  const buttonTempura = (
    <button
      onClick={handleTempura}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2  border-red-500 w-28 h-10 sm:w-40 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-8 -mt-2 "
        src="/images/tempura.png"
      ></img>
      <p className="text-[12px] lg:text-md font-bold px-1">เทมปุระ</p>
    </button>
  )
  return {
    buttonTempura,
    buttonDessert,
    buttonKobashi,
    buttonSalad,
    buttonKushikatsu,
    buttonIppin,
    buttonAllappitizer
  }
}
