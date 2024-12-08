import { useLocalStorage } from '@/composables/useLocalStorage'

export function guest(from: any, to: any, next: any): void {
  const ls = useLocalStorage()

  if (ls.hasToken()) {
    next({ name: 'home' })
    return
  }

  next()
}
