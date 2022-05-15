import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
export const notifytoast = () => {
  const notifyQrscanner = () =>
    toast.success(
      <div>
        <p className="text- lg:text-xs md:text-xs font-bold">คัดลอกสำเร็จ</p>
        <p className="text-xs lg:text-xs md:text-xs">
          คัดลอกข้อมูลเรียบร้อยแล้ว
        </p>
      </div>,
      {
        // theme: 'colored',
        position: toast.POSITION.TOP_CENTER,
        autoClose: 800
      }
    )

  const notifyOrder = (nameThai) =>
    toast.success(
      <div>
        <p className="text-xs lg:text-xs md:text-xs font-bold">สำเร็จ</p>
        <p className="text-xs lg:text-xs md:text-xs">
          {nameThai} ถูกเพิ่มลงตะกร้า
        </p>
      </div>,
      {
        // theme: 'colored',
        position: toast.POSITION.TOP_LEFT,
        autoClose: 800
      }
    )

  const notifyRemoveItem = (name) =>
    toast.error(
      <div className="">
        <p className="text-xs lg:text-xs md:text-xs font-bold">ลบข้อมูล</p>
        <p className="text-xs lg:text-xs md:text-xs">
          <span className="font-bold text-xs lg:text-xs md:text-xs">
            {name}
          </span>
          ถูกลบออกจากตะกร้า
        </p>
      </div>,
      {
        // theme: 'colored',
        position: toast.POSITION.TOP_LEFT,
        autoClose: 800
      }
    )
  const notifyError = (errorText, errorTextbody) =>
    toast.success(
      <div className="-mb-2 ">
        <p className=" text-xs lg:text-xs md:text-xs">{errorText}</p>
        <div className="flex">
          <p className="text-xs lg:text-xs md:text-xs ">{errorTextbody}</p>
        </div>
        <div className="">
          <p className=" flex justify-end text-xs lg:text-xs md:text-xs">
            กดเพื่อปิดแจ้งเตือน
          </p>
        </div>
      </div>,
      {
        //theme: 'colored',
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 15000
      }
    )
  const notifyWarn = (errorText, errorTextbody) =>
    toast.error(
      <div className="-mb-2 ">
        <p className=" text-xs lg:text-xs md:text-xs ">{errorText}</p>
        <div className="flex">
          <p className="text-xs lg:text-xs md:text-xs ">{errorTextbody}</p>
        </div>
        <div className="">
          <p className="flex justify-end text-xs lg:text-xs md:text-xs">
            กดเพื่อปิดแจ้งเตือน
          </p>
        </div>
      </div>,
      {
        //  theme: 'colored',
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 15000
      }
    )

  const handlenotifygetorder = (e) => {
    e.preventDefault()
    sessionStorage.setItem('permaclose_order', 'true')
  }
  const handlenotifycart = (e) => {
    e.preventDefault()
    sessionStorage.setItem('permaclose_cart', 'true')
  }
  const handlenotifytips = (e) => {
    e.preventDefault()
    sessionStorage.setItem('permaclose_tips', 'true')
  }
  const notifyGetOrder = (errorText, errorTextbody) =>
    toast.warn(
      <div className="-mb-2 ">
        <p className="text-xs lg:text-xs md:text-xs">{errorText}</p>
        <div className="flex">
          <p className="text-xs lg:text-xs md:text-xs ">{errorTextbody}</p>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="flex justify-start">
            <button
              onClick={handlenotifygetorder}
              className="bg-red-500 h-6 rounded-2xl hover:bg-violet-600 text-xs lg:text-xs md:text-xs"
            >
              <span className="text-white text-xs font-bold lg:text-xs md:text-xs  px-2">
                x ปิดถาวร
              </span>
            </button>
          </div>
          <div className="flex justify-end">
            <p className="text-xs lg:text-xs md:text-xs">กดเพื่อปิดแจ้งเตือน</p>
          </div>
        </div>
      </div>,
      {
        //    theme: 'colored',
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false
      }
    )
  const notifyCart = (errorText, errorTextbody) =>
    toast.warn(
      <div className="-mb-2 ">
        <p className="text-xs lg:text-xs md:text-xs">{errorText}</p>
        <div className="flex">
          <p className="text-xs lg:text-xs md:text-xs ">{errorTextbody}</p>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="flex justify-start">
            <button
              onClick={handlenotifycart}
              className="bg-red-500 h-6 rounded-2xl hover:bg-violet-600 text-xs lg:text-xs md:text-xs"
            >
              <span className="text-white text-xs font-bold lg:text-xs md:text-xs  px-2">
                x ปิดถาวร
              </span>
            </button>
          </div>
          <div className="flex justify-end">
            <p className="text-xs lg:text-xs md:text-xs">กดเพื่อปิดแจ้งเตือน</p>
          </div>
        </div>
      </div>,
      {
        //     theme: 'colored',
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false
      }
    )

  const notifyTips = (errorText, errorTextbody) =>
    toast.info(
      <div className="-mb-2 ">
        <p className="text-xs lg:text-xs md:text-xs">{errorText}</p>
        <div className="flex">
          <p className="text-xs lg:text-xs md:text-xs ">{errorTextbody}</p>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="flex justify-start">
            <button
              onClick={handlenotifytips}
              className="bg-red-500 h-6 rounded-2xl hover:bg-violet-600 text-xs lg:text-xs md:text-xs"
            >
              <span className="text-white text-xs font-bold lg:text-xs xs:text-xs  px-2">
                x ปิดถาวร
              </span>
            </button>
          </div>
          <div className="flex justify-end">
            <p className="text-xs lg:text-xs md:text-xs">กดเพื่อปิดแจ้งเตือน</p>
          </div>
        </div>
      </div>,
      {
        // theme: 'colored',
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false
      }
    )

  return {
    notifyQrscanner,
    notifyOrder,
    notifyWarn,
    notifyRemoveItem,
    notifyError,
    notifyCart,
    notifyGetOrder,
    notifyTips
  }
}
