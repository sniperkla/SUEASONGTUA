import { useState } from 'react'

export const handleOnclickAppitizer = () => {
  const [changeIppin, setChangeIppin] = useState(false)
  const [changeKushikatsu, setChangeKushikatsu] = useState(false)
  const [changeKobachi, setChangeKobachi] = useState(false)
  const [changeTempura, setChangeTempura] = useState(false)
  const [changeDessert, setChangeDessert] = useState(false)
  const [changeSalad, setChangeSalad] = useState(false)
  const [changeAllappitizer, setChangeAllappitizer] = useState(false)

  const removeAutostate = () => {
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
  }

  const handleallAppitizer = () => {
    removeAutostate()
    localStorage.setItem('option', 'appitizer')
    setChangeIppin(false)
    setChangeDessert(false)
    setChangeKobachi(false)
    setChangeKushikatsu(false)
    setChangeSalad(false)
    setChangeTempura(false)
    setChangeAllappitizer(true)
  }
  const handleIppin = () => {
    removeAutostate()
    localStorage.setItem('option', 'ippin')
    setChangeIppin(true)
    setChangeDessert(false)
    setChangeKobachi(false)
    setChangeKushikatsu(false)
    setChangeSalad(false)
    setChangeTempura(false)
    setChangeAllappitizer(false)
  }

  const handleDessert = () => {
    removeAutostate()
    localStorage.setItem('option', 'dessert')
    setChangeIppin(false)
    setChangeDessert(true)
    setChangeKobachi(false)
    setChangeKushikatsu(false)
    setChangeSalad(false)
    setChangeTempura(false)
    setChangeAllappitizer(false)
  }
  const handleKobashi = () => {
    removeAutostate()
    localStorage.setItem('option', 'kobashi')
    setChangeIppin(false)
    setChangeDessert(false)
    setChangeKobachi(true)
    setChangeKushikatsu(false)
    setChangeSalad(false)
    setChangeTempura(false)
    setChangeAllappitizer(false)
  }

  const handleKushikatsu = () => {
    removeAutostate()
    localStorage.setItem('option', 'kushikatsu')
    setChangeIppin(false)
    setChangeDessert(false)
    setChangeKobachi(false)
    setChangeKushikatsu(true)
    setChangeSalad(false)
    setChangeTempura(false)
    setChangeAllappitizer(false)
  }
  const handleSalad = () => {
    removeAutostate()
    localStorage.setItem('option', 'salad')
    setChangeIppin(false)
    setChangeDessert(false)
    setChangeKobachi(false)
    setChangeKushikatsu(false)
    setChangeSalad(true)
    setChangeTempura(false)
    setChangeAllappitizer(false)
  }
  const handleTempura = () => {
    removeAutostate()

    localStorage.setItem('option', 'tempura')
    setChangeIppin(false)
    setChangeDessert(false)
    setChangeKobachi(false)
    setChangeKushikatsu(false)
    setChangeSalad(false)
    setChangeTempura(true)
    setChangeAllappitizer(false)
  }

  return {
    handleKobashi,
    handleDessert,
    handleIppin,
    handleKushikatsu,
    handleSalad,
    handleTempura,
    handleallAppitizer,
    changeAllappitizer,
    changeDessert,
    changeIppin,
    changeKobachi,
    changeKushikatsu,
    changeSalad,
    changeTempura
  }
}
