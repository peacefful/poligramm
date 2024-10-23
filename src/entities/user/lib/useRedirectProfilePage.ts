import { useRouter } from 'vue-router'

export const useRedirectProfilePage = () => {
  const router = useRouter()

  const redirectProfilePage = () => router.push('/profile')

  return { redirectProfilePage }
}
