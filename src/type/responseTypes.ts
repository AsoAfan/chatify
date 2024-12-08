import type { Conversation, Message, User } from '@/type/models'

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

export interface MessageNotification {
  id: string
  type: string
  chat_id: string
  message: Message
}

export interface ChatCreate {
  conversation: Conversation
  user: User
}
