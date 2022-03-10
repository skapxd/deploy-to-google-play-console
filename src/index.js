require('dotenv').config()
const { chromium } = require('playwright')
const { delay } = require('./helpers/delay')
const {
  loginGooglePlayConsole
} = require('./loginGooglePlayConsole/loginGooglePlayConsole')

const main = async () => {
  const browser = await chromium.launch({ headless: false })

  const page = await loginGooglePlayConsole(browser)

  // TODO: Click btn create app and type basic info

  await delay({ seg: 60 })
  await browser.close()
}

main()
