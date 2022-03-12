// @ts-check

const { config } = require('../config/config')
const { delay } = require('../helpers/delay')
const { confirmEmailJira } = require('./step_01_confirmEmail')
const { confirmPassJira } = require('./step_02_confirmPass')

/**
 * @param {import('playwright').Browser} browser
 * @return {Promise<import('playwright').Page>}
 * */
module.exports.loginJira = async (browser) => {
  const page = await browser.newPage()
  await page.goto(config.pages.jira.login)

  await confirmEmailJira(page)
  await delay({ seg: 1 })

  await confirmPassJira(page)
  await delay({ seg: 1 })

  return page
}
