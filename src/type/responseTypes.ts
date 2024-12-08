import type { User } from '@/type/models'

export interface Response<T> {
  message: string
  data: T
  code: number
}

export type NoContent = object

export interface AuthResponseData {
  user: User
  token?: string
}
