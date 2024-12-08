<template>
  <main class="h-screen flex flex-col items-center justify-center">
    <ChattifyLogo />

    <BorderContainer>
      <template #title>Welcome to our world</template>
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col gap-4 w-full"
        enctype="multipart/form-data"
      >
        <BaseInput placeholder="username" v-model="form.username" />
        <BaseInput placeholder="email" type="email" v-model="form.email" />
        <BaseInput placeholder="password" type="password" v-model="form.password" />
        <BaseInput
          placeholder="confirm password"
          type="password"
          v-model="form.password_confirmation"
        />
        <BaseInput type="file" accept="image/*" @change="onUpload" />

        <div class="flex items-center gap-3 justify-end">
          <RouterLink
            class="border-b-2 p-2 text-sm hover:border-transparent"
            :to="{ name: 'login' }"
          >
            Login with existing account
          </RouterLink>
          <BaseButton> Signup</BaseButton>
        </div>
      </form>
    </BorderContainer>
  </main>
</template>

<script setup lang="ts">
import BorderContainer from '@/components/BorderContainer.vue'
import ChattifyLogo from '@/components/ChattifyLogo.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useUserStore } from '@/stores/user'
import { reactive } from 'vue'

const userStore = useUserStore()

const form = reactive({
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  profile_image: null,
})

function onUpload(e: Event) {
  form.profile_image = e.target.files[0]
  console.log(e.target.files, form.profile_image)
}

const onSubmit = () => {
  userStore.signup(form)
}
</script>
