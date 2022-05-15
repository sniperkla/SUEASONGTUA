import React, { useState, useEffect, useRef } from 'react'
import { dataPush } from '../hooks/cartlist'
import { datas } from '../helper/datamock'
import { useCartMenu } from '../hooks/cart'
import { notifytoast } from './notify'
import Image from 'next/image'
import { toast } from 'react-toastify'
import ImageWithFallback from '../helper/imgfallback'

import { Modal } from '@mui/material'
export const gridclass2 = (alone) => {
  const [countcart, setCountCart] = useState(0)
  var choose = ''

  const { array, incButton } = dataPush()
  const { counter, full, sum } = useCartMenu()
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState('')
  const [check, setCheck] = useState(false)
  const [imgerror, setImageError] = useState(false)
  const toastId1 = useRef(null)
  const datafull = array
  // const { datafull } = datas()

  useEffect(() => {
    if (typeof window !== 'undefined')
      if (localStorage.getItem('autostate') === 'true') setCheck(true)
      else if (localStorage.getItem('autostate') === 'false') setCheck(false)
  })

  var get = 0
  const { notifyOrder } = notifytoast()
  const clickme = (e) => {
    incButton(choose)
    setCountCart(countcart + 1)
  }

  for (let i = 0; i < full.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (full[i] !== undefined) {
        if (full[i].name === datafull[j].nameThai) {
          datafull[j].count = 'x' + full[i].count
        }
      }
    }
  }

  return (
    <div className={check ? 'flex justify-center p-2' : 'flex justify-center'}>
      <div
        className={
          check
            ? 'grid grid-cols-1'
            : 'grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-screen px-6 lg:px-4 '
        }
      >
        {datafull.map(
          (
            data //use datas if serverdown
          ) => (
            <div
              style={{ backgroundColor: '#FFFFFF7F' }}
              className=" shadow-lg flex mb-2 mx-1 rounded-3xl"
              key={datafull.indexOf(data)}
            >
              <div className="flex justify-items-center	items-center">
                <div className="block mt-1 ml-1 p-1">
                  <ImageWithFallback
                    className="rounded-2xl"
                    width="112"
                    height="112"
                    src={data.img}
                    fallbackSrc="/images/404.gif"
                    onClick={(event) => {
                      get = datafull.indexOf(data)
                      if (get === datafull.indexOf(data)) {
                        setImage(data.img) // ต่อ modal
                        setOpen(true)
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex-1 m-1 mb-2">
                <div className="mt-3">
                  <p className="limit-text text-xl px-1 font-bold">
                    {data.nameThai}
                  </p>
                  <p className="limit-text text-md px-1">{data.details}</p>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-6 flex justify-items-center	items-center">
                      <p className="text-xl text-center font-bold -ml-2 -mt-4">
                        {data.price} ฿
                      </p>
                    </div>
                    <div className="col-span-6 pr-2 flex justify-items-center	items-center">
                      {data.count ? (
                        <button
                          className="bg-green-500 hover:bg-green-600 border-2 border-red-500 text-white font-bold rounded-lg float-right w-28 h-10 text-lg"
                          onClick={(event) => {
                            get = array.indexOf(data)
                            if (get === array.indexOf(data)) {
                              choose = data.nameThai
                              clickme()
                              if (toast.isActive(toastId1.current)) {
                                toast.dismiss(toastId1.current)
                                toastId1.current = notifyOrder(choose)
                              } else toastId1.current = notifyOrder(choose)
                            }
                          }}
                        >
                          {data.count ? data.count : 'เพิ่ม'}
                        </button>
                      ) : (
                        <button
                          className="bg-[#1382a9] hover:bg-[#036a8f] border-2 border-white text-white font-bold rounded-lg float-right w-28 h-10 text-sm"
                          onClick={(event) => {
                            get = array.indexOf(data)
                            if (get === array.indexOf(data)) {
                              choose = data.nameThai
                              clickme()
                              if (toast.isActive(toastId1.current)) {
                                toast.dismiss(toastId1.current)
                                toastId1.current = notifyOrder(choose)
                              } else toastId1.current = notifyOrder(choose)
                            }
                          }}
                        >
                          {data.count ? data.count : 'เพิ่ม'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          )
        )}
      </div>

      <Modal open={open}>
        <div className="modalimage bg-transparent rounded-2xl  w-[380px] h-auto md:w-[400px]">
          <div className="px-2  float-right">
            <button
              onClick={() => setOpen(false)}
              className="w-16 text-2xl text-white font-bold bg-red-500 hover:bg-red-600"
            >
              x ปิด
            </button>
          </div>
          <img
            className="rounded-2xl w-auto h-auto md:w-[400px]"
            src={image}
          ></img>
        </div>
      </Modal>
    </div>
  )
}
