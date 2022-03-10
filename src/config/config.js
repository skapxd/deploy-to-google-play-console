// @ts-check
module.exports.config = {
  pages: {
    login:
      'https://accounts.google.com/signin/v2/identifier?service=androiddeveloper&passive=true&continue=https%3A%2F%2Fplay.google.com%2Fconsole%2Fdeveloper%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
  },
  credential: {
    email: process.env.EMAIL,
    pass: process.env.PASS
  }
}
