// @ts-check
/**
 * @param {any[]} arr
 * @param {() => Promise} asyncCallback
 * @returns
 */
export const findAsync = async (arr, asyncCallback) => {
  const promises = arr.map(asyncCallback)
  const results = await Promise.all(promises)
  const index = results.findIndex((result) => result)
  return arr[index]
}
