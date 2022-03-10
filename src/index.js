require('dotenv').config()
const { chromium } = require('playwright')
const { delay } = require('./helpers/delay')
const {
  loginGooglePlayConsole
} = require('./loginGooglePlayConsole/loginGooglePlayConsole')

const main = async () => {
  const browser = await chromium.launch({ headless: false })

  await loginGooglePlayConsole(browser)

  await delay({ seg: 60 })
  await browser.close()
}

main()
