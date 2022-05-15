import Link from 'next/link'
import Item from './components/item'

import { useDataCart, useCartMenu } from '../../hooks/cart'
import { useEffect, useRef, useState } from 'react'

import { reset } from '../../function/reset'
import { svgpic } from '../../function/svg'
import { headPages } from '../home/components/headpage'
import { notifytoast } from '../../function/notify'
import { toast } from 'react-toastify'
import { orderbutton } from '../../helper/orderbutton'
import { checkOrder } from '../../function/checkorder'
import { Loading } from '../../function/loadingcart'

import Router from 'next/router'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const cart = () => {
  const { orderButton } = orderbutton()
  const headPage = headPages()
  const { notifyError, notifyWarn } = notifytoast()
  const { handleCreatOrder, handleUpdateOrder } = useDataCart()
  const { full, sum } = useCartMenu()
  const { svgqrcode, svglist, svgwrong, svghome, svgquestion } = svgpic()
  const [showResults, setShowResults] = useState(false)
  const [open, setOpen] = useState(false)
  const [showTotal, setShowTotal] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  const [noinfo, setNoinfo] = useState(false)
  const [checkupdate, setCheckUpdate] = useState(false)
  const [clearcarts, setClearCarts] = useState(false)
  const [checkfistorder, setCheckFirstOrder] = useState(false)
  const [loading, setLoading] = useState(false)

  const { showorder } = checkOrder()

  var errorTexthead = ''
  var errorTextbody = ''

  const toastId1 = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('full').length === 2) {
        setNoinfo(true)
      }
      if (localStorage.getItem('full').length !== 2) {
        setShowBtn(true)
        setShowTotal(true)
        setShowResults(true)
      }
    }
  }, [])
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('full').length === 2) {
      showBtn = false
      showTotal = false
      showResults = false
      noinfo = true
    }
  }

  if (typeof window !== 'undefined') {
    var handleFirstPage = () => {
      localStorage.setItem('option', 'all')
      localStorage.setItem('autostate', 'false')
      localStorage.setItem('filterstate', 'true')
      localStorage.removeItem('autovalue')
      Router.push('/')
    }
  }
  const handleModalSuccess = () => {
    setOpen(false)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      handleCreatOrder()
      errorTexthead = 'สั่งออร์เดอร์สำเร็จ'
      errorTextbody = 'กดปุ่มออร์เดอร์ เพื่อตรวจสอบความถูกต้อง'
      notifyError(errorTexthead, errorTextbody)
      reset()
      Router.push('/')
    }, 3000)
  }
  const handleModalUpdate = () => {
    setOpen(false)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      handleUpdateOrder()
      errorTexthead = 'สั่งออร์เดอร์สำเร็จ'
      errorTextbody = 'รออาหารประมาณ 10-20 นาที (สั่งเพิ่ม)'
      notifyError(errorTexthead, errorTextbody)
      reset()
      Router.push('/')
    }, 3000)
  }
  const handleModalCancle = () => {
    setOpen(false)
  }

  const handleModalClear = () => {
    reset()
    setShowBtn(false)
    setShowResults(false)
    setShowTotal(false)
    setOpen(false)
  }

  const handleCreatOrderOnclick = () => {
    if (typeof window !== 'undefined')
      if (localStorage.getItem('tokenexpire') === 'true') {
        errorTexthead =
          'QRcode หมดอายุ ติดต่อรับ QRcode ใหม่จากพนักงาน และทำการสแกนอีกครั้ง'
        if (toast.isActive(toastId1.current)) {
          toast.dismiss(toastId1.current)
          toastId1.current = notifyWarn(errorTexthead)
        } else toastId1.current = notifyWarn(errorTexthead)
      }
    if (
      localStorage.getItem('query') === 'ยังไม่มีหมายเลขโต๊ะ' ||
      localStorage.getItem('query' === null)
    ) {
      errorTexthead = 'รับ QRcode จากพนักงานเพื่อสั่งออเดอร์'

      if (toast.isActive(toastId1.current)) {
        toast.dismiss(toastId1.current)
        toastId1.current = notifyWarn(errorTexthead)
      } else toastId1.current = notifyWarn(errorTexthead)

      // localStorage.getItem('tokenexpire') || 'false'
      // localStorage.getItem('dupeorder') || 'false'
    }
    if (
      localStorage.getItem('tokenexpire') === 'false' &&
      localStorage.getItem('dupeorder') === 'false' &&
      localStorage.getItem('query') !== 'ยังไม่มีหมายเลขโต๊ะ'
    ) {
      errorTexthead =
        'QRcode นี้ไม่สามารถใช้งานได้ กรุณาติดต่อรับ QRcodeใหม่จากพนักงาน'
      if (toast.isActive(toastId1.current)) {
        toast.dismiss(toastId1.current)
        toastId1.current = notifyWarn(errorTexthead)
      } else toastId1.current = notifyWarn(errorTexthead)
    }
    if (localStorage.getItem('dupeorder') === 'true') {
      // ออเดอร์เพื่ม
      setCheckUpdate(true)
      setCheckFirstOrder(false)
      setClearCarts(false)
      setOpen(true)
    }

    if (
      (localStorage.getItem('tokenexpire') === 'false' &&
        localStorage.getItem('dupeorder') === 'first') || // false dupe เพราะ ยิงครั้งแรก เป็น true เพื่อเช็ค
      (localStorage.getItem('tokenexpire') === 'true' && // แก้ api ให้ยิง [] หรือ total = 0 แล้วไม่ order is have
        localStorage.getItem('dupeorder') === 'true') // update ค่า waiting ไม่เปลี่ยน
    ) {
      setCheckFirstOrder(true)
      setCheckUpdate(false)
      setClearCarts(false)
      setOpen(true)
    }
  }

  const Btn = () => (
    <div className="pt-4">
      <button
        onClick={(e) => {
          handleCreatOrderOnclick()
          // window.location.replace('/')
          // Router.push('/')  //optional
        }}
        // className="btn btn-1 btn-sep icon-send"
        className="border-2 border-inherit rounded-full  justify-center sm:rounded-full lg:rounded-full	md:rounded-full bg-[#1385ab] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-44 sm:w-44 md:w-44 lg:w-44"
      >
        ยืนยันการสั่ง
      </button>
    </div>
  )
  const Clear = () => (
    <div className="pb-20">
      <button
        // disabled={disable}
        onClick={(e) => {
          setClearCarts(true)
          setCheckFirstOrder(false)
          setCheckUpdate(false)
          setOpen(true)
        }}
        // className="btn btn-1 btn-sep icon-send"
        className="border-2 border-inherit rounded-full  justify-center sm:rounded-full lg:rounded-full	md:rounded-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 inline-flex items-center w-44 sm:w-44 md:w-44 lg:w-44"
      >
        ล้างตะกร้า
      </button>
    </div>
  )
  const Results = () => (
    <div className="bg-[#FFFFFF7F] flex justify-center">
      <table>
        <thead>
          <th className="w-48 md:w-64   lg:w-64 text-center">รายการอาหาร</th>
          <th className="w-20 md:w-32   lg:w-32 text-center">ราคา</th>
          <th className="w-20 md:w-32   lg:w-32 text-center">จำนวน</th>
          <th className="w-12 md:w-32    lg:w-32 text-center"></th>
        </thead>
      </table>
    </div>
  )
  const Totals = () => (
    <div className="pt-4 font-bold bg-[#FFFFFF7F] rounded-2xl mt-4 w-72 ">
      <div className="flex justify-center text-xl text-center">รวม VAT 7%</div>
      <div className="text-center py-2 text-3xl ">
        {((sum * 107) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ฿
      </div>
    </div>
  )
  const Noinfo = () => (
    <div>
      <div className="flex justify-center">
        <img className="w-36" src="/images/noresult.gif"></img>
      </div>
      <div className="pt-2 text-xl font-bold flex justify-center ">
        ไม่มีรายการที่จะแสดง
      </div>
    </div>
  )
  return (
    <div>
      <Loading loading={loading} />
      <body>
        <div className="img"></div>

        <div className="content">
          {headPage}
          <div className="lg:-mt-14 md:-mt-14 -mt-2">
            <b>
              <h1
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '38px',
                  textShadow: 'black 0px 5px 5px',
                  fontWeight: 900
                }}
              >
                สรุปรายการ
              </h1>
            </b>
          </div>
          <br />

          <div className="fixedHeightCardresult">
            {showResults ? <Results /> : null}

            <div className="contentCardresult">
              <div className="pt-18"> {noinfo ? <Noinfo /> : null}</div>

              {full.map((element, key) => {
                return (
                  <div key={key}>
                    <Item {...element} />
                  </div>
                )
              })}
              <div className="flex justify-center">
                {showTotal ? <Totals /> : null}
              </div>
              <div className="flex justify-center pt-2">
                {showBtn ? <Btn /> : null}
              </div>
              <div className="flex justify-center pt-2">
                {showBtn ? <Clear /> : null}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </body>

      <footer className="navbar flex justify-center">
        <Link href="/qrcodescanner">
          <button
            className="rounded-l-full border-2 border-inherit  justify-center sm:rounded-l-full lg:rounded-l-full	md:rounded-l-full	cursor-pointer notification bg-[#1382a9] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
            style={{ float: 'center' }}
          >
            {svgqrcode}
            <p style={{ fontSize: '15px' }}> สแกน</p>
          </button>
        </Link>

        <button
          onClick={handleFirstPage}
          className="border-2 border-inherit justify-center bg-[#1385ab] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
          style={{ float: 'center' }}
        >
          {svghome}
          <p style={{ fontSize: '15px' }}> หน้าแรก</p>
        </button>

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

      <Modal open={open}>
        <div className="modalcart rounded-2xl w-[340px]  md:w-[400px] py-3 bg-[#f2f5f2] border-double border-4 border-black">
          {checkupdate ? (
            <div className="flex justify-end -mr-1">
              <button
                onClick={() => setOpen(false)}
                className="rounded-full absolute text-xl font-bold bg-red-500 text-white -mt-8 w-12 text-center"
              >
                xปิด
              </button>
            </div>
          ) : null}
          <Box>
            {clearcarts ? (
              <div className="inline-flex items-center text-md  px-4  ">
                <span className="text-red-600 ">{svgwrong}</span>
                <span className="text-gray-600 px-2">
                  ข้อมูลในตะกร้าจะถูกล้างออกทั้งหมด คุณแน่ใจใช่หรือไม่?
                </span>
              </div>
            ) : null}
            {checkupdate ? (
              <div className="inline-flex items-center   text-md  px-4  ">
                <span className="text-[#1385ab] ">{svgwrong}</span>
                <span className="text-gray-600 px-2">
                  คุณมีออร์เดอร์ก่อนหน้า โปรดตรวจสอบก่อนการยืนยันสั่งเพิ่ม
                </span>
              </div>
            ) : null}
            {checkfistorder ? (
              <div className="inline-flex items-center   text-md  px-4  ">
                <span className="text-[#1385ab]  ">{svgwrong}</span>
                <span className="text-gray-600 px-2">
                  โปรดตรวจสอบรายการ ก่อนทำการยืนยันการสั่ง
                </span>
              </div>
            ) : null}

            <div>
              <div className="flex justify-evenly items-center py-2">
                <div className="">
                  {clearcarts ? (
                    <button
                      onClick={() => {
                        handleModalClear()
                      }}
                      className="w-28 h-8 text-white font-bold bg-green-500 rounded-2xl hover:bg-green-600"
                    >
                      <span className="text-md">ยืนยัน</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        checkupdate ? handleModalUpdate() : handleModalSuccess()
                      }}
                      className="w-28 h-8  text-white font-bold bg-green-500 rounded-2xl hover:bg-green-600"
                    >
                      <span className="text-md ">ยืนยันการสั่ง</span>
                    </button>
                  )}
                </div>
                <div>
                  {checkupdate ? (
                    <button
                      onClick={() => Router.push('/getorder')}
                      className="w-28 h-8 text-white font-bold bg-yellow-500 hover:bg-yellow-600 rounded-2xl hover:bg-red-600"
                    >
                      <span className="text-md">ตรวจสอบ</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleModalCancle}
                      className="w-28 h-8 text-white font-bold bg-red-500 rounded-2xl hover:bg-red-600"
                    >
                      <span className="text-md">ยกเลิก</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  )
}

export default cart
