import { defineStore } from 'pinia'
import type { LoginForm, SignupForm } from '@/type/formTypes'
import { showErrorMessage, tryToDo } from '@/utils/functions'
import { api, auth, web } from '@/lib/axios'
import type { AuthResponseData, NoContent, Response } from '@/type/responseTypes'
import { ENDPOINTS } from '@/utils/ENDPOINTS'
import { toast } from '@/lib/toast'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { ref } from 'vue'
import type { User } from '@/type/models'
import router from '@/router'
import type { RouteLocationRaw } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const searchResult = ref<User[]>([])

  // const chatStore = useChatStore()

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
    user.value = responseData.user

    if (responseData.token) ls.setToken(responseData.token)

    if (options.withToast) toast.success(message)

    if (options.withRedirect) router.push(options.redirectTo ?? { name: 'home' })
  }

  // const addChat = (chat) => {
  //   user.value?.conversations.push(chat)
  // }

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
        const { data } = await web.post<Response<AuthResponseData>>(ENDPOINTS.Login, formData)
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
      const { data } = await api.get<Response<any>>(ENDPOINTS.Search(s))
      searchResult.value = data.data
    })
  }

  return {
    user,
    searchResult,
    // addChat,
    getUser,
    search,
    signup,
    login,
    logout,
  }
})
