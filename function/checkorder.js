import { useEffect, useState } from 'react'
import { getOrderPages } from './getorder'

/// hook cart ทำต่อ

export const checkOrder = () => {
  const { getsError } = getOrderPages()
  var showorder = false

  if (getsError === null) {
    showorder = true
  } else showorder = false

  return { showorder }
}
