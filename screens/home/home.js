import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import AltCard from './components/cardlist'
import filter from './components/filter'
import autocomplete from './components/autocomplete'
import { useRouter } from 'next/router'
import { beforeInit } from '../../function/beforeinitial'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { svgpic } from '../../function/svg'
import { sortingData } from '../../function/sorting'
import { optionMenu } from './components/optionmenu'
import { slideShow } from '../../helper/slide'
import { headPages } from './components/headpage'
import { orderbutton } from '../../helper/orderbutton'
import { checkOrder } from '../../function/checkorder'

export default function Home() {
  const Menuoption = optionMenu()
  const cookies = parseCookies()
  const router = useRouter()
  const [sorting, setsorting] = useState('default')
  const { svgcart, svgqrcode, svglist, svglogin } = svgpic()
  const slideShows = slideShow()
  const headPage = headPages()
  const { showorder } = checkOrder()
  const [showRec, setShowRec] = useState(false)
  const { orderButton } = orderbutton()
  /// hook cart ทำต่อ

  // const [showorder, setShoworder] = useState(false)
  if (typeof window !== 'undefined') {
    var pid = localStorage.getItem('query') || 'ยังไม่มีหมายเลขโต๊ะ'
    localStorage.setItem('query', pid)
    if (
      localStorage.getItem('autovalue') === null ||
      localStorage.getItem('autovalue') === 'null' ||
      localStorage.getItem('option') === null
    ) {
      localStorage.setItem('autostate', 'false')
      localStorage.setItem('filterstate', 'true')
      localStorage.setItem('option', 'all')
      localStorage.removeItem('autovalue')
    }

    var counter = window.localStorage.getItem('keymock' || 0)
    if (Object.keys(router.query).length !== 0) {
      beforeInit(router.query.table)
    }
    //  else if (Object.keys(router.query).length === 0) {
    //   console.log('no table alert')
    // }
    if (localStorage.getItem('query') === 'ยังไม่มีหมายเลขโต๊ะ') {
      localStorage.setItem('tokenexpire', 'false')
      localStorage.setItem('dupeorder', 'false')
    }
    if (
      Object.keys(cookies).length === 0 &&
      localStorage.getItem('query') !== 'ยังไม่มีหมายเลขโต๊ะ'
    ) {
      localStorage.setItem('query', 'ยังไม่มีหมายเลขโต๊ะ')
      console.log('expire')
    }

    // var handlesorting = () => {
    //   sortingData(setsorting, setText)
    // }
    
  }


  return (
    <>
      <div className="img"></div>
      <div className="content">
        {headPage}
        <div className="py-4 md:-mt-16 lg:-mt-16">
          {autocomplete()}
          {/* {filter()} */}
        </div>
        {slideShows}
        {Menuoption}
        <div className="flex justify-center p-2">
          {showRec ? recommend : null}
        </div>
        <div className="pb-10">{AltCard()}</div>
      </div>

      <footer className="navbar flex justify-center">
        <Link href="/qrcodescanner">
          <button
            className="rounded-l-full border-2 border-inherit  justify-center sm:rounded-l-full lg:rounded-l-full	md:rounded-l-full	cursor-pointer notification bg-[#1382a9] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
            style={{ float: 'center' }}
          >
            {svgqrcode}
            <p style={{ fontSize: '15px' }}>สแกน</p>
          </button>
        </Link>
        <Link href="/cart">
          <button
            className="border-2 border-inherit notification  justify-center bg-[#1385ab] hover:bg-[#036a8f] text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
            style={{ float: 'center' }}
          >
            {svgcart}
            <p style={{ fontSize: '15px' }}> ตะกร้า</p>
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
    </>
  )
}
