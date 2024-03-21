import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { storage } from '@/shared/lib'

export async function isVerifyToken(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const token: boolean = Boolean(storage.getData('token'))
  token ? next('/chats') : next()
}