// @ts-check
const { config } = require('../config/config')
const { delay } = require('../helpers/delay')
const { confirmEmailGPC } = require('./step_01_confirmEmail')
const { confirmPassGPC } = require('./step_02_confirmPass')
const { selectedAccountGPC } = require('./step_03_selectedAccount')

/** @param {import('playwright').Browser} browser */
module.exports.loginGooglePlayConsole = async (browser) => {
  const page = await browser.newPage()

  await page.goto(config.pages.googlePlayConsole.login)

  await confirmEmailGPC(page)
  await delay({ seg: 3 })

  await confirmPassGPC(page)
  await delay({ seg: 3 })

  await selectedAccountGPC(page)
  await delay({ seg: 3 })

  return page
}
