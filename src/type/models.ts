export interface User {
  id: string
  username: string
  email: string
  image_url: string
  conversations: any[]
  createdAt: string
  updatedAt: string
}

export interface Conversation {
  id: string
  messages: Message[]
  user1: User
  user2: User
}

export interface Message {
  id: string
  body: string
  is_seen: boolean
  user?: User
  created_at: string
}
