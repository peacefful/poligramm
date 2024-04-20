import { useRoute } from 'vue-router'

export const getIdByRoutePath = () => {
  const currentPath = useRoute().fullPath
  let parts = currentPath.split('/')
  let id = parts[parts.length - 1]

  return id
}