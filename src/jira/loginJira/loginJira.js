// @ts-check

import { config } from '../../config/config.js'
import { delay } from '../../helpers/delay.js'
import { confirmEmailJira } from './step_01_confirmEmailJira.js'
import { confirmPassJira } from './step_02_confirmPassJira.js'

/**
 * @param {import('playwright').Browser} browser
 * @return {Promise<import('playwright').Page>}
 * */
export const loginJira = async (browser) => {
  const page = await browser.newPage()
  await page.goto(config.pages.jira.login)

  await confirmEmailJira(page)
  await delay({ seg: 1 })

  await confirmPassJira(page)
  await delay({ seg: 1 })

  return page
}
