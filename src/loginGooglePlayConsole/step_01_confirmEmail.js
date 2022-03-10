const { config } = require('../config/config')

/** @param {import('playwright').Page} page */
module.exports.confirmEmail = async (page) => {
  const textFieldEmail = await page.$('#identifierId')

  await textFieldEmail.type(config.credential.email)

  const listOfBtnConfirmEmail = await page.$('[class="VfPpkd-vQzf8d"]')

  await listOfBtnConfirmEmail.click()
}
