export const reset = () => {
  var query = localStorage.getItem('query') || 'ยังไม่มีหมายเลขโต๊ะ'
  var tokenexpire = localStorage.getItem('tokenexpire') || 'false'
  var dupeorder = localStorage.getItem('dupeorder') || 'false'

  localStorage.clear()
  localStorage.setItem('query', query)
  localStorage.setItem('autostate', 'false')
  localStorage.setItem('tokenexpire', tokenexpire)
  localStorage.setItem('dupeorder', dupeorder)
}
