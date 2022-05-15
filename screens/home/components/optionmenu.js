import Router from 'next/router'
import Link from 'next/link'
export const optionMenu = () => {
  const handleDrink = (e) => {
    e.preventDefault
    localStorage.setItem('option', 'เครื่องดื่ม')
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
    Router.push('/drink')
  }
  const handleSushi = (e) => {
    e.preventDefault()
    localStorage.setItem('option', 'sushiall')
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
    Router.push('/sushi')
  }
  const handleAppitizer = (e) => {
    e.preventDefault()
    localStorage.setItem('option', 'appitizer')
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
    Router.push('/appitizer')
  }
  const handleNooddle = (e) => {
    e.preventDefault()
    localStorage.setItem('option', 'ricenoodle')
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
    Router.push('/ricenoodle')
  }

  return (
    <center>
      <div className="grid grid-cols-4 grid-flow-col md:px-40 lg:px-80 flex justify-evenly py-2">
        <div className="cursor-pointer">
          <img
            onClick={handleDrink}
            className="w-10 sm:w-8 lg:w-12 md:w-10"
            src="/images/drink1.png"
          ></img>

          <p className="mt-1 ">เครื่องดื่ม</p>
        </div>
        <div className="cursor-pointer">
          <img
            onClick={handleSushi}
            className="w-10 sm:w-8 lg:w-12 md:w-10"
            src="/images/sushi1.png"
          ></img>

          <p className="mt-1 ">ซูชิ</p>
        </div>
        <div className="cursor-pointer">
          <img
            onClick={handleAppitizer}
            className="w-10 sm:w-8 lg:w-12 md:w-10"
            src="/images/snack1.png"
          ></img>

          <p className="mt-1 ">ของทานเล่น</p>
        </div>
        <div className="cursor-pointer">
          <img
            onClick={handleNooddle}
            className="w-10 sm:w-8 lg:w-12 md:w-10 "
            src="/images/noodle1.png"
          ></img>

          <p className="mt-1">ข้าว+เส้น</p>
        </div>
      </div>
    </center>
  )
}
