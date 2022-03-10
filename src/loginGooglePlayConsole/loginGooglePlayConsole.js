// @ts-check
const { chromium } = require('playwright')
const { config } = require('../config/config')
const { delay } = require('../helpers/delay')
const { confirmEmail } = require('./step_01_confirmEmail')
const { confirmPass } = require('./step_02_confirmPass')
const { selectedAccount } = require('./step_03_selectedAccount')

module.exports.loginGooglePlayConsole = async () => {
  const browser = await chromium.launch({ headless: false })

  const page = await browser.newPage()

  await page.goto(config.pages.login)

  await confirmEmail(page)
  await delay({ seg: 3 })

  await confirmPass(page)
  await delay({ seg: 3 })

  await selectedAccount(page)
  await delay({ seg: 3 })

  await delay({ seg: 60 })
  await browser.close()
}
