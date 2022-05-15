import { useState } from 'react'
import Router from 'next/router'

export const handleOnclick = () => {
  const [changeAlchohol, setChangeAlchohol] = useState(false)
  const [changeCoffee, setChangeCoffee] = useState(false)
  const [changeFruite, setChangeFruite] = useState(false)
  const [changeFrappe, setChangeFrappe] = useState(false)
  const [changeCoke, setChangeCoke] = useState(false)
  const [changeAlldrink, setChangeAlldrink] = useState(false)
  const [changeCocktail, setChangeCocktail] = useState(false)
  const removeAutostate = () => {
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
  }

  const handleAlldrink = () => {
    removeAutostate()
    localStorage.setItem('option', 'เครื่องดื่ม')
    setChangeAlchohol(false)
    setChangeCoffee(false)
    setChangeFrappe(false)
    setChangeFruite(false)
    setChangeCoke(false)
    setChangeCocktail(false)
    setChangeAlldrink(true)
  }

  const handleAlchohol = () => {
    removeAutostate()
    localStorage.setItem('option', 'เครื่องดื่มแอลกอฮอล์')
    setChangeAlchohol(true)
    setChangeCoffee(false)
    setChangeFrappe(false)
    setChangeFruite(false)
    setChangeCoke(false)
    setChangeCocktail(false)
    setChangeAlldrink(false)
  }

  const handleCoffee = () => {
    removeAutostate()

    localStorage.setItem('option', 'กาแฟ')
    setChangeCoffee(true)
    setChangeAlchohol(false)
    setChangeFrappe(false)
    setChangeFruite(false)
    setChangeCoke(false)
    setChangeCocktail(false)
    setChangeAlldrink(false)
  }
  const handleFruite = () => {
    removeAutostate()

    localStorage.setItem('option', 'น้ำผลไม้')
    setChangeFruite(true)
    setChangeAlchohol(false)
    setChangeCoffee(false)
    setChangeFrappe(false)
    setChangeCoke(false)
    setChangeCocktail(false)
    setChangeAlldrink(false)
  }

  const handleFrappe = () => {
    removeAutostate()

    localStorage.setItem('option', 'ปั่น')

    setChangeFrappe(true)
    setChangeAlchohol(false)
    setChangeCoffee(false)
    setChangeFruite(false)
    setChangeCoke(false)
    setChangeCocktail(false)
    setChangeAlldrink(false)
  }
  const handleCoke = () => {
    removeAutostate()

    localStorage.setItem('option', 'น้ำอัดลม')
    setChangeCoke(true)
    setChangeFrappe(false)
    setChangeAlchohol(false)
    setChangeCoffee(false)
    setChangeFruite(false)
    setChangeCocktail(false)
    setChangeAlldrink(false)
  }
  const handleCocktail = () => {
    removeAutostate()

    localStorage.setItem('option', 'cocktail')
    setChangeCoke(false)
    setChangeFrappe(false)
    setChangeAlchohol(false)
    setChangeCoffee(false)
    setChangeFruite(false)
    setChangeCocktail(true)
    setChangeAlldrink(false)
  }

  return {
    handleAlchohol,
    handleFrappe,
    handleFruite,
    handleCoffee,
    handleCoke,
    handleCocktail,
    handleAlldrink,
    changeAlldrink,
    changeCocktail,
    changeAlchohol,
    changeCoffee,
    changeFrappe,
    changeFruite,
    changeCoke
  }
}
