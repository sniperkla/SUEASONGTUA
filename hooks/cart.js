import { useSelector, useDispatch } from 'react-redux'
import { clearCart, setDataCart } from '../store/actions/cart'
import { createmenu } from '../function/createmenu'
import { result } from '../function/result'
import { getCreateOrder } from '../store/actions/createorder'
import { reset } from '../function/reset'
import { getUpdateOrder } from '../store/actions/updateorder'
import { updatemenu } from '../function/updatemenu'
import { notifytoast } from '../function/notify'
import { useRef } from 'react'
import { toast } from 'react-toastify'

export const useDataCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.data)

  const handleClear = () => {
    dispatch(clearCart())
    var query = localStorage.getItem('query')
    reset()
  }
  const handleCreatOrder = () => {
    const result = createmenu()
    dispatch(clearCart())
    dispatch(getCreateOrder(result))
  }
  const handleUpdateOrder = () => {
    const result = updatemenu()
    dispatch(clearCart())
    dispatch(getUpdateOrder(result))
  }

  return {
    cart,
    handleClear,
    handleCreatOrder,
    handleUpdateOrder
  }
}

export const useDecrease = () => {
  const { notifyRemoveItem } = notifytoast()
  const notifyId = useRef(null)

  const dispatch = useDispatch()

  const handleDecrease = (props) => {
    let full = []
    let fulldef = []
    let x = 0
    let countfull = 0

    if (typeof window !== 'undefined') {
      full = JSON.parse(window.localStorage.getItem('full'))

      window.localStorage.setItem('fullde', JSON.stringify(full))
      fulldef = JSON.parse(window.localStorage.getItem('fullde'))
      window.localStorage.setItem('countfull', fulldef.length)
      countfull = window.localStorage.getItem('countfull')
      window.localStorage.setItem('toggle', 'true')
    }

    for (let run = 0; run < countfull; run++) {
      if (fulldef !== undefined) {
        if (props.index === fulldef[run].index) {
          x = run
        }
      }
    }

    for (let i = 0; i < full.length; i++) {
      if (full[i].index === x) {
        for (let n = window.localStorage.getItem('key'); n >= 1; n--) {
          if (window.localStorage.getItem('item' + n) != null) {
            if (
              JSON.parse(window.localStorage.getItem('item' + n)).name ===
              full[i].name
            ) {
              if (toast.isActive(notifyId.current) === true) {
                toast.dismiss(notifyId.current)
                notifyId.current = notifyRemoveItem(full[i].name)
              } else notifyId.current = notifyRemoveItem(full[i].name)

              window.localStorage.removeItem('item' + n)
              window.localStorage.removeItem('food' + n)
              window.localStorage.removeItem('menu' + n)
              window.localStorage.removeItem('total' + n)

              window.localStorage.setItem(
                'keymock',
                window.localStorage.getItem('keymock') - 1
              )

              break
            }
          }
        }
      }

      if (typeof window !== 'undefined') {
        full = JSON.parse(window.localStorage.getItem('full'))
      }
      if (full[i].count === 0) {
        full.splice(i, 1)
      }
      window.localStorage.setItem('full', JSON.stringify(full))
      dispatch(setDataCart(full))
      if (window.localStorage.getItem('keymock') === '0') {
        reset()
      }
    }
  }

  return { handleDecrease }
}

export const useCartMenu = () => {
  let total = []
  let id = []
  let cart = []
  let cart2 = []
  let count = []
  let full = []
  let price = 0

  if (typeof window !== 'undefined') {
    var counter = window.localStorage.getItem('keymock' || 0)
    for (let i = 1; i <= parseInt(window.localStorage.getItem('key')); i++) {
      if (window.localStorage.getItem('item' + i) != null) {
        cart.push(JSON.parse(window.localStorage.getItem('item' + i)))
      }
      if (window.localStorage.getItem('food' + i) != null) {
        cart2.push(window.localStorage.getItem('food' + i))
      }
      if (window.localStorage.getItem('total' + i) != null) {
        total.push(JSON.parse(window.localStorage.getItem('total' + i)))
      }
    }
    let counts = 0
    let uniqueItems = []
    if (typeof window !== 'undefined') uniqueItems = [...new Set(cart2)]
    for (let y = 0; y < uniqueItems.length; y++) {
      // รวม uniqueitem
      for (let x = 0; x < cart.length; x++) {
        if (cart2[x] === uniqueItems[y]) {
          counts++
          price = cart[x].price
          id = cart[x].id
        }
      }
      count[y] = counts
      counts = 0
      full[y] = {
        price: price,
        name: uniqueItems[y],
        count: count[y],
        index: y,
        id: id
      }
    }
    window.localStorage.setItem('full', JSON.stringify(full))
  }

  const sum = result()
  return { counter, full, sum }
}
