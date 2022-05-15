import { useState } from 'react'
import { handleOnclick } from '../helper/handleclick'
export const handleButtonChange = () => {
  const {
    handleAlchohol,
    handleAlldrink,
    handleFrappe,
    handleFruite,
    handleCoffee,
    handleCoke,
    handleCocktail
  } = handleOnclick()
  const buttonAlldrink = (
    <button
      onClick={handleAlldrink}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-8 -mt-2"
        src="/images/alldrink.png"
      ></img>
      <p className="text-[12px] font-bold ml-1">ทั้งหมด</p>
    </button>
  )

  const buttonAlchohol = (
    <button
      onClick={handleAlchohol}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-8 -mt-2 "
        src="/images/alchohol.png"
      ></img>
      <p className="text-[12px] font-bold -ml-2">แอลกอฮอล์</p>
    </button>
  )
  const buttonCoffee = (
    <button
      onClick={handleCoffee}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-8 -mt-2" src="/images/coffee.png"></img>
      <p className="text-[12px] font-bold">กาแฟ</p>
    </button>
  )
  const buttonFruite = (
    <button
      onClick={handleFruite}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-8 -mt-2" src="/images/fruite.png"></img>
      <p className="text-[12px] font-bold">น้ำผลไม้</p>
    </button>
  )
  const buttonFrappe = (
    <button
      onClick={handleFrappe}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-8 -mt-2" src="/images/frappe.png"></img>
      <p className="text-[12px] font-bold">น้ำปั่น</p>
    </button>
  )
  const buttonCoke = (
    <button
      onClick={handleCoke}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img className="cursor-pointer w-6" src="/images/cola.png"></img>
      <p className="text-[12px] font-bold">น้ำอัดลม</p>
    </button>
  )
  const buttonCocktail = (
    <button
      onClick={handleCocktail}
      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-red-500 w-40 h-10 lg:w-40 py-2 bg-green-500 text-gray-100"
    >
      <img
        className="cursor-pointer w-8 -mt-2"
        src="/images/cocktail.png"
      ></img>
      <p className="text-[12px] font-bold">ค็อกเทล</p>
    </button>
  )
  return {
    buttonAlchohol,
    buttonCoffee,
    buttonFruite,
    buttonFrappe,
    buttonCoke,
    buttonCocktail,
    buttonAlldrink
  }
}
