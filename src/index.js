// @ts-check
require('dotenv').config()
const {
  loginGooglePlayConsole
} = require('./loginGooglePlayConsole/loginGooglePlayConsole.js')

const main = async () => {
  await loginGooglePlayConsole()
}

main()
