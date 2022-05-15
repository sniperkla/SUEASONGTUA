import React, { useState, useEffect, useRef } from 'react'
import { getLogins } from '../../hooks/getlogin'
import Router from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { formLogin } from '../../helper/form'
import { svgpic } from '../../function/svg'

export default function Login() {
  const { handlegetLogins, loginState, getsError } = getLogins()
  const [inputu, setInputu] = useState('')
  const [inputp, setInputp] = useState('')
  const [form, setUpform] = useState(false)
  const [form2, setUpform2] = useState(false)
  const [attemp, setUpattemp] = useState(0)
  const { formvalid, formvalid2 } = formLogin(attemp)
  const { svglogin } = svgpic()
  const cookies = parseCookies()
  const isFirstRun = useRef(true)
  var mock = { username: inputu, password: inputp }
  const handleCheck = (e) => {
    e.preventDefault()
    handlegetLogins(mock)
  }

  useEffect(() => {
    if (cookies.token !== undefined) {
      alert('กรุณาออกจากระบบก่อน')
      Router.push('/qrcode')
    }
  }, [])
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    if (loginState.accessibility === 'admin') {
      alert(`เข้าสู่ระบบในชื่อ ${loginState.adminName}`)
      setCookie(null, 'token', loginState.token, {
        maxAge: 4 * 60 * 60,
        path: '/'
      })
      Router.push('/qrcode')
    } else if (getsError === 'All input is required') {
      setUpform(true)
      setUpform2(false)
    } else if (getsError === 'Invalid Credentials') {
      setUpattemp(attemp + 1)
      setUpform2(true)
      setUpform(false)
    }
  }, [loginState])

  return (
    <body className="img">
      <div className="w-full h-screen flex items-center justify-center">
        <form className="sm:w-96 md:w-96 lg:w-96 rounded-2xl bg-cover bg-center bg-gradient-to-l from-[#097396]">
          <div className="flex font-bold justify-center mt-6">
            <img className="h-28 w-28" src="/images/head.png"></img>
          </div>
          <br />
          <h1
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: '26px',
              textShadow: '#1284AF 0px 5px 5px',
              fontWeight: '800'
            }}
            className="text-center mb-4"
          >
            ล็อคอินเพื่อเข้าสู่ระบบ
          </h1>
          <h2
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: '20px',
              textShadow: '#1284AF 0px 5px 5px',
              fontWeight: '900'
            }}
            className="mb-5 "
          >
            - SUEASONGTUA SUSHI -
          </h2>

          <div className="px-12 pb-10">
            <div className="w-full mb-2">
              <div className="flex items-center justify-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(event) => setInputu(event.target.value)}
                  className="-mx-6  lg:w-64  border rounded px-8 py-2 text-gray-700 focus:outline-red-500"
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center justify-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="-mx-6 lg:w-64  border rounded px-8 py-2 text-gray-700 focus:outline-red-500

                  "
                  onChange={(event) => setInputp(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="-mt-8  flex justify-center">
            {form ? formvalid : null}
            {form2 ? formvalid2 : null}
          </div>
          <div className="mt-12 flex justify-center">
            <button
              type="submit"
              onClick={handleCheck}
              className="inline-flex items-center border-2 border-white  w-40 py-2 hover:bg-[#097396] rounded-full bg-[#1284AF] text-gray-100 font-black focus:outline-none mb-8 -mt-4"
            >
              <div className="ml-6">{svglogin}</div>
              <p className="ml-1" style={{ fontSize: '18px' }}>
                เข้าสู่ระบบ
              </p>
            </button>
          </div>
        </form>
      </div>
    </body>
  )
}
