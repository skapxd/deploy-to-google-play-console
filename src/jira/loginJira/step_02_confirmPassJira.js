import { config } from '../../config/config.js'

/**
 * @param {import("playwright").Page} page
 */
export const confirmPassJira = async (page) => {
  const input = page.locator('[placeholder="Introducir contraseña"]')
  await input.type(config.credential.jira.pass)

  const btn = page.locator('[id="login-submit"]')
  await btn.click()
}
