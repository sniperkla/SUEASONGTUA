export const createmenu = () => {
  let menus = []
  let value = []
  let menu = []
  let query = localStorage.getItem('query')
  if (typeof window !== 'undefined')
    menus = JSON.parse(window.localStorage.getItem('full'))
  if (menus != null)
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].count > 1) {
        for (let c = 0; c < menus[i].count; c++) {
          menu.push(menus[i].id)
        }
      } else menu.push(menus[i].id)
    }
  value = {
    token: query,
    menu: menu,
  }
  return value
}
