// placeholder="Introducir contraseña"

const { config } = require('../config/config')

/**
 * @param {import("playwright").Page} page
 */
module.exports.confirmEmailJira = async (page) => {
  const input = page.locator('[placeholder="Introducir correo"]')

  await input.type(config.credential.jira.email)

  const btn = page.locator('[id="login-submit"]')

  await btn.click()
}
