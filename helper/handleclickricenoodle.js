import { useState } from 'react'

export const handleOnclickRiceNoodle = () => {
  const [changeRice, setChangeRice] = useState(false)
  const [changeNoodle, setChangeNoodle] = useState(false)
  const [changeAllricenoodle, setChangeAllricenoodle] = useState(false)
  const removeAutostate = () => {
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
  }
  const handleAllricenoodle = () => {
    removeAutostate()
    localStorage.setItem('option', 'ricenoodle')
    setChangeRice(false)
    setChangeNoodle(false)
    setChangeAllricenoodle(true)
  }

  const handleRice = () => {
    removeAutostate()
    localStorage.setItem('option', 'rice')
    setChangeRice(true)
    setChangeNoodle(false)
    setChangeAllricenoodle(false)
  }

  const handleNoodle = () => {
    removeAutostate()
    localStorage.setItem('option', 'noodle')
    setChangeRice(false)
    setChangeNoodle(true)
    setChangeAllricenoodle(false)
  }

  return {
    handleRice,
    handleNoodle,
    handleAllricenoodle,
    changeAllricenoodle,
    changeRice,
    changeNoodle
  }
}
