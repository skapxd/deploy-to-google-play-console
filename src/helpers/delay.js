// @ts-check
/** @return {Promise<void>}  */
export const delay = ({ seg = 1 }) =>
  new Promise((resolve) => setTimeout(resolve, seg * 1000))
