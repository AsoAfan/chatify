<template>
  <main class="h-screen flex items-center">
    <div class="w-full border-2 flex items-center flex-col gap-6 p-2 max-w-sm mx-auto">
      <h1 class="text-center">Welcome Back</h1>
      <form action="" class="w-full flex gap-4 flex-col">
        <BaseInput placeholder="Username" v-model="username" />
        <BaseInput placeholder="Password" v-model="password" />
        <BaseButton> Login</BaseButton>
      </form>
    </div>
  </main>
</template>
<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

const username = ref('')
const password = ref('')
</script>
