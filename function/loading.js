import React from 'react'

export const Loading = (props) => {
  return (
    <div className={props.loading ? '' : 'none'}>
      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-transparent	">
        <div className="bg-transparent py-2 px-5 rounded-lg flex items-center flex-col">
          <img src="/images/loading.gif" alt="food waiting" className="w-24" />
          <div className="loader-dots block relative w-24 h-5 ">
            <div className="absolute top-0 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
            <div className="absolute top-0 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
            <div className="absolute top-0 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
            <div className="absolute top-0 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
