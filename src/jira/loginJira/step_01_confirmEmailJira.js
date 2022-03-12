// @ts-check

import { config } from '../../config/config.js'

/**
 * @param {import("playwright").Page} page
 */
export const confirmEmailJira = async (page) => {
  const input = page.locator('[placeholder="Introducir correo"]')

  await input.type(config.credential.jira.email)

  const btn = page.locator('[id="login-submit"]')

  await btn.click()
}
