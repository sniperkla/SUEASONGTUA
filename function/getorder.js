import { useEffect, useState } from 'react'
import { getOrders } from '../hooks/getorder'
import { dataPush } from '../hooks/cartlist'
import { getOrder } from '../store/actions/getorder'
import TYPES from '../store/types/getorder'
import { useSelector, useDispatch } from 'react-redux'
export const getOrderPages = () => {
  var newData = {}
  var newData2 = []
  var convert = {}
  var finalData = []
  let count = []
  let dateOrder = ''
  var price = ''
  const dispatch = useDispatch()
  if (typeof window !== 'undefined') {
    var result = { token: localStorage.getItem('query') }
  }
  const { arrayCheck } = dataPush()
  var { newdata, getOrderData, getsError, handlegetOrder, isLoading, idOrder } =
    getOrders(result)
  // useEffect(() => {
  //   handlegetOrder(result)
  // }, [])
  newData = getOrderData.waiting
  dateOrder = getOrderData.createdAt
  var newdata3 = []
  if (newData != undefined) {
    var haveOrder = true

    for (let i = 0; i < newData.length; i++) {
      //   newdata3[i] = getOrderData[i].name
      for (let j = 0; j < arrayCheck.length; j++) {
        if (newData[i] === arrayCheck[j].id) {
          newdata3[i] = arrayCheck[j].nameThai
          convert = {
            time: getOrderData.createdAt,
            menu: newData[i],
            name: arrayCheck[j].nameThai,
            total: getOrderData.subTotal,
            price: arrayCheck[j].price
          }
          newData2.push(convert)
        }
      }
    }
  }
  let counts = 0
  let uniqueItems = []
  let countall = 0

  if (typeof window !== 'undefined') uniqueItems = [...new Set(newdata3)]
  for (let y = 0; y < uniqueItems.length; y++) {
    // รวม uniqueitem
    for (let x = 0; x < newData2.length; x++) {
      if (newdata3[x] === uniqueItems[y]) {
        counts++
        price = newData2[x].price
      }
    }
    count[y] = counts
    countall = countall + count[y]
    counts = 0
    finalData[y] = {
      price: price,
      name: uniqueItems[y],
      count: count[y]
    }
  }
  return {
    finalData,
    getOrderData,
    getsError,
    idOrder,
    dateOrder,
    isLoading,
    countall,
    haveOrder
  }
}
