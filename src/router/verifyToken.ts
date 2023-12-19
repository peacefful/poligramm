import { type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router'
import { storage } from '@/utils/storage'

export async function isVerifyToken(
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) {
	const token: boolean = Boolean(storage.getData('token'))
	token ? next('/home') : next()
}