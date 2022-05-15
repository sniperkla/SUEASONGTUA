import Link from 'next/link'
export const drinkOption = () => {
  const handleDrink = (e) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      localStorage.setItem('option', 'เครื่องดื่มแอลกอฮอล์')
    }
  }
  return (
    <center>
      <div className="grid grid-rows-6 gap-20 mt-6">
        <div className="cursor-pointer">
          <img
            onClick={handleDrink}
            className="w-6 sm:w-8 lg:w-8 md:w-8"
            src="/images/hotdrink.png"
          ></img>
          <p>ร้อน</p>
        </div>

        <div className="cursor-pointer">
          <Link href="/">
            <img
              className="w-6 sm:w-8 lg:w-8 md:w-8"
              src="/images/colddrink.png"
            ></img>
          </Link>
          <p>เย็น</p>
        </div>
        <div className="cursor-pointer">
          <Link href="/">
            <img
              className="w-6 sm:w-8 lg:w-8 md:w-8"
              src="/images/coffee.png"
            ></img>
          </Link>
          <p>กาแฟ</p>
        </div>
        <div className="cursor-pointer">
          <Link href="/">
            <img
              className="w-6 sm:w-8 lg:w-8 md:w-8"
              src="/images/alchohol.png"
            ></img>
          </Link>
          <p>Lกฮ</p>
        </div>
        <div className="cursor-pointer">
          <Link href="/">
            <img
              className="w-6 sm:w-8 lg:w-8 md:w-8"
              src="/images/frappe.png"
            ></img>
          </Link>
          <p>ปั่น</p>
        </div>
      </div>
    </center>
  )
}
