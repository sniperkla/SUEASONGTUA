import '../styles/globals.css'
import '../styles/bnt.css'
import '../styles/notification.css'
import '../styles/nav.css'
import '../styles/styles.css'
import '../styles/contentcard.css'
import '../styles/contentcardforricenoodle.css'
import '../styles/contentcardresult.css'
import '../styles/alert.css'
import '../styles/contentcardgetorder.css'
import '../styles/modal.css'

import { toast } from 'react-toastify'
import { wrapper } from '../store/index'
import { Loading } from '../function/loading'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { notifytoast } from '../function/notify'
import { getOrderPages } from '../function/getorder'
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { notifyOrder, notifyError, notifyGetOrder, notifyCart, notifyTips } =
    notifytoast()
  const [a, seta] = useState(0) // timer
  const [b, setb] = useState(0) // timer
  const [c, setc] = useState(0) // timer
  const toastId = useRef(null)
  const toastId2 = useRef(null)
  const toastId3 = useRef(null)

  const { haveOrder, getsError } = getOrderPages()
  // tips switch

  useEffect(() => {
    if (
      localStorage.getItem('keymock') === '0' ||
      localStorage.getItem('keymock') === null
    )
      toast.dismiss(toastId2.current)
  })

  useEffect(() => {
    ////// Check Getorder /////
    if (sessionStorage.getItem('permaclose_order') !== 'true') {
      //perma ปิดการแสดง toast ถาวร
      if (getsError === null) {
        if (toast.isActive(toastId.current) === false)
          // เช็ค toast(x) ทำงานอยู่ไหม
          toastId.current = notifyGetOrder(
            // toast(x )ปัจจุบัน
            'คุณมีออร์เดอร์อยู่ โปรดตรวจสอบความถูกต้อง'
          )
      }
    }
    setTimeout(() => {
      setc((c) => c + 1)
    }, 20000)
  }, [c])
  useEffect(() => {
    ////// Check Cart ////////
    if (sessionStorage.getItem('permaclose_cart') !== 'true') {
      if (
        localStorage.getItem('keymock') !== '0' &&
        localStorage.getItem('keymock') !== null
      ) {
        if (toast.isActive(toastId2.current) === false)
          toastId2.current = notifyCart('คุณมีรายการในตะกร้าที่ยังไม่ได้สั่ง')
      } else toast.dismiss(toastId2.current)
    }

    setTimeout(() => {
      seta((a) => a + 1)
    }, 20000)
  }, [a])

  useEffect(() => {
    if (sessionStorage.getItem('permaclose_tips') !== 'true') {
      if (sessionStorage.getItem('switchtoast') === null) {
        sessionStorage.setItem('switchtoast', '1')
      }
      if (sessionStorage.getItem('switchtoast') === '1') {
        toastId3.current = notifyTips(
          'Tip: คุณสามารถแจ้งปัญหาได้ที่หน้าออเดอร์' // tip 1
        )
        sessionStorage.setItem('switchtoast', '0')
      } else if (sessionStorage.getItem('switchtoast') === '0') {
        toastId3.current = notifyTips(
          'Tip: ไม่รู้จะกินอะไรลองกดเลือกประเภทดูสิ มีเมนูมากมายรอคุณอยู่'
        ) // tip2
        sessionStorage.setItem('switchtoast', '2')
      } else if (sessionStorage.getItem('switchtoast') === '2') {
        toastId3.current = notifyTips(
          'Tip: สามารถสแกน​ QRcode ผ่านเว็บได้ตรงเมนูด้านล่าง'
        ) // tip2
        sessionStorage.setItem('switchtoast', '3')
      } else if (sessionStorage.getItem('switchtoast') === '3') {
        toastId3.current = notifyTips(
          'Tip: สามารถกดรูปเมนู เพื่อดูภาพขนาดใหญ่ได้'
        ) // tip2
        sessionStorage.setItem('switchtoast', '1')
      }
      setTimeout(() => {
        setb((b) => b + 1)
        if (toastId3.current !== null) toast.dismiss(toastId3.current)
      }, 17000)
    }
  }, [b])

  //​ Loading when route has change

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    }
    const handleComplete = (url) => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: K2D;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <script
        src="https://unpkg.com/html5-qrcode"
        type="text/javascript"
      ></script>

      <Loading loading={loading} />

      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
