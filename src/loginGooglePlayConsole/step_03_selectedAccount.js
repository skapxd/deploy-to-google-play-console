// @ts-check

/** @param {import('playwright').Page} page */
module.exports.selectedAccountGPC = async (page) => {
  const account = page.locator('text=Q10 Soluciones')

  await account.click()
}
