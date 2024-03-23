import { router } from '@/app/providers'

export const useMoveRoute = (route: string) => {
  return router.push(route)
}