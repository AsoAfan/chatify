import { ref } from 'vue'
import { web } from '@/lib/axios'
import { showErrorMessage, tryToDo } from '@/utils/functions'

export const loading = ref(false)

export const bootstrap = async () => {
  // const userStore = useUserStore()
  tryToDo(
    async () => {
      loading.value = true
      await web.get('/sanctum/csrf-cookie')
    },
    (e: Error) => {
      showErrorMessage(e.message)
    },
    () => {
      loading.value = false
    },
  )
}
