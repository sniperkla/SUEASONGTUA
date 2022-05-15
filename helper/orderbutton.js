import Link from 'next/link'
import { svgpic } from '../function/svg'
export const orderbutton = () => {
  const { svglist } = svgpic()
  const orderButton = (
    <Link href={'/getorder'}>
      <button
        className="rounded-r-full border-2 border-red-500   justify-center sm:rounded-r-full lg:rounded-r-full	md:rounded-r-full	cursor-pointer notification bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 inline-flex items-center w-3/4 sm:w-52 md:w-60 lg:w-72"
        style={{ float: 'center' }}
      >
        {svglist}
        <p style={{ fontSize: '15px' }}>ออร์เดอร์</p>
        <span className="badge2">
          <img className="w-12 h-12" src="/images/cooking3.gif"></img>
        </span>
      </button>
    </Link>
  )
  return { orderButton }
}
