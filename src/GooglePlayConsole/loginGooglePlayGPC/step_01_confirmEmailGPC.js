import { config } from '../../config/config.js'

/** @param {import('playwright').Page} page */
export const confirmEmailGPC = async (page) => {
  const textFieldEmail = await page.$('#identifierId')

  await textFieldEmail.type(config.credential.googlePlayConsole.email)

  const btnConfirmEmail = await page.$('[class="VfPpkd-vQzf8d"]')

  await btnConfirmEmail.click()
}
