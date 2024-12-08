import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Conversation, Message } from '@/type/models'
import { tryToDo } from '@/utils/functions'
import { auth } from '@/lib/axios'
import { ENDPOINTS } from '@/utils/ENDPOINTS'
import type { CreateChatForm } from '@/type/formTypes'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import type { ChatCreate, Response } from '@/type/responseTypes'

export const useChatStore = defineStore('chat', () => {
  const authUser = useUserStore()
  const router = useRouter()

  const chat = ref<Conversation | null>(null)
  const selectedUser = computed(() => {
    return chat.value?.user1.id == authUser.user?.id ? chat.value?.user2 : chat.value?.user1
  })

  // const lastMessage = chat.value?.messages.at(-1)

  const pushMessage = (message: Message) => {
    chat.value?.messages.push(message)
  }

  const selectConversation = (ch: Conversation) => {
    chat.value = ch
    router.push({
      query: {
        chat: ch.id,
      },
    })
  }

  const createChat = (formData: CreateChatForm) => {
    tryToDo(async () => {
      const { data } = await auth.post<Response<ChatCreate>>(ENDPOINTS.CreateChat, formData)
      chat.value = data.data.conversation
      authUser.addChat(chat.value)
    })
  }

  const sendMessage = (body: string) => {
    tryToDo(async () => {
      const {} = auth.post(ENDPOINTS.SendMessage, {
        body,
        conversation_id: chat.value?.id,
      })
    })
  }

  const closeChat = () => {
    // selectedUser.value = null
    chat.value = null
  }

  return {
    conversation: chat,
    selectedUser,
    selectUser: selectConversation,
    createChat,
    sendMessage,
    closeChat,
    pushMessage,
  }
})
