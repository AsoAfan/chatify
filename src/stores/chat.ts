import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Conversation } from '@/type/models'
import { tryToDo } from '@/utils/functions'
import { auth } from '@/lib/axios'
import { ENDPOINTS } from '@/utils/ENDPOINTS'
import type { CreateChatForm } from '@/type/formTypes'
import { toast } from '@/lib/toast'
import { useUserStore } from '@/stores/user'

export const useChatStore = defineStore('chat', () => {
  const authUser = useUserStore().user

  const chat = ref<Conversation | null>(null)
  const selectedUser = computed(() =>
    chat.value?.user1.id == authUser?.id ? chat.value?.user1 : chat.value?.user2,
  )

  const selectConversation = (ch: Conversation) => {
    chat.value = ch
  }

  const createChat = (formData: CreateChatForm) => {
    tryToDo(async () => {
      const { data } = await auth.post<Response>(ENDPOINTS.CreateChat, formData)
      toast(data)
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
  }
})
