import { useUserStore } from '@/stores/user'
import { useLocalStorage } from '@/composables/useLocalStorage'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function auth(
  from: RouteLocationNormalized,
  to: RouteLocationNormalized,
  next: NavigationGuardNext,
): void {
  const userStore = useUserStore()
  const ls = useLocalStorage()

  if (!ls.hasToken()) {
    next({ name: 'login' })
    return
  }

  if (!userStore.user) {
    userStore.getUser()
  }

  // if (!userStore.user) ls.removeToken()
  //   next({ name: 'login' })
  //   return
  // }
  next()
}
