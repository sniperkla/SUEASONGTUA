import { useState } from 'react'

export const handleOnclickSushi = () => {
  const [changeMoriawase, setChangeMoriawase] = useState(false)
  const [changeRoll, setChangeRoll] = useState(false)
  const [changeTemaki, setChangeTemaki] = useState(false)
  const [changeSushi, setChangeSushi] = useState(false)
  const [changeGunkan, setChangeGunkan] = useState(false)
  const [changeHosomaki, setChangeHosomaki] = useState(false)
  const [changeInari, setChangeInari] = useState(false)
  const [changeAllsushi, setChangeAllsushi] = useState(false)

  const removeAutostate = () => {
    localStorage.setItem('filterstate', 'true')
    localStorage.setItem('autostate', 'false')
    localStorage.removeItem('autovalue')
    localStorage.removeItem('option')
  }

  const handleAllsushi = () => {
    removeAutostate()
    localStorage.setItem('option', 'sushiall')
    setChangeMoriawase(false)
    setChangeGunkan(false)
    setChangeHosomaki(false)
    setChangeInari(false)
    setChangeRoll(false)
    setChangeSushi(false)
    setChangeTemaki(false)
    setChangeAllsushi(true)
  }
  const handleMoriawase = () => {
    removeAutostate()
    localStorage.setItem('option', 'moriawase')
    setChangeMoriawase(true)
    setChangeGunkan(false)
    setChangeHosomaki(false)
    setChangeInari(false)
    setChangeRoll(false)
    setChangeSushi(false)
    setChangeTemaki(false)
    setChangeAllsushi(false)
  }

  const handleTemaki = () => {
    removeAutostate()

    localStorage.setItem('option', 'temaki')
    setChangeMoriawase(false)
    setChangeGunkan(false)
    setChangeHosomaki(false)
    setChangeInari(false)
    setChangeRoll(false)
    setChangeSushi(false)
    setChangeTemaki(true)
    setChangeAllsushi(false)
  }
  const handleSushi = () => {
    removeAutostate()

    localStorage.setItem('option', 'sushi')
    setChangeMoriawase(false)
    setChangeGunkan(false)
    setChangeHosomaki(false)
    setChangeInari(false)
    setChangeRoll(false)
    setChangeSushi(true)
    setChangeTemaki(false)
    setChangeAllsushi(false)
  }

  const handleGunkan = () => {
    removeAutostate()

    localStorage.setItem('option', 'gunkan')
    setChangeMoriawase(false)
    setChangeGunkan(true)
    setChangeHosomaki(false)
    setChangeInari(false)
    setChangeRoll(false)
    setChangeSushi(false)
    setChangeTemaki(false)
    setChangeAllsushi(false)
  }
  const handleHosomaki = () => {
    removeAutostate()

    localStorage.setItem('option', 'hosomaki')
    setChangeMoriawase(false)
    setChangeGunkan(false)
    setChangeHosomaki(true)
    setChangeInari(false)
    setChangeRoll(false)
    setChangeSushi(false)
    setChangeTemaki(false)
    setChangeAllsushi(false)
  }
  const handleInari = () => {
    removeAutostate()
    localStorage.removeItem('autovalue')

    localStorage.setItem('option', 'inari')
    setChangeMoriawase(false)
    setChangeGunkan(false)
    setChangeHosomaki(false)
    setChangeInari(true)
    setChangeRoll(false)
    setChangeSushi(false)
    setChangeTemaki(false)
    setChangeAllsushi(false)
  }
  const handleRoll = () => {
    removeAutostate()
    localStorage.removeItem('autovalue')
    localStorage.setItem('option', 'roll')
    setChangeMoriawase(false)
    setChangeGunkan(false)
    setChangeHosomaki(false)
    setChangeInari(false)
    setChangeRoll(true)
    setChangeSushi(false)
    setChangeTemaki(false)
    setChangeAllsushi(false)
  }

  return {
    handleGunkan,
    handleHosomaki,
    handleInari,
    handleMoriawase,
    handleSushi,
    handleTemaki,
    handleRoll,
    handleAllsushi,
    changeAllsushi,
    changeGunkan,
    changeHosomaki,
    changeInari,
    changeMoriawase,
    changeSushi,
    changeTemaki,
    changeRoll
  }
}
