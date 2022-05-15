import { useState } from 'react'
export const handleButtonChangeSelectOption = () => {
  const buttonDrink = (
    <button className="w-14 lg:w-20  bg-green-500 flex justify-center border-2 border-red-500 rounded-2xl">
      <img className="w-8 lg:w-10  " src="/images/drink1.png"></img>
    </button>
  )
  const buttonAppitizer = (
    <button className="w-14 lg:w-20   bg-green-500 flex justify-center border-2 border-red-500 rounded-2xl">
      <img className="w-8 lg:w-10 " src="/images/snack1.png"></img>
    </button>
  )
  const buttonRiceNoodle = (
    <button className="w-14 lg:w-20   bg-green-500 flex justify-center border-2 border-red-500 rounded-2xl">
      <img className="w-8 lg:w-10 " src="/images/noodle1.png"></img>
    </button>
  )
  const buttonSushi = (
    <button className="w-14 lg:w-20  bg-green-500 flex justify-center border-2 border-red-500 rounded-2xl">
      <img className="w-8 lg:w-10 " src="/images/sushi1.png"></img>
    </button>
  )

  return {
    buttonAppitizer,
    buttonDrink,
    buttonRiceNoodle,
    buttonSushi
  }
}
