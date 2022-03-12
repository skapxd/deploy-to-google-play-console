// @ts-check
export const config = {
  pages: {
    jira: {
      appCode: process.env.TASK_JIRA_ID,
      getPageByCode: (code = '') =>
        `https://q10soluciones.atlassian.net/browse/${code}`,
      login:
        'https://id.atlassian.com/login?continue=https%3A%2F%2Fid.atlassian.com%2Fstart%3FatlOrigin%3DeyJpIjoiNmQ5YjRjNTE0MTc5NGQ3NGFiZjczNDQzODI2ZjRiOTAiLCJwIjoid2FjLWdsb2JhbGRyb3Bkb3duIn0'
    },
    googlePlayConsole: {
      login:
        'https://accounts.google.com/signin/v2/identifier?service=androiddeveloper&passive=true&continue=https%3A%2F%2Fplay.google.com%2Fconsole%2Fdeveloper%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
    }
  },
  credential: {
    googlePlayConsole: {
      email: process.env.EMAIL_Google_Play_Console,
      pass: process.env.PASS_Google_Play_Console
    },
    jira: {
      email: process.env.EMAIL_JIRA,
      pass: process.env.PASS_JIRA
    }
  }
}
