// import { allData } from '../hooks/data'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { getData } from '../store/actions/data'

// export const getDatas = () => {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getData())
//   }, [])

//   var datas = []
//   const getDataa = allData()

//   var nameths = []
//   var prices = []
//   var details = []
//   var types = []
//   var images = []

//   const getva = getDataa.data
//   if (getva !== null) {
//     var nameth = getva.data.map((data1) => data1.nameThai)
//     var price = getva.data.map((data2) => data2.price)
//     var detail = getva.data.map((data5) => data5.details)
//     var type = getva.data.map((data6) => data6.type)
//     var image = getva.data.map((data7) => data7.img)

//     console.log('detail', detail.length)
//   }
//   nameths = nameth
//   prices = price
//   details = detail
//   types = type
//   images = image
//   console.log('detail2', details.length)

//   return [nameths, prices, details, types, images]
// }
