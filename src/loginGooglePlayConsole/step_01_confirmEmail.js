const { config } = require('../config/config')

/** @param {import('playwright').Page} page */
module.exports.confirmEmailGPC = async (page) => {
  const textFieldEmail = await page.$('#identifierId')

  await textFieldEmail.type(config.credential.googlePlayConsole.email)

  const btnConfirmEmail = await page.$('[class="VfPpkd-vQzf8d"]')

  await btnConfirmEmail.click()
}
