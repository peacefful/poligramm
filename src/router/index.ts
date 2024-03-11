import { createRouter, createWebHashHistory } from 'vue-router'
import { isVerifyToken } from './verifyToken'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: () => import('@/views/auth-reg-view/Authorization.vue'),
      beforeEnter: isVerifyToken
    },
    {
      path: '/registration',
      name: 'signup',
      component: () => import('@/views/auth-reg-view/Registration.vue'),
      beforeEnter: isVerifyToken
    },
    {
      path: '/chats',
      name: 'chats',
      component: () => import('@/views/chats-view/Chats.vue')
    }
  ]
})

export default router
