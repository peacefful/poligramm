import type { RouterConfig } from '@nuxt/schema'
import { useValidToken } from '@/shared/lib/hooks'

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
        layout: 'custom',
        middleware: function (to, from) {
          console.log(useValidToken())

          if (!useValidToken()) return navigateTo('/')
        }
      }
    },
    {
      name: 'Chat',
      path: '/chat/:chatName/:id/:uuid',
      component: () => import('~/pages/chat/[chatName]/[id]'),
      meta: {
        layout: 'custom',
        middleware: function (to, from) {
          if (!useValidToken()) return navigateTo('/')
        }
      }
    },
    {
      name: 'Profile',
      path: '/profile',
      component: () => import('@/pages/profile'),
      meta: {
        layout: 'default',
        middleware: function (to, from) {
          if (!useValidToken()) return navigateTo('/')
        }
      }
    }
  ]
} satisfies RouterConfig
