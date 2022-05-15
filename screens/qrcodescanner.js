import React, { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { svgpic } from '../function/svg'
import { notifytoast } from '../function/notify'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getOrder } from '../store/actions/getorder'
import { useDispatch } from 'react-redux'
import { getOrders } from '../hooks/getorder'

const QrcodeScanner = () => {
  const [scannedCodes, setScannedCodes] = useState([])
  const { svgcart, svgshare, svgcopy, svgclick } = svgpic()
  const [buttonResult, showButtonResult] = useState(false)
  const [copy, setCopy] = useState(false)
  const { notifyQrscanner } = notifytoast()
  const [check, setCheck] = useState(false)
  const [hidebtn, setHideBtn] = useState(false)
  var text = ''
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const html5QrCode = new Html5Qrcode('reader')
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      showButtonResult(true)
      setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]))
      sessionStorage.setItem('copy', decodedText)

      if (typeof window !== 'undefined') text = sessionStorage.getItem('copy')

      const check = 'undefined'
      if (text.includes(check) === true) {
        setCheck(true)
        setHideBtn(true)
      } else {
        setCheck(false)
        setHideBtn(false)
      }

      setOpen(true)
    }

    const config = { fps: 10, qrbox: { width: 250, height: 250 } }

    // If you want to prefer back camera
    html5QrCode.start(
      { facingMode: 'environment' },
      config,
      qrCodeSuccessCallback
    )
  }, [])

  const enter = () => {
    setCheck(false)
    if (typeof window !== 'undefined')
      window.location.replace(`http://${sessionStorage.getItem('copy')}`)
  }
  const firstpage = () => {
    window.location.replace('/')
  }

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div id="reader" className="w-auto"></div>
      </div>
      <footer className="navbar flex justify-center">
        {buttonResult ? (
          <button
            onClick={() => {
              setCopy(true)
              {
                typeof window !== 'undefined' &&
                  navigator.clipboard.writeText(sessionStorage.getItem('copy'))
              }
              notifyQrscanner()
            }}
            className="rounded-l-full border-2 border-inherit  justify-center sm:rounded-l-full lg:rounded-l-full	md:rounded-l-full	cursor-pointer  bg-[#1382a9] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
            style={{ float: 'center' }}
          >
            {svgcopy}
            <p style={{ fontSize: '15px' }}>copy</p>
          </button>
        ) : (
          <button
            className="rounded-l-full border-2 border-inherit  justify-center sm:rounded-l-full lg:rounded-l-full	md:rounded-l-full	cursor-pointer  bg-[#1382a9] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
            style={{ float: 'center' }}
          >
            {svgcopy}
            <p style={{ fontSize: '15px' }}>Copy</p>
          </button>
        )}
        <button
          onClick={firstpage}
          className="border-2 border-inherit   justify-center bg-[#1385ab] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
          style={{ float: 'center' }}
        >
          {svgcart}
          <p style={{ fontSize: '15px' }}>หน้าแรก</p>
        </button>

        {buttonResult ? (
          <button
            onClick={() => {
              navigator.share({
                text:
                  typeof window !== 'undefined' &&
                  sessionStorage.getItem('copy')
              })
            }}
            className="rounded-r-full border-2 border-inherit   justify-center sm:rounded-r-full lg:rounded-r-full	md:rounded-r-full	cursor-pointer  bg-[#1382a9] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
            style={{ float: 'center' }}
          >
            {svgshare}
            <p style={{ fontSize: '15px' }}>แชร์</p>
          </button>
        ) : (
          <button
            className="rounded-r-full border-2 border-inherit   justify-center sm:rounded-r-full lg:rounded-r-full	md:rounded-r-full	cursor-pointer  bg-[#1382a9] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
            style={{ float: 'center' }}
          >
            {svgshare}
            <p style={{ fontSize: '15px' }}>แชร์</p>
          </button>
        )}
      </footer>

      <Modal open={open}>
        <div className="modalscanner rounded-2xl w-[340px]  md:w-[400px] py-3 bg-[#f2f5f2] border-double border-4 border-black">
          <div className="flex justify-end -mr-1">
            <button
              onClick={() => setOpen(false)}
              className="rounded-full absolute text-xl font-bold bg-red-500 text-white -mt-8 w-12 text-center"
            >
              Xปิด
            </button>
          </div>
          <div className="py-4">
            {check ? (
              <div className="text-md px-4">
                กรุณาสแกนใหม่ QRcode นี้ไม่สามารถใช้งานได้ :{' '}
                {typeof window !== 'undefined' &&
                  sessionStorage.getItem('copy')}
              </div>
            ) : (
              <div className="text-md px-4">
                คุณแน่ใจใช่ไหมจะไปยังผลลัพธ์ :{' '}
                {typeof window !== 'undefined' &&
                  sessionStorage.getItem('copy')}
              </div>
            )}
          </div>
          <div>
            {hidebtn ? null : (
              <div className="flex justify-center items-center">
                <button
                  className="w-36 h-8 text-white font-bold bg-green-500 rounded-2xl hover:bg-green-600"
                  onClick={enter}
                >
                  <span className="text-xl"> สั่งอาหาร </span>
                </button>
                <span className="px-4">
                  <button
                    onClick={() => {
                      setCopy(true)
                      {
                        typeof window !== 'undefined' &&
                          navigator.clipboard.writeText(
                            sessionStorage.getItem('copy')
                          )
                      }

                      notifyQrscanner()
                    }}
                    className="w-36 h-8 text-white font-bold hover:bg-[#097396]  bg-[#1284AF] rounded-2xl"
                  >
                    <span className="text-xl"> คัดลอก </span>
                  </button>
                </span>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default QrcodeScanner
