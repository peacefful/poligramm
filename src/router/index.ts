import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
	{
	  path: '/',
	  name: 'signin',
	  component: () => import('@/views/auth-reg-view/AuthorizationView.vue')
	},
	{
	  path: '/registration',
	  name: 'signup',
	  component: () => import('@/views/auth-reg-view/RegistrationView.vue')
	},
	{
	  path: '/home',
	  name: 'home',
	  component: () => import('@/views/home-view/HomeView.vue')
	}
  ]
})

export default router
