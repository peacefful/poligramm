import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/signin'),
      meta: {
        layout: 'default'
      }
    },
    {
      name: 'Signup',
      path: '/signup',
      component: () => import('@/pages/signup'),
      meta: {
        layout: 'default'
      }
    },
    {
      name: 'Chats',
      path: '/chats',
      component: () => import('@/pages/chats'),
      meta: {
        layout: 'custom'
      }
    },
    {
      name: 'Chat',
      path: '/chats/:chatName/:id/:uuid',
      component: () => import('@/pages/chat'),
      meta: {
        layout: 'default'
      }
    },
    {
      name: 'Profile',
      path: '/profile',
      component: () => import('@/pages/profile'),
      meta: {
        layout: 'default'
      }
    }
  ]
} satisfies RouterConfig
