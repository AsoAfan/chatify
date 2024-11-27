<template>
  <main class="h-screen flex flex-col items-center justify-center">
    <Chattify />
    <BorderContainer>
      <template #title>Welcome Back</template>
      <form @submit.prevent="onSubmit" class="w-full flex gap-4 flex-col">
        <BaseInput placeholder="username" v-model="form.username" required />
        <BaseInput placeholder="password" type="password" v-model="form.password" required />
        <div class="flex items-center gap-3 justify-end">
          <RouterLink
            class="border-b-2 p-2 text-sm hover:border-transparent"
            :to="{ name: 'signup' }"
          >
            Create new account
          </RouterLink>
          <BaseButton>Login</BaseButton>
        </div>
      </form>
    </BorderContainer>
  </main>
</template>
<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
import { reactive } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import Chattify from '@/components/ChattifyLogo.vue'
import BorderContainer from '@/components/BorderContainer.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

// const username = ref('')
// const password = ref('')

const form = reactive({
  username: '',
  password: '',
})

const onSubmit = () => {
  userStore.login(form)
}
</script>
