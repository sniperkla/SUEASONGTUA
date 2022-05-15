import React from 'react'

export const Loading = (props) => {
  return (
    <div className={props.loading ? '' : 'none'}>
      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black/70">
        <div className="py-2 px-5 rounded-lg flex items-center flex-col">
          <img src="/images/process.gif" className="w-64"></img>
          {/* <span className="text-[24px] font-bold text-white">
            กำลังประมวลผลคำสั่งซื้อ
          </span> */}
          {/* <div className="loader-dots block relative w-24 h-5 -mt-20">
            <div className="absolute top-0 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
            <div className="absolute top-0 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
            <div className="absolute top-0 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
            <div className="absolute top-0 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
