import { headPages } from '../home/components/headpage'
import AltCard from '../home/components/cardlist'
import Link from 'next/link'
import { svgpic } from '../../function/svg'
import { useCartMenu } from '../../hooks/cart'
import { useEffect, useState } from 'react'
import { handleOnclick } from '../../helper/handleclick'
import { handleButtonChange } from '../../function/handlebuttonchange'
import autocomplete from '../drink/components/autocomplete'
import Router from 'next/router'
import { selectOption } from '../../helper/selectoption'
import { getOrderPages } from '../../function/getorder'
import { orderbutton } from '../../helper/orderbutton'
import { checkOrder } from '../../function/checkorder'

export const drinkPage = () => {
  const headPage = headPages()
  const { counter, full, sum } = useCartMenu()
  const { svgcart, svghome, svgqrcode, svglist } = svgpic()
  const { orderButton } = orderbutton()
  const { haveOrder } = getOrderPages()
  const { showorder } = checkOrder()

  useEffect(() => {
    handleAlldrink()
  }, [])

  if (typeof window !== 'undefined') {
    localStorage.setItem('page', 'drink')

    if (localStorage.getItem('autovalue') === 'null') {
      localStorage.setItem('autostate', 'false')
      localStorage.setItem('filterstate', 'true')
      localStorage.setItem('option', 'เครื่องดื่ม')
      localStorage.removeItem('autovalue')
    }
    if (localStorage.getItem('option') === 'all')
      //กรณี หน้าแรก กดมายังหน้า drink
      localStorage.setItem('option', 'เครื่องดื่ม')
    if (localStorage.getItem('option') === 'null')
      localStorage.setItem('option', 'เครื่องดื่ม')
  }
  const {
    buttonAlchohol,
    buttonFruite,
    buttonFrappe,
    buttonCoffee,
    buttonCoke,
    buttonCocktail,
    buttonAlldrink
  } = handleButtonChange()
  const {
    handleAlchohol,
    handleFrappe,
    handleFruite,
    handleCoffee,
    handleCoke,
    handleCocktail,
    handleAlldrink,

    changeAlchohol,
    changeAlldrink,
    changeCocktail,
    changeCoke,
    changeCoffee,
    changeFrappe,
    changeFruite
  } = handleOnclick()
  const [active, setactive] = useState(false)

  const handleDrinks = (e) => {
    e.preventDefault()
    localStorage.setItem('option', 'all')
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
    Router.push('/')
  }

  const altcard = AltCard()
  return (
    <div className="overscroll-contain">
      <div className={`disablescr ${active ? 'disablescr' : ''}`}>
        <div className="img"></div>
        <div className="fixed top-0 left-0 right-0">
          <div className="pt-4">{headPage}</div>
          <div className="content">
            <div className="flex md:justify-center justify-end">
              <div className=" -mt-4 pl-4 md:pt-12  md:float-none lg:float-none float-right">
                {selectOption()}
              </div>
            </div>
            <div className="flex justify-center mt-2 md:-mt-12">
              {autocomplete()}
            </div>
            <div className="py-2 md:-pt-10 ">
              <div className=" grid md:grid-cols-4 grid-cols-4  px-2 lg:grid-cols-5">
                <div className="flex justify-items-center mb-1 content-center">
                  {changeCoke ? (
                    buttonCoke
                  ) : (
                    <button
                      onClick={handleCoke}
                      className="sm:w-40 lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-6"
                        src="/images/cola.png"
                      ></img>
                      <p className="text-[12px] font-bold ">น้ำอัดลม</p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center mb-1 content-center">
                  {changeCoffee ? (
                    buttonCoffee
                  ) : (
                    <button
                      onClick={handleCoffee}
                      className="sm:w-40 lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-8 -mt-2"
                        src="/images/coffee.png"
                      ></img>
                      <p className="text-[12px] font-bold">กาแฟ</p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center mb-1 content-center">
                  {changeFrappe ? (
                    buttonFrappe
                  ) : (
                    <button
                      onClick={handleFrappe}
                      className="sm:w-40 lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-8 -mt-2"
                        src="/images/frappe.png"
                      ></img>
                      <p className="text-[12px] font-bold">น้ำปั่น</p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center mb-1 content-center">
                  {changeFruite ? (
                    buttonFruite
                  ) : (
                    <button
                      onClick={handleFruite}
                      className="sm:w-40 lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-8 -mt-2"
                        src="/images/fruite.png"
                      ></img>
                      <p className="text-[12px] font-bold">น้ำผลไม้</p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center mb-1 content-center">
                  {changeAlchohol ? (
                    buttonAlchohol
                  ) : (
                    <button
                      onClick={handleAlchohol}
                      className="sm:w-40 lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-32 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-8 -mt-2 "
                        src="/images/alchohol.png"
                      ></img>
                      <p className="text-[12px] font-bold -ml-2">แอลกอฮอล์</p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center mb-1 content-center">
                  {changeCocktail ? (
                    buttonCocktail
                  ) : (
                    <button
                      onClick={handleCocktail}
                      className="sm:w-40 lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-8 -mt-2"
                        src="/images/cocktail.png"
                      ></img>
                      <p className="text-[12px] font-bold">ค็อกเทล</p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center mb-1 content-center">
                  {changeAlldrink ? (
                    buttonAlldrink
                  ) : (
                    <button
                      onClick={handleAlldrink}
                      className="sm:w-40 lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-8 -mt-2"
                        src="/images/alldrink.png"
                      ></img>
                      <p className="text-[12px] font-bold ml-1">ทั้งหมด</p>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixedHeightCard">
          <div className="contentCard">
            <div className="pb-12 ">{altcard}</div>
          </div>
        </div>
        <footer className="navbar flex justify-center">
          <button
            onClick={handleDrinks}
            className="rounded-l-full sm:rounded-l-full lg:rounded-l-full	md:rounded-l-full border-2 border-inherit justify-center bg-[#1385ab] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
            style={{ float: 'center' }}
          >
            {svghome}
            <p style={{ fontSize: '15px' }}> หน้าแรก</p>
          </button>
          <Link href="/cart">
            <button
              className="border-2 border-inherit notification justify-center 	cursor-pointer notification bg-[#1382a9] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
              style={{ float: 'center' }}
            >
              {svgcart}
              <p style={{ fontSize: '15px' }}>ตะกร้า</p>
              <span className="badge">{counter}</span>
            </button>
          </Link>
          {showorder ? (
            orderButton
          ) : (
            <Link href="/getorder">
              <button
                className="rounded-r-full border-2 border-inherit   justify-center sm:rounded-r-full lg:rounded-r-full	md:rounded-r-full	cursor-pointer notification bg-[#1382a9] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
                style={{ float: 'center' }}
              >
                {svglist}
                <p style={{ fontSize: '15px' }}>ออร์เดอร์</p>
              </button>
            </Link>
          )}
        </footer>
      </div>
    </div>
  )
}
