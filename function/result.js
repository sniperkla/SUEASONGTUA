export const result = () => {
  let price = 0
  let result = []
  if (typeof window !== 'undefined') {
    result = JSON.parse(window.localStorage.getItem('full'))
    if (result != null) {
      for (let p = 0; p < result.length; p++) {
        price = price + result[p].price * result[p].count
      }
    }
  }
  return price
}
