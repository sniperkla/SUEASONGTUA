import { allData } from '../hooks/data'
import { datas } from '../helper/datamock'
import { RollerShadesClosed } from '@mui/icons-material'

export const dataPush = () => {
  const { datafull } = datas()
  let full = {}
  let showitem = []
  let option = ''
  let k = []
  let nameth
  let nameeng
  let price
  let id
  let detail
  let type
  let image
  let array = []
  let arrayDrink = []
  let arrayAppitizer = []
  let arraySushi = []
  let arrayRiceNoodle = []
  let arrayCheck = []
  // const { userData, loading } = allData()

  //  k = userData.data
  // if (loading === true) {
  //   nameth = k.map((data1) => data1.nameThai)
  //   price = k.map((data2) => data2.price)
  //   detail = k.map((data5) => data5.details)
  //   type = k.map((data6) => data6.type)
  //   image = k.map((data7) => data7.img)
  //   id = k.map((data8) => data8.id)

  //   if (typeof window !== 'undefined') {
  //     option = window.localStorage.getItem('option')
  //     var counter = window.localStorage.getItem('key')
  //   }
  //   if (typeof window !== 'undefined') {
  //     var typeoption = window.localStorage.getItem('option')
  //   }
  /// mock ////
  k = datafull

  if (datafull) {
    nameth = k.map((data1) => data1.nameThai)
    price = k.map((data2) => data2.price)
    detail = k.map((data5) => data5.details)
    type = k.map((data6) => data6.type)
    image = k.map((data7) => data7.img)
    id = k.map((data8) => data8.id)
    nameeng = k.map((data9) => data9.nameEng)

    if (typeof window !== 'undefined') {
      option = window.localStorage.getItem('option')
      var counter = window.localStorage.getItem('key')
    }
    if (typeof window !== 'undefined') {
      var typeoption = window.localStorage.getItem('option')
    }

    ////////// แต่งข้อมูลใหม่ option ////////////
    var allCheck = () => {
      for (let i = 0; i < nameth.length; i++) {
        showitem = {
          nameThai: nameth[i],
          price: price[i],
          details: detail[i],
          img: image[i],
          id: id[i]
        }
        arrayCheck.push(showitem)
      }
    }
    const all = () => {
      for (let i = 0; i < nameth.length; i++) {
        showitem = {
          nameThai: nameth[i],
          price: price[i],
          details: detail[i],
          img: image[i],
          id: id[i]
        }
        array.push(showitem)
      }
    }

    const moredrink = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          (id[i] === '17',
          id[i] === '16',
          id[i] === '23',
          id[i] === '11',
          id[i] === '10')
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
        if (sessionStorage.getItem('sorting') === 'ascending')
          array.sort((a, b) => (a.price > b.price ? 1 : -1))
        if (sessionStorage.getItem('sorting') === 'decending')
          array.sort((a, b) => (a.price > b.price ? -1 : 1))
      }
    }

    const cocktail = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'COCKTAILS' || type[i] === '(Shochu&Soda)') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
        if (sessionStorage.getItem('sorting') === 'ascending')
          array.sort((a, b) => (a.price > b.price ? 1 : -1))
        if (sessionStorage.getItem('sorting') === 'decending')
          array.sort((a, b) => (a.price > b.price ? -1 : 1))
      }
    }

    const fruite = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (nameeng[i] === 'ORANGE JUICE' || nameeng[i] === 'PINEAPPLE JUICE') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    const coke = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          nameeng[i] === 'COLA ZERO' ||
          nameeng[i] === 'COLA' ||
          nameeng[i] === 'SPRITE'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const smoothie = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          nameeng[i] === 'WATER MELON SMOOTHIE' ||
          nameeng[i] === 'BANANA SMOOTHIE' ||
          nameeng[i] === 'PINEAPPLE SMOOTHIE' ||
          nameeng[i] === 'CALPIS SMOOTHIE' ||
          nameeng[i] === 'MIXED BERRY SMOOTHIE' ||
          nameeng[i] === 'AVOCADO SMOOTHIE' ||
          nameeng[i] === 'MANGO SMOOTHIE'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    var allSushi = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'SUSHIMORIAWASE' ||
          type[i] === 'TEMAKI SUSHI' ||
          type[i] === 'SUSHI' ||
          type[i] === 'ROLL SUSHI' ||
          type[i] === 'GUNKAN' ||
          type[i] === 'HOSOMAKI' ||
          type[i] === 'OPEN INARI'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          arraySushi.push(showitem)
        }
      }
    }
    var allSushis = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'SUSHIMORIAWASE' ||
          type[i] === 'TEMAKI SUSHI' ||
          type[i] === 'SUSHI' ||
          type[i] === 'ROLL SUSHI' ||
          type[i] === 'GUNKAN' ||
          type[i] === 'HOSOMAKI' ||
          type[i] === 'OPEN INARI'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    const moriawase = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'SUSHIMORIAWASE') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const temaki = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'TEMAKI　SUSHI') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const sushis = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'SUSHI') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const roll = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'ROLL SUSHI') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const gunkan = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'GUNKAN') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const hosomaki = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'HOSOMAKI') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const inari = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'OPEN INARI') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    const sushi = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'SUSHIMORIAWASE' ||
          type[i] === 'TEMAKI　SUSHI' ||
          type[i] === 'SUSHI' ||
          type[i] === 'ROLL SUSHI' ||
          type[i] === 'GUNKAN' ||
          type[i] === 'HOSOMAKI' ||
          type[i] === 'OPEN INARI'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const dessert = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'DESSERT') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const alcohol = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'BEER' ||
          type[i] === 'JAPAN BRAND BEER' ||
          type[i] === 'JAPANESE SAKE' ||
          type[i] === 'JAPANESE WHISKEY' ||
          type[i] === 'UMESHU WINE'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }

          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const drink = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'SOFT DRINK' ||
          type[i] === 'SMOOTHIE' ||
          type[i] === 'HOT' ||
          type[i] === 'COL DOUBLE SHOT' ||
          type[i] === 'BEER' ||
          type[i] === 'JAPAN BRAND BEER' ||
          type[i] === 'JAPANESE SAKE' ||
          type[i] === 'JAPANESE WHISKEY' ||
          type[i] === 'UMESHU WINE'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    const coffee = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'COL DOUBLE SHOT' ||
          id[i] === '90' ||
          id[i] === '91' ||
          id[i] === '92' ||
          id[i] === '93' ||
          id[i] === '94'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    var allDrink = () => {
      //search
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'SOFT DRINK' ||
          type[i] === 'SMOOTHIE' ||
          type[i] === 'HOT' ||
          type[i] === 'COL DOUBLE SHOT' ||
          type[i] === 'BEER' ||
          type[i] === 'JAPAN BRAND BEER' ||
          type[i] === 'JAPANESE SAKE' ||
          type[i] === 'JAPANESE WHISKEY' ||
          type[i] === 'UMESHU WINE'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          arrayDrink.push(showitem)
          // array.push(showitem)
        }
      }
      if (typeof window !== 'undefined') {
        if (sessionStorage.getItem('sorting') === 'ascending')
          array.sort((a, b) => (a.price > b.price ? 1 : -1))
        if (sessionStorage.getItem('sorting') === 'decending')
          array.sort((a, b) => (a.price > b.price ? -1 : 1))
      }
    }
    var allAppitizer = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'IPPIN' ||
          type[i] === 'KUSHIKATSU' ||
          type[i] === 'KOBACHI' ||
          type[i] === 'TEMPURA' ||
          type[i] === 'DESSERT' ||
          type[i] === 'SALAD'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          arrayAppitizer.push(showitem)
        }
      }
    }
    const appitizer = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'IPPIN' ||
          type[i] === 'KUSHIKATSU' ||
          type[i] === 'KOBACHI' ||
          type[i] === 'TEMPURA' ||
          type[i] === 'DESSERT' ||
          type[i] === 'SALAD'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    const ippin = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'IPPIN') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const kushikatsu = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'KUSHIKATSU') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const kobachi = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'KOBACHI') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    var allRiceNoodle = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'SYOKUJI' ||
          type[i] === 'THAI DISH' ||
          type[i] === 'MENRUI'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          arrayRiceNoodle.push(showitem)
        }
      }
    }
    const ricenoodle = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (
          type[i] === 'SYOKUJI' ||
          type[i] === 'THAI DISH' ||
          type[i] === 'MENRUI'
        ) {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    const rice = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'SYOKUJI' || type[i] === 'THAI DISH') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    const noodle = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'MENRUI') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }
    const salad = () => {
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'SALAD') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    const tempura = () => {
      //ของทานเล่น
      for (let i = 0; i < nameth.length; i++) {
        if (type[i] === 'TEMPURA') {
          showitem = {
            nameThai: nameth[i],
            price: price[i],
            details: detail[i],
            img: image[i],
            id: id[i]
          }
          array.push(showitem)
        }
      }
      if (sessionStorage.getItem('sorting') === 'ascending')
        array.sort((a, b) => (a.price > b.price ? 1 : -1))
      if (sessionStorage.getItem('sorting') === 'decending')
        array.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    ///////////////////////////////////////////
    if (typeof window !== 'undefined') {
      for (let i = 0; i < nameth.length; i++) {
        if (localStorage.getItem('autostate') === 'true') {
          if (localStorage.getItem('autovalue') === detail[i]) {
            showitem = {
              nameThai: nameth[i],
              price: price[i],
              details: detail[i],
              img: image[i],
              id: id[i]
            }
            array.push(showitem)
          }
        }
        //////// defualt/////////
        if (localStorage.getItem('autostate') !== 'true') {
          if (typeoption === type[i]) {
            showitem = {
              nameThai: nameth[i],
              price: price[i],
              details: detail[i],
              img: image[i],
              id: id[i]
            }
            array.push(showitem)
          }
        }
      }
    }
  }
  if (typeof window !== 'undefined')
    if (window.localStorage.getItem('autostate') !== 'true') {
      if (typeoption === 'all') {
        all()
      } else if (typeoption === 'dessert') {
        dessert()
      } else if (typeoption === 'เครื่องดื่มแอลกอฮอล์') {
        alcohol()
      } else if (typeoption === 'เครื่องดื่ม') {
        drink()
      } else if (typeoption === 'rice') {
        rice()
      } else if (typeoption === 'noodle') {
        noodle()
      } else if (typeoption === 'salad') {
        salad()
      } else if (typeoption === 'tempura') {
        tempura()
      } else if (typeoption === 'กาแฟ') {
        coffee()
      } else if (typeoption === 'น้ำอัดลม') {
        coke()
      } else if (typeoption === 'น้ำผลไม้') {
        fruite()
      } else if (typeoption === 'ปั่น') {
        smoothie()
      } else if (typeoption === 'cocktail') {
        cocktail()
      } else if (typeoption === 'alldrink') {
        allDrink()
      } else if (typeoption === 'gunkan') {
        gunkan()
      } else if (typeoption === 'sushi') {
        sushis()
      } else if (typeoption === 'roll') {
        roll()
      } else if (typeoption === 'hosomaki') {
        hosomaki()
      } else if (typeoption === 'inari') {
        inari()
      } else if (typeoption === 'temaki') {
        temaki()
      } else if (typeoption === 'moriawase') {
        moriawase()
      } else if (typeoption === 'ippin') {
        ippin()
      } else if (typeoption === 'kobashi') {
        kobachi()
      } else if (typeoption === 'kushikatsu') {
        kushikatsu()
      } else if (typeoption === 'appitizer') {
        appitizer()
      } else if (typeoption === 'ricenoodle') {
        ricenoodle()
      } else if (typeoption === 'sushiall') {
        allSushis()
      }
    }

  const incButton = (choose) => {
    if (window.localStorage.getItem('countfull') != NaN)
      window.localStorage.setItem(
        'countfull',
        1 + parseInt(window.localStorage.getItem('countfull'))
      )

    for (let x = 0; x < nameth.length; x++) {
      if (nameth[x] === choose) {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(
            'total' + (1 + parseInt(window.localStorage.getItem('key'))),
            price[x]
          )
          window.localStorage.setItem(
            'food' + (1 + parseInt(window.localStorage.getItem('key'))),
            nameth[x]
          )
          window.localStorage.setItem(
            'menu' + (1 + parseInt(window.localStorage.getItem('key'))),
            id[x]
          )
        }
        full = { price: price[x], name: nameth[x], count: 1, id: id[x] }
      }
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('full', JSON.stringify(full))
      counter = 1 + parseInt(window.localStorage.getItem('key'))
      window.localStorage.setItem('item' + counter, JSON.stringify(full))
      window.localStorage.setItem('key', counter)
      if (window.localStorage.getItem('keymock') === null)
        window.localStorage.setItem('keymock', 1)
      else if (window.localStorage.getItem('keymock') !== null) {
        window.localStorage.setItem(
          'keymock',
          1 + parseInt(window.localStorage.getItem('keymock'))
        )
      }
    }
  }
  allRiceNoodle()
  allDrink()
  allSushi()
  allAppitizer()
  allCheck()
  return {
    arrayCheck,
    array,
    incButton,
    arrayDrink,
    arraySushi,
    arrayAppitizer,
    arrayRiceNoodle
  }
}

// 'เมนูข้าว', -
// 'เมนูเส้น', -
// 'เมนูชุบแป้งทอด',  - //
// 'ของทานเล่น', -  //
// 'ของหวาน', - //
// 'สลัด',
