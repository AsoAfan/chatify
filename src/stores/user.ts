import { defineStore } from 'pinia'
import type { LoginForm, SignupForm } from '@/type/formTypes'
import { showErrorMessage, tryToDo } from '@/utils/functions'
import { api, auth } from '@/lib/axios'
import type { AuthResponseData, NoContent, Response } from '@/type/responseTypes'
import { ENDPOINTS } from '@/utils/ENDPOINTS'
import { toast } from '@/lib/toast'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { computed, ref } from 'vue'
import type { Conversation, User } from '@/type/models'
import router from '@/router'
import type { RouteLocationRaw } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const searchResult = ref<User[]>([])
  const activeUsers = ref<User[]>([])

  const sortedChats = computed(() =>
    user.value?.conversations.sort((a, b) => {
      const latestMessageA = a.messages[a.messages.length - 1]
      const latestMessageB = b.messages[b.messages.length - 1]

      if (!latestMessageA || !latestMessageB) return 0

      const dateA = new Date(latestMessageA.created_at).getTime()
      const dateB = new Date(latestMessageB.created_at).getTime()

      return dateB - dateA
    }),
  )

  const ls = useLocalStorage()

  function authenticateUser(
    message: string,
    responseData: AuthResponseData,
    options: {
      withRedirect: boolean
      redirectTo?: RouteLocationRaw
      withToast?: boolean
    } = { withRedirect: true, withToast: false },
  ) {
    user.value = { ...responseData.user, isActive: true }

    if (responseData.token) ls.setToken(responseData.token)

    if (options.withToast) toast.success(message)

    if (options.withRedirect) router.push(options.redirectTo ?? { name: 'home' })
  }

  const addChat = (chat: Conversation) => {
    user.value?.conversations.push(chat)
  }

  const getUser = () => {
    tryToDo(async () => {
      const { data } = await auth.get<Response<AuthResponseData>>(ENDPOINTS.GetUser)
      authenticateUser(data.message, data.data, {
        withRedirect: false,
        withToast: false,
      })
    })
  }

  const signup = (formData: SignupForm) => {
    tryToDo(
      async () => {
        const { data } = await api.post<Response<AuthResponseData>>(ENDPOINTS.Signup, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        authenticateUser(data.message, data.data)
      },
      (e) => showErrorMessage(e.response?.data?.message),
    )
  }

  const login = (formData: LoginForm) => {
    tryToDo(
      async () => {
        const { data } = await api.post<Response<AuthResponseData>>(ENDPOINTS.Login, formData)
        authenticateUser(data.message, data.data)
      },
      (e) => showErrorMessage(e.response?.data?.message),
    )
  }

  const logout = () => {
    tryToDo(async () => {
      await auth.post<NoContent>(ENDPOINTS.Logout)
      ls.removeToken()
      user.value = null
      router.push({ name: 'login' })
    })
  }

  const search = (s: string) => {
    tryToDo(async () => {
      const { data } = await auth.get<Response<User[]>>(ENDPOINTS.Search(s))
      searchResult.value = data.data
    })
  }

  return {
    user,
    searchResult,
    sortedChats,
    activeUsers,
    addChat,
    getUser,
    search,
    signup,
    login,
    logout,
  }
})
