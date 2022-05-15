const ip = 'http://178.128.187.60:4050'
const mainsite = 'localhost:3000/?table='

export const url = {
  main: `${mainsite}`,
  createOrder: `${ip}/api/customer/create/Order`,
  updateOrder: `${ip}/api/customer/update/Order`,
  updateMenu: `${ip}/api/customer/update/Menu`,
  tableOrder: `${ip}/api/admin/create/token`,
  getOrder: `${ip}/api/customer/get/Order`,
  login: `${ip}/api/admin/login`
}
