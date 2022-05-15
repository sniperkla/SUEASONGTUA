import { headPages } from '../home/components/headpage'
import AltCard from '../home/components/cardlist'
import Link from 'next/link'
import { svgpic } from '../../function/svg'
import { useCartMenu } from '../../hooks/cart'
import { useEffect, useState } from 'react'
import { orderbutton } from '../../helper/orderbutton'
import autocomplete from '../appitizer/components/autocomplete'
import Router from 'next/router'
import { handleButtonChangeAppitizer } from '../../function/handlebuttonchangeappitizer'
import { handleOnclickAppitizer } from '../../helper/handleclickappitizer'
import { selectOption } from '../../helper/selectoption'
import { getOrderPages } from '../../function/getorder'
import { checkOrder } from '../../function/checkorder'
export const appitizerPage = () => {
  const headPage = headPages()
  const { counter, full, sum } = useCartMenu()
  const { svgcart, svghome, svgqrcode, svglist } = svgpic()
  const { haveOrder } = getOrderPages()
  const { orderButton } = orderbutton()
  const { showorder } = checkOrder()

  useEffect(() => {
    handleallAppitizer()
  }, [])

  if (typeof window !== 'undefined') {
    localStorage.setItem('page', 'appitizer')
    if (localStorage.getItem('autovalue') === 'null') {
      localStorage.setItem('autostate', 'false')
      localStorage.setItem('filterstate', 'true')
      localStorage.setItem('option', 'appitizer')
      localStorage.removeItem('autovalue')
    }
  }

  const {
    buttonTempura,
    buttonDessert,
    buttonKobashi,
    buttonSalad,
    buttonKushikatsu,
    buttonIppin,
    buttonAllappitizer
  } = handleButtonChangeAppitizer()
  const {
    handleKobashi,
    handleDessert,
    handleIppin,
    handleallAppitizer,
    handleKushikatsu,
    handleSalad,
    handleTempura,
    changeAllappitizer,
    changeDessert,
    changeIppin,
    changeKobachi,
    changeKushikatsu,
    changeSalad,
    changeTempura
  } = handleOnclickAppitizer()
  const [active, setactive] = useState(false)
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('option') === 'all')
      localStorage.setItem('option', 'appitizer')
    if (localStorage.getItem('option') === 'null')
      localStorage.setItem('option', 'appitizer')
  }
  const handleAppitizer = (e) => {
    e.preventDefault()
    localStorage.setItem('option', 'all')
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
    Router.push('/')
  }

  const altcard = AltCard()
  return (
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
                {changeDessert ? (
                  buttonDessert
                ) : (
                  <button
                    onClick={handleDessert}
                    className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40   border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                  >
                    <img
                      className="cursor-pointer w-8 -mt-2"
                      src="/images/dessert.png"
                    ></img>
                    <p className="text-[11px] lg:text-md font-bold">ของหวาน</p>
                  </button>
                )}
              </div>
              <div className="flex justify-items-center mb-1 content-center">
                {changeIppin ? (
                  buttonIppin
                ) : (
                  <button
                    onClick={handleIppin}
                    className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40  border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                  >
                    <img
                      className="cursor-pointer w-7 -mt-1"
                      src="/images/appitizer.png"
                    ></img>
                    <p className="text-[11px] lg:text-md font-bold">
                      ของทานเล่น
                    </p>
                  </button>
                )}
              </div>
              <div className="flex justify-items-center content-center mb-1">
                {changeKobachi ? (
                  buttonKobashi
                ) : (
                  <button
                    onClick={handleKobashi}
                    className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40   border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                  >
                    <img
                      className="cursor-pointer w-7 -mt-1"
                      src="/images/snack.png"
                    ></img>
                    <p className="text-[12px] lg:text-[12px] font-bold">
                      กับแกล้ม
                    </p>
                  </button>
                )}
              </div>
              <div className="flex justify-items-center content-center mb-1">
                {changeKushikatsu ? (
                  buttonKushikatsu
                ) : (
                  <button
                    onClick={handleKushikatsu}
                    className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40  border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                  >
                    <img
                      className="cursor-pointer w-8 -mt-2"
                      src="/images/fry.png"
                    ></img>
                    <p className="text-[10px] lg:text-md font-bold">
                      ชุบแป้งทอด
                    </p>
                  </button>
                )}
              </div>

              <div className="flex justify-items-center content-center mb-1">
                {changeSalad ? (
                  buttonSalad
                ) : (
                  <button
                    onClick={handleSalad}
                    className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40  border-white w-36 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                  >
                    <img
                      className="cursor-pointer w-7 -mt-1"
                      src="/images/salad.png"
                    ></img>
                    <p className="px-1 text-[12px] lg:text-md font-bold ">
                      สลัด
                    </p>
                  </button>
                )}
              </div>

              <div className="flex justify-items-center mb-1 content-center">
                {changeTempura ? (
                  buttonTempura
                ) : (
                  <button
                    onClick={handleTempura}
                    className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-28 h-10 sm:w-40 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                  >
                    <img
                      className="cursor-pointer w-8 -mt-2"
                      src="/images/tempura.png"
                    ></img>
                    <p className="text-[12px] lg:text-md font-bold px-1">
                      เทมปุระ
                    </p>
                  </button>
                )}
              </div>

              <div className="flex justify-items-center mb-1 content-center">
                {changeAllappitizer ? (
                  buttonAllappitizer
                ) : (
                  <button
                    onClick={handleallAppitizer}
                    className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-28 h-10 sm:w-40 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                  >
                    <img
                      className="cursor-pointer w-8 -mt-2"
                      src="/images/allappitizer.png"
                    ></img>
                    <p className="text-[12px] lg:text-md font-bold px-1">
                      ทั้งหมด
                    </p>
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
          onClick={handleAppitizer}
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
  )
}
