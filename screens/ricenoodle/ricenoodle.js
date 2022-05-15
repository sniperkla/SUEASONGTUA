import { headPages } from '../home/components/headpage'
import AltCard from '../home/components/cardlist'
import Link from 'next/link'
import { svgpic } from '../../function/svg'
import { useCartMenu } from '../../hooks/cart'
import { useEffect, useState } from 'react'
import autocomplete from '../ricenoodle/components/autocomplete'
import Router from 'next/router'
import { selectOption } from '../../helper/selectoption'
import { handleOnclickRiceNoodle } from '../../helper/handleclickricenoodle'
import { handleButtonChangeRiceNoodle } from '../../function/handlebuttonchangericenoodle'
import { getOrderPages } from '../../function/getorder'
import { orderbutton } from '../../helper/orderbutton'
import { checkOrder } from '../../function/checkorder'
export const ricenoodlePage = () => {
  const { orderButton } = orderbutton()
  const headPage = headPages()
  const { counter, full, sum } = useCartMenu()
  const { svgcart, svghome, svgqrcode, svglist } = svgpic()
  const { showorder } = checkOrder()

  useEffect(() => {
    handleAllricenoodle()
  }, [])

  if (typeof window !== 'undefined') {
    localStorage.setItem('page', 'ricenoodle')

    if (localStorage.getItem('autovalue') === 'null') {
      localStorage.setItem('autostate', 'false')
      localStorage.setItem('filterstate', 'true')
      localStorage.setItem('option', 'ricenoodle')
      localStorage.removeItem('autovalue')
    }
  }

  const { buttonNoodle, buttonRice, buttonAllricenoodle } =
    handleButtonChangeRiceNoodle()
  const {
    handleNoodle,
    handleRice,
    changeNoodle,
    changeRice,
    handleAllricenoodle,
    changeAllricenoodle
  } = handleOnclickRiceNoodle()
  const [active, setactive] = useState(false)

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('option') === 'all')
      localStorage.setItem('option', 'ricenoodle')
    if (localStorage.getItem('option') === null)
      localStorage.setItem('option', 'ricenoodle')
  }
  const handleRiceNoodle = (e) => {
    e.preventDefault()
    localStorage.setItem('option', 'all') /// คืนค่าหน้าตั้งต้น all แสดงเมนูทั้งหมด
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
              <div className=" grid md:grid-cols-4 grid-cols-3 px-2 gap-2 flex justify-center">
                <div className="flex justify-items-center justify-center mb-1 content-center">
                  {changeRice ? (
                    buttonRice
                  ) : (
                    <button
                      onClick={handleRice}
                      className=" lg:rounded-full rounded-2xl  flex justify-center border-2 border-white   w-28 h-10 lg:w-40  py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-7 -mt-1"
                        src="/images/rice.png"
                      ></img>
                      <p className="text-[12px] font-bold ">ประเภทข้าว</p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center justify-center mb-1 content-center">
                  {changeNoodle ? (
                    buttonNoodle
                  ) : (
                    <button
                      onClick={handleNoodle}
                      className=" lg:rounded-full rounded-2xl  flex justify-center border-2 border-white  w-28 h-10 lg:w-40  py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-7 -mt-1"
                        src="/images/noodle.png"
                      ></img>
                      <p className="text-[12px] font-bold">ประเภทเส้น</p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center justify-center mb-1 content-center">
                  {changeAllricenoodle ? (
                    buttonAllricenoodle
                  ) : (
                    <button
                      onClick={handleAllricenoodle}
                      className=" lg:rounded-full rounded-2xl  flex justify-center border-2 border-white  w-28 h-10 lg:w-40  py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-7 -mt-1"
                        src="/images/allricenoodle.png"
                      ></img>
                      <p className="text-[12px] font-bold">เมนูทั้งหมด</p>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixedHeightCardforricenoodle">
          <div className="contentCardforricenoodle">
            <div className="pb-12 ">{altcard}</div>
          </div>
        </div>

        <footer className="navbar flex justify-center">
          <button
            onClick={handleRiceNoodle}
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
