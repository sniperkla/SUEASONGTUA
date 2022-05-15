import { headPages } from '../home/components/headpage'
import AltCard from '../home/components/cardlist'
import Link from 'next/link'
import { svgpic } from '../../function/svg'
import { useCartMenu } from '../../hooks/cart'
import { useEffect, useState } from 'react'
import { handleOnclickSushi } from '../../helper/handleclicksushi'
import { handleButtonChangeSushi } from '../../function/handlebuttonchangesushi'
import autocomplete from '../sushi/components/autocomplete'
import { selectOption } from '../../helper/selectoption'
import Router from 'next/router'
import { getOrderPages } from '../../function/getorder'
import { orderbutton } from '../../helper/orderbutton'
import { checkOrder } from '../../function/checkorder'
export const sushiPage = () => {
  const { orderButton } = orderbutton()
  const headPage = headPages()
  const { counter, full, sum } = useCartMenu()
  const { svgcart, svghome, svgqrcode, svglist } = svgpic()

  const { showorder } = checkOrder()

  useEffect(() => {
    handleAllsushi()
  }, [])

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('option') === 'all')
      localStorage.setItem('option', 'sushiall')
    if (localStorage.getItem('autovalue') === 'null') {
      // กรณี autocomplete ยกเลิกกการ search ให้ แสดง filter state ที่มี option เป็น sushiall แทน
      localStorage.setItem('autostate', 'false')
      localStorage.setItem('filterstate', 'true')
      localStorage.setItem('option', 'sushiall')
      localStorage.removeItem('autovalue')
    }
  }
  const {
    buttonGunkan,
    buttonHosomaki,
    buttonInari,
    buttonMoriawase,
    buttonRoll,
    buttonSushi,
    buttonTemaki,
    buttonAllsushi
  } = handleButtonChangeSushi()
  const {
    handleGunkan,
    handleHosomaki,
    handleInari,
    handleMoriawase,
    handleSushi,
    handleTemaki,
    handleRoll,
    handleAllsushi,
    changeAllsushi,
    changeGunkan,
    changeHosomaki,
    changeInari,
    changeMoriawase,
    changeSushi,
    changeTemaki,
    changeRoll
  } = handleOnclickSushi()
  const [active, setactive] = useState(false)

  if (typeof window !== 'undefined') {
    localStorage.setItem('page', 'sushi')
  }
  const handleSushis = (e) => {
    e.preventDefault()
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.setItem('option', 'all')
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
                  {changeGunkan ? (
                    buttonGunkan
                  ) : (
                    <button
                      onClick={handleGunkan}
                      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40   border-white w-36 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-8 -mt-2"
                        src="/images/gunkan.png"
                      ></img>
                      <p className="text-[11px] lg:text-md font-bold">
                        ห่อสาหร่าย
                      </p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center mb-1 content-center">
                  {changeHosomaki ? (
                    buttonHosomaki
                  ) : (
                    <button
                      onClick={handleHosomaki}
                      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40  border-white w-36 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-6 -mt-1"
                        src="/images/hosomaki.png"
                      ></img>
                      <p className="text-[12px] lg:text-md font-bold">
                        ขนาดเล็ก
                      </p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center content-center mb-1">
                  {changeInari ? (
                    buttonInari
                  ) : (
                    <button
                      onClick={handleInari}
                      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40   border-white w-36 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-10 -mt-2"
                        src="/images/inari.png"
                      ></img>
                      <p className="text-[12px] lg:text-[12px] font-bold">
                        ห่อเต้าหู้
                      </p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center content-center mb-1">
                  {changeTemaki ? (
                    buttonTemaki
                  ) : (
                    <button
                      onClick={handleTemaki}
                      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40  border-white w-36 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-6"
                        src="/images/temaki.png"
                      ></img>
                      <p className="text-[12px] lg:text-md font-bold">
                        รูปกรวย
                      </p>
                    </button>
                  )}
                </div>

                <div className="flex justify-items-center content-center mb-1">
                  {changeMoriawase ? (
                    buttonMoriawase
                  ) : (
                    <button
                      onClick={handleMoriawase}
                      className="lg:rounded-full rounded-2xl  flex justify-center border-2 sm:w-40  border-white w-36 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-7 -mt-1"
                        src="/images/moriawase.png"
                      ></img>
                      <p className="text-[12px] lg:text-md font-bold ">
                        ซูชิรวม
                      </p>
                    </button>
                  )}
                </div>

                <div className="flex justify-items-center mb-1 content-center">
                  {changeSushi ? (
                    buttonSushi
                  ) : (
                    <button
                      onClick={handleSushi}
                      className="lg:rounded-full rounded-2xl  flex justify-center border-2 border-white w-28 h-10 sm:w-40 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-8 -mt-2 "
                        src="/images/sushi.png"
                      ></img>
                      <p className="text-[12px] lg:text-md font-bold px-1">
                        ซูชิ
                      </p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center content-center mb-1">
                  {changeRoll ? (
                    buttonRoll
                  ) : (
                    <button
                      onClick={handleRoll}
                      className="lg:rounded-full rounded-2xl  flex justify-center sm:w-40 border-2 border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-6"
                        src="/images/roll.png"
                      ></img>
                      <p className="text-[12px] lg:text-md font-bold px-1">
                        ซูชิโรล
                      </p>
                    </button>
                  )}
                </div>
                <div className="flex justify-items-center content-center mb-1">
                  {changeAllsushi ? (
                    buttonAllsushi
                  ) : (
                    <button
                      onClick={handleAllsushi}
                      className="lg:rounded-full rounded-2xl  flex justify-center sm:w-40 border-2 border-white w-28 h-10 lg:w-40 py-2 hover:bg-[#097396] bg-[#1284AF] text-gray-100"
                    >
                      <img
                        className="cursor-pointer w-7 -mt-1"
                        src="/images/allsushi.png"
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
            onClick={handleSushis}
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
