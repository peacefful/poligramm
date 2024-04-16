export const chatRouteName = (chatName: string): string => {
  let currentRouteName: string = ''

  for (const iterator of chatName) {
    if (iterator === ' ') {
      currentRouteName += iterator.replace(' ', '_')
    }
    currentRouteName += iterator.trim()
  }

  return currentRouteName
}