import { useLocalStorage } from '@/composables/useLocalStorage'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function guest(
  from: RouteLocationNormalized,
  to: RouteLocationNormalized,
  next: NavigationGuardNext,
): void {
  const ls = useLocalStorage()

  if (ls.hasToken()) {
    next({ name: 'home' })
    return
  }

  next()
}
