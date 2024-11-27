import { useUserStore } from '@/stores/user'
import { useLocalStorage } from '@/composables/useLocalStorage'

export function auth(from: any, to: any, next: any): void {
  const userStore = useUserStore()
  const ls = useLocalStorage()

  if (!ls.hasToken()) {
    next({ name: 'login' })
    return
  }

  if (ls.hasToken() && !userStore.user) {
    userStore.getUser()
  }

  next()
}
