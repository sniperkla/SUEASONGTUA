import Router from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { handleButtonChangeSelectOption } from '../function/handlebuttonchangeselectoption'
export const selectOption = () => {
  const { buttonAppitizer, buttonDrink, buttonRiceNoodle, buttonSushi } =
    handleButtonChangeSelectOption()
  const [pageDrink, setPageDrink] = useState(false)
  const [pageSushi, setPageSushi] = useState(false)
  const [pageAppitizer, setPageAppitizer] = useState(false)
  const [pageNoodle, setPageNoodle] = useState(false)

  const pages = ''
  if (typeof window !== 'undefined') pages = localStorage.getItem('page')
  useEffect(() => {
    if (pages === 'drink') setPageDrink(true)
    else if (pages === 'sushi') setPageSushi(true)
    else if (pages === 'appitizer') setPageAppitizer(true)
    else if (pages === 'ricenoodle') setPageNoodle(true)
  }, [])

  if (typeof window !== 'undefined') {
    const removeAutostate = () => {
      localStorage.setItem('filterstate', 'true')
      localStorage.setItem('autostate', 'false')
      localStorage.removeItem('option')
      localStorage.removeItem('autovalue')
    }

    var handleDrink = () => {
      removeAutostate()
      localStorage.setItem('option', 'เครื่องดื่ม')
      Router.push('/drink')
    }
    var handleSushi = () => {
      removeAutostate()
      localStorage.setItem('option', 'sushiall')
      Router.push('/sushi')
    }

    var handleAppitizer = () => {
      removeAutostate()
      Router.push('/appitizer')
      localStorage.setItem('option', 'appitizer')
    }

    var handleNoodle = () => {
      removeAutostate()
      localStorage.setItem('option', 'ricenoodle')
      Router.push('/ricenoodle')
    }
  }

  return (
    <div className="md:-mt-24">
      <div className="grid grid-cols-4 md:grid-cols-4 md:gap-8 gap-2 -mt-2 ">
        <div className="cursor-pointer">
          {pageDrink ? (
            buttonDrink
          ) : (
            <button className="w-14  lg:w-20 flex justify-center">
              <img
                onClick={handleDrink}
                className="w-8 lg:w-10"
                src="/images/drink1.png"
              ></img>
            </button>
          )}
        </div>

        <div className="cursor-pointer">
          {pageSushi ? (
            buttonSushi
          ) : (
            <button className="w-14 lg:w-20 flex justify-center">
              <img
                onClick={handleSushi}
                className="w-8 lg:w-10"
                src="/images/sushi1.png"
              ></img>
            </button>
          )}
        </div>
        <div className="cursor-pointer">
          {pageAppitizer ? (
            buttonAppitizer
          ) : (
            <button className="w-14 lg:w-20 flex justify-center">
              <img
                onClick={handleAppitizer}
                className="w-8 lg:w-10"
                src="/images/snack1.png"
              ></img>
            </button>
          )}
        </div>
        <div className="cursor-pointer">
          {pageNoodle ? (
            buttonRiceNoodle
          ) : (
            <button className="w-14 lg:w-20 flex justify-center">
              <img
                onClick={handleNoodle}
                className="w-8 lg:w-10"
                src="/images/noodle1.png"
              ></img>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
