import { toast } from '@/lib/toast'
import type { AxiosError } from 'axios'

export function showErrorMessage(message: string | null): void {
  if (message) toast.error(message)
}

export const tryToDo = (
  callback: () => void | Promise<void>,
  fail: (e: AxiosError) => void = (e) => {
    showErrorMessage(e.message)
  },
  $finally: () => void = () => {},
) => {
  try {
    const r = callback()
    if (r instanceof Promise) {
      r.catch((e) => fail(e))
    }
  } catch (e) {
    fail(e as AxiosError)
    console.log(e)
  } finally {
    $finally()
  }
}
