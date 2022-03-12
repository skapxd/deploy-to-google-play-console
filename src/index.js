import 'dotenv/config'
import { chromium } from 'playwright'
import { delay } from './helpers/delay.js'
import { loginJira } from './Jira/loginJira/loginJira.js'
import { searchApp } from './Jira/searchApp/searchApp.js'

const main = async () => {
  const browser = await chromium.launch({ headless: false })

  let page = await loginJira(browser)

  await searchApp(browser)

  await delay({ seg: 60 })
  await browser.close()
}

main()
