// @ts-check

const { delay } = require('../helpers/delay')

/** @param {import('playwright').Page} page */
module.exports.selectedAccount = async (page) => {
  const account = page.locator('text=Q10 Soluciones')

  await account.click()

  await delay({ seg: 3 })
}
