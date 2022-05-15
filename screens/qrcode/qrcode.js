import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QRCode from 'qrcode'
import { url } from '../../config/url'
import Router from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { getLogins } from '../../hooks/getlogin'
import { svgpic } from '../../function/svg'
import { Modal } from '@mui/material'
import { getTableOrder } from '../../store/actions/tableorder'

function Qrcode() {
  var base64 = ''
  const dispatch = useDispatch()
  const urlmain = url.main
  var value = [{ table: 'user' }] //
  const cookies = parseCookies()
  const { svglogout } = svgpic()
  const getsError = useSelector((state) => state.tableOrder.getsError)
  const tableOrders = useSelector((state) => state.tableOrder.tableOrders)

  const [showResults, setShowResults] = useState(false)
  const { handlegetLogins, loginState } = getLogins()
  const [first, setFirst] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (cookies.token !== undefined) {
      setFirst(true)
      setShowResults(true)
    }
  }, [loginState])
  useEffect(() => {
    if (cookies.token === undefined || getsError === 'Invalid Token') {
      alert('กรุณาล็อกอินก่อนเข้าใช้งาน')
      Router.push('/login')
    }
  }, [])

  const Results = () => (
    <div>
      <button
        onClick={handleLogout}
        className="inline-flex items-center border-2 border-white w-40 py-2 hover:bg-red-600 rounded-full bg-red-500 text-gray-100 font-black focus:outline-none "
      >
        <div className="ml-4">{svglogout}</div>
        <p className="ml-1" style={{ fontSize: '18px' }}>
          ออกจากระบบ
        </p>
      </button>
    </div>
  )

  const handleQrcode = (e) => {
    e.preventDefault()
    if (getsError === 'Invalid Token') {
      alert('session หมดอายุ กรุณาloginใหม่')
      destroyCookie(null, 'token')
      Router.push('/login')
    }
    setFirst(false)
    if (cookies.token !== undefined) {
      dispatch(getTableOrder(value[0]))
    }
  }

  const handleLogout = () => {
    setOpen(true)
    // ไว้ใน modal
  }
  QRCode.toDataURL(`${urlmain}${tableOrders.data}`, function (err, url) {
    base64 = url
  })
  return (
    <>
      <center>
        <div className="img">
          <div className="flex h-screen justify-center items-center">
            <div className="w-96 md:w-2/3 lg:w-1/3 rounded-3xl bg-gradient-to-l from-[#097396]">
              <p
                className="relative"
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '35px',
                  textShadow: '#1284AF 0px 5px 5px',
                  fontWeight: '900'
                }}
              >
                กดปุ่มเพื่อสร้าง QRCODE
              </p>

              {first ? (
                <img
                  className="rounded-xl pt-4 object-fit h-96  w-80"
                  alt="QRCODE"
                  src="/images/qrcode.gif"
                />
              ) : (
                <img
                  className="rounded-xl pt-4 object-fit h-96  w-80"
                  alt="QRCODE"
                  src={base64}
                />
              )}
              <div className="-mt-8">
                <button
                  className="text-1xl border-2 border-white  w-2/4 py-2 hover:bg-[#097396] rounded-full bg-[#1284AF] text-gray-100 font-black focus:outline-none"
                  onClick={handleQrcode}
                >
                  สร้าง QRCODE
                </button>
              </div>
              <div className="pt-4">{showResults ? <Results /> : null}</div>
            </div>
            <Modal open={open}>
              <div className="modalqrcode bg-white w-[300px] rounded-2xl h-[100px]">
                <p className="p-4">คุณต้องการออกจากระบบ?</p>
                <div classname="grid grid-cols-4 gap-4">
                  <div className="px-4">
                    <button
                      onClick={() => {
                        destroyCookie(null, 'token')
                        Router.push('/login')
                      }}
                      className="w-20 bg-green-500 hover:bg-green-600 rounded-2xl "
                    >
                      <span className="text-white font-bold"> ยืนยัน </span>
                    </button>
                    <span className="px-4">
                      <button
                        onClick={() => setOpen(false)}
                        className=" w-20 bg-red-500   hover:bg-red-600 rounded-2xl "
                      >
                        <span className="text-white font-bold"> ยกเลิก</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </center>
    </>
  )
}

export default Qrcode
