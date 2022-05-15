import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { options } from '../../../helper/option'

export default function filter() {
  const option = options()

  var [inputValue, setInputValue] = useState('')

  if (typeof window !== 'undefined') {
    var [value, setValue] = useState(
      window.localStorage.getItem('option') || 'ซูชิ'
    ) //เมนูแนะนำ
    if (window.localStorage.getItem('option') === null) {
      setValue = 'SALAD'
    }
    window.localStorage.setItem('option', value)
  }
  return (
    <div>
      <br />
      <Autocomplete
        style={{ backgroundColor: '#FFFFFF7F' }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
          localStorage.setItem('filterstate', 'true')
          localStorage.setItem('autostate', 'false')
          localStorage.setItem('autovalue', '')
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        id="controllable-states-demo"
        options={option}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="เลือกประเภท" />}
      />
    </div>
  )
}
