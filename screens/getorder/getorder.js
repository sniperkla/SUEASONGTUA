import { useState } from 'react'
import { headPages } from '../home/components/headpage'
import { svgpic } from '../../function/svg'
import Link from 'next/link'
import Item from './components/item'
import Router from 'next/router'
import { getOrders } from '../../hooks/getorder'
import { getOrderPages } from '../../function/getorder'
import { useEffect } from 'react'
import { checkOrder } from '../../function/checkorder'
import { useCartMenu } from '../../hooks/cart'

export const getOrderPage = () => {
  const [Check, setCheck] = useState(false)
  var [noInfo, showNoInfo] = useState(false)
  const { counter, full, sum } = useCartMenu()
  const { showorder } = checkOrder()
  const headPage = headPages()
  const { svgcart, svgprob, svghome } = svgpic()
  var [loading, setLoading] = useState(false)

  // var { isLoading } = getOrders()
  let convert = {}
  const { finalData, getOrderData, dateOrder, idOrder, isLoading, countall } =
    getOrderPages()

  const date = String(new Date(dateOrder))

  if (typeof window !== 'undefined') {
    var handleFirstPage = () => {
      localStorage.setItem('option', 'all')
      localStorage.setItem('autostate', 'false')
      localStorage.setItem('filterstate', 'true')
      localStorage.removeItem('autovalue')
      Router.push('/')
    }
  }

  const Totals = () => (
    <div className="pt-4 font-bold bg-[#FFFFFF7F] rounded-2xl mt-4 w-72 ">
      <div className="flex justify-center text-xl text-center">รวม VAT 7%</div>
      <div className="text-center py-2 text-3xl ">
        {loading ? 0 : null}
        {((getOrderData.subTotal * 107) / 100)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}{' '}
        ฿
      </div>
    </div>
  )

  const Results = () => (
    <div className="  flex justify-center">
      <table>
        <thead>
          <th className="w-48 md:w-64   lg:w-64 text-center">รายการอาหาร</th>
          <th className="w-20 md:w-32   lg:w-32 text-center">ราคา</th>
          <th className="w-20 md:w-32   lg:w-32 text-center">จำนวน</th>
          <th className="w-12  md:w-32   lg:w-32 text-center"></th>
        </thead>
      </table>
    </div>
  )
  const Noinfo = () => (
    <div>
      <div className="flex justify-center">
        <img className="w-36" src="/images/noresult.gif"></img>
      </div>
      <div className="pt-2 text-xl font-bold flex justify-center ">
        คุณยังไม่ได้สั่งออเดอร์
      </div>
    </div>
  )
  return (
    <div>
      <body>
        {/* <Loading loading={loading} /> */}
        <div className="img"></div>

        <div className="content">
          {headPage}

          <div className="fixedHeightCardgetorder">
            {showorder ? (
              <div className="grid justify-center">
                <img
                  className="w-16 md:w-20 lg:w-20 lg:-mt-20 md:-mt-10 -mt-6"
                  src="/images/cooking3.gif"
                ></img>
              </div>
            ) : null}
            <br />
            {showorder ? null : <Noinfo />}

            {showorder ? (
              <div className="px-2 bg-[#FFFFFF7F]  w-auto h-30 -mt-4 ">
                <center>
                  <div className="px-2 text-xl">
                    หมายเลข Order :
                    <span className=" font-bold text-3xl">
                      {idOrder.idOrder}
                    </span>
                  </div>
                  <div className="px-2 text-lg">
                    เวลาสั่งซื้อ : {date.substring(0, 24)}
                  </div>
                  <div className="px-2  text-lg">
                    รวมทั้งหมด : {countall} รายการ
                  </div>
                  {noInfo ? null : <Results />}
                </center>
              </div>
            ) : null}

            <div className="contentCardgetorder">
              {showorder
                ? finalData.map((element, key) => {
                    return (
                      <div key={key}>
                        <Item {...element} />
                      </div>
                    )
                  })
                : null}
              <div className="flex justify-center">
                {showorder ? <Totals /> : null}
              </div>

              {/* <div className="flex justify-center py-2">
                {showBtn ? <Btn /> : null}
              </div> */}
            </div>
          </div>

          <div></div>
        </div>
      </body>
      <footer className="navbar flex justify-center">
        <button
          onClick={handleFirstPage}
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
        <button className="rounded-r-full border-2 border-inherit   justify-center sm:rounded-r-full lg:rounded-r-full	md:rounded-r-full	cursor-pointer notification bg-[#1382a9] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72">
          {svgprob}
          <p className="md:text-[15px] lg:text-[15px] text-[13px]">แจ้งปัญหา</p>
        </button>
      </footer>
    </div>
  )
}
