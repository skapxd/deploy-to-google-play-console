require('dotenv').config()
const { chromium } = require('playwright')
const { delay } = require('./helpers/delay')
const { loginJira } = require('./loginJira/loginJira')
// const {
//   loginGooglePlayConsole
// } = require('./loginGooglePlayConsole/loginGooglePlayConsole')

const main = async () => {
  const browser = await chromium.launch({ headless: false })

  // const page = await loginGooglePlayConsole(browser)
  const page = await loginJira(browser)

  await delay({ seg: 60 })
  await browser.close()
}

main()
