export const sortingData = (setsorting, setText) => {
  if (typeof window !== 'undefined') {
    if (
      sessionStorage.getItem('sorting') === 'decending' ||
      sessionStorage.getItem('sorting') === 'เรียงลำดับราคา'
    ) {
      sessionStorage.setItem('sorting', 'ascending')
      setText('ราคา สูง - ต่ำ')
      setsorting('ascending')
    } else if (
      sessionStorage.getItem('sorting') === 'ascending' ||
      sessionStorage.getItem('sorting') === 'เรียงลำดับราคา'
    ) {
      sessionStorage.setItem('sorting', 'decending')
      setText('ราคา ต่ำ - สูง')
      setsorting('decending')
    } else {
      sessionStorage.setItem('sorting', 'ascending')
      setText('ราคา สูง - ต่ำ')
      setsorting('init')
    }
  }
}
