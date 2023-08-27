export const isObject = (data) => {
  return Object.prototype.toString(data) === '[object Object]'
}