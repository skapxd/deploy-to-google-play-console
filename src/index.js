import 'dotenv/config'
import { chromium } from 'playwright'
import { delay } from './helpers/delay.js'
import { loginJira } from './jira/loginJira/loginJira.js'

const main = async () => {
  const browser = await chromium.launch({ headless: false })

  // const page = await loginGooglePlayConsole(browser)
  const page = await loginJira(browser)

  await delay({ seg: 60 })
  await browser.close()
}

main()
