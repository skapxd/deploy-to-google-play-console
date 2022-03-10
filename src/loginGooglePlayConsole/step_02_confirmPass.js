// @ts-check

const { config } = require('../config/config')

/** @param {import('playwright').Page} page */
module.exports.confirmPass = async (page) => {
  const textFieldPass = await page.$('[name="password"]')

  await textFieldPass.type(config.credential.pass)

  const btnConfirmPass = await page.$('[class="VfPpkd-RLmnJb"]')

  await btnConfirmPass.click()
}
