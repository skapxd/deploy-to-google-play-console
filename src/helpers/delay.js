// @ts-check
module.exports.delay = ({ seg = 1 }) =>
  new Promise((resolve) => setTimeout(resolve, seg * 1000))
