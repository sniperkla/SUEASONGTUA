import { useState } from 'react'
import { handleOnclickRiceNoodle } from '../helper/handleclickricenoodle'
export const handleButtonChangeRiceNoodle = () => {
  const { handleRice, handleNoodle, handleAllricenoodle } =
    handleOnclickRiceNoodle()
  const buttonAllricenoodle = (
    <button
      onClick={handleAllricenoodle}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-8 -mt-1"
        src="/images/allricenoodle.png"
      ></img>
      <p className="text-[13px] font-bold">เมนูทั้งหมด</p>
    </button>
  )
  const buttonRice = (
    <button
      onClick={handleRice}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-8 -mt-2" src="/images/rice.png"></img>
      <p className="text-[13px] font-bold">ประเภทข้าว</p>
    </button>
  )
  const buttonNoodle = (
    <button
      onClick={handleNoodle}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-8 -mt-1" src="/images/noodle.png"></img>
      <p className="text-[13px] font-bold">ประเภทเส้น</p>
    </button>
  )

  return {
    buttonRice,
    buttonNoodle,
    buttonAllricenoodle
  }
}
