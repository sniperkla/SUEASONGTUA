import { useState } from 'react'
import { handleOnclickSushi } from '../helper/handleclicksushi'
export const handleButtonChangeSushi = () => {
  const {
    handleGunkan,
    handleHosomaki,
    handleInari,
    handleMoriawase,
    handleSushi,
    handleTemaki,
    handleRoll,
    handleAllsushi
  } = handleOnclickSushi()

  const buttonAllsushi = (
    <button
      onClick={handleAllsushi}
      className="lg:rounded-full rounded-2xl  flex justify-center sm:w-40 border-2 border-red-500 w-28 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-7 -mt-1"
        src="/images/allsushi.png"
      ></img>
      <p className="text-[12px] lg:text-md font-bold px-1">ทั้งหมด</p>
    </button>
  )
  const buttonGunkan = (
    <button
      onClick={handleGunkan}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-8 -mt-2" src="/images/gunkan.png"></img>
      <p className="text-[11px] font-bold">ห่อสาหร่าย</p>
    </button>
  )
  const buttonHosomaki = (
    <button
      onClick={handleHosomaki}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-6 -mt-1"
        src="/images/hosomaki.png"
      ></img>
      <p className="text-[12px] font-bold">ขนาดเล็ก</p>
    </button>
  )
  const buttonInari = (
    <button
      onClick={handleInari}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-10 -mt-2" src="/images/inari.png"></img>
      <p className="text-[12px] font-bold">ห่อเต้าหู้</p>
    </button>
  )
  const buttonMoriawase = (
    <button
      onClick={handleMoriawase}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-7 -mt-1"
        src="/images/moriawase.png"
      ></img>
      <p className="text-[12px] font-bold ">ซูชิรวม</p>
    </button>
  )
  const buttonSushi = (
    <button
      onClick={handleSushi}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-8 -mt-2 " src="/images/sushi.png"></img>
      <p className="text-[12px] font-bold px-1">ซูชิ</p>
    </button>
  )
  const buttonTemaki = (
    <button
      onClick={handleTemaki}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-6" src="/images/temaki.png"></img>
      <p className="text-[12px] font-bold">รูปกรวย</p>
    </button>
  )
  const buttonRoll = (
    <button
      onClick={handleRoll}
      className="lg:rounded-full rounded-2xl  flex justify-center sm:w-40 border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-6" src="/images/roll.png"></img>
      <p className="text-[12px] lg:text-md font-bold px-1">ซูชิโรล</p>
    </button>
  )
  return {
    buttonGunkan,
    buttonHosomaki,
    buttonInari,
    buttonMoriawase,
    buttonRoll,
    buttonSushi,
    buttonTemaki,
    buttonAllsushi
  }
}
