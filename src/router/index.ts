import { createRouter, createWebHashHistory } from 'vue-router'
import { isVerifyToken } from './verifyToken'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'signin',
			component: () => import('@/views/auth-reg-view/AuthorizationView.vue'),
			beforeEnter: isVerifyToken
		},
		{
			path: '/registration',
			name: 'signup',
			component: () => import('@/views/auth-reg-view/RegistrationView.vue'),
			beforeEnter: isVerifyToken
		},
		{
			path: '/chats',
			name: 'chats',
			component: () => import('@/views/ChatsView.vue')
		}
	]
})

export default router
