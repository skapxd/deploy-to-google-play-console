const { config } = require('../config/config')

/**
 * @param {import("playwright").Page} page
 */
module.exports.confirmPassJira = async (page) => {
  const input = page.locator('[placeholder="Introducir contraseña"]')
  await input.type(config.credential.jira.pass)

  const btn = page.locator('[id="login-submit"]')
  await btn.click()
}
