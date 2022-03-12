// @ts-check

import { config } from '../../config/config'

/** @param {import("playwright").Browser} browser */
export const searchApp = async (browser) => {
  const page = await browser.newPage()

  await page.goto(config.pages.jira.getPageByCode(config.pages.jira.appCode))
}
