export const isEmptyObj = (obj: object): boolean => {
  for (const key in obj) {
    if (key) {
      return false
    }
  }
  return true
}