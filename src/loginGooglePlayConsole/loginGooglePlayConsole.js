// @ts-check

import { config } from '../config/config'
import { confirmEmailGPC } from './step_01_confirmEmail.js'
import { confirmPassGPC } from './step_02_confirmPass.js'
import { selectedAccountGPC } from './step_03_selectedAccount.js'
import { delay } from '../helpers/delay.js'

/** @param {import('playwright').Browser} browser */
export const loginGooglePlayConsole = async (browser) => {
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
