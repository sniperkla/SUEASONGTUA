import React, { useEffect, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { allData } from '../../../hooks/data'
import { dataPush } from '../../../hooks/cartlist'
import { datas } from '../../../helper/datamock'
export default function autocomplete() {
  const { arraySushi } = dataPush()
  let nameth = []
  let price = []
  let nameeng = []
  let id = []
  const { datafull } = datas()
  let detail = []
  let image = []
  let type = []
  let k = []
  if (typeof window !== 'undefined') window.localStorage.setItem('totals', '0')
  let [count, setCount] = useState(1)
  let choose = 0
  if (typeof window !== 'undefined')
    var [value, setValue] = useState(window.localStorage.getItem('autovalue'))
  var [inputValue, setInputValue] = useState('')

  let details = ''
  let full = []
  // let { userData, loading } = allData()
  // k = userData.data
  k = arraySushi
  let loading = true

  if (loading === true) {
    nameth = k.map((data1) => data1.nameThai)
    nameeng = k.map((data9) => data9.nameeng)
    price = k.map((data2) => data2.price)
    detail = k.map((data5) => data5.details)
    type = k.map((data6) => data6.type)
    image = k.map((data7) => data7.img)
    id = k.map((data8) => data8.id)
  }
  let options = detail

  for (let x = 0; x < nameth.length; x++) {
    if (value === detail[x] || value === nameeng[x]) {
      details = detail[x]
      choose = price[x]
      full = { price: price[x], name: nameth[x], count: count, id: id[x] }
    }
  }

  if (typeof window !== 'undefined') {
    if (
      window.localStorage.getItem('key') === null ||
      window.localStorage.getItem('key') === NaN
    ) {
      window.localStorage.setItem('key', 0)
      window.localStorage.setItem('keymock', 0)
    }
  }

  return (
    <div>
      <center>
        <Autocomplete
          style={{ backgroundColor: 'white' }}
          value={value}
          onChange={(event, newValue) => {
            if (typeof window !== 'undefined') setValue(newValue)
            localStorage.setItem('autostate', 'true')
            localStorage.setItem('filterstate', 'false')
            localStorage.setItem('autovalue', newValue)
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue)
          }}
          id="combo-box-demo"
          options={options}
          sx={{ width: 350 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                <div className="flex justify-center ">
                  <img
                    className="flex justify-center w-6 h-5 -pt-1 mr-1"
                    src="/images/search.png"
                  ></img>
                  <p className="flex justify-center text-md ">ค้นหาเมนูซูชิ</p>
                </div>
              }
              variant="outlined"
            />
          )}
        />
      </center>
    </div>
  )
}
