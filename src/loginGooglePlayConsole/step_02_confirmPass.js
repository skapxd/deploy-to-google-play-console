// @ts-check

import { config } from '../config/config'

/** @param {import('playwright').Page} page */
export const confirmPassGPC = async (page) => {
  const textFieldPass = await page.$('[name="password"]')

  await textFieldPass.type(config.credential.googlePlayConsole.pass)

  const btnConfirmPass = await page.$('[class="VfPpkd-RLmnJb"]')

  await btnConfirmPass.click()
}
