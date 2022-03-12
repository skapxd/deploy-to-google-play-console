// @ts-check
const { config } = require('../config/config')
const { delay } = require('../helpers/delay')
const { confirmEmail } = require('./step_01_confirmEmail')
const { confirmPass } = require('./step_02_confirmPass')
const { selectedAccount } = require('./step_03_selectedAccount')

/** @param {import('playwright').Browser} browser */
module.exports.loginGooglePlayConsole = async (browser) => {
  const page = await browser.newPage()

  await page.goto(config.pages.googlePlayConsole.login)

  await confirmEmail(page)
  await delay({ seg: 3 })

  await confirmPass(page)
  await delay({ seg: 3 })

  await selectedAccount(page)
  await delay({ seg: 3 })

  return page
}
