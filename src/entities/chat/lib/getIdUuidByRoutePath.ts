export const getIdUuidByRoutePath = (route: string) => {
  const parts = route.split('/')

  const id = parts[parts.length - 2]
  const uuid = parts[parts.length - 1]

  return { id, uuid }
}