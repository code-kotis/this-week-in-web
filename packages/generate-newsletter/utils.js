const colors = require('./colors')

const getCurrentDate = () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1 //January is 0!
  let yyyy = today.getFullYear()

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  return yyyy + '-' + mm + '-' + dd
}

module.exports = {
  getCurrentDate,
}
