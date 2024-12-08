<template>
  <header class="border-b shadow-sm w-full">
    <div class="p-4 flex items-center gap-4">
      <span class="text-lg lg:hidden cursor-pointer" @click="emit('chatClosed')">&larr;</span>
      <div class="size-8 flex items-center gap-2">
        <UserProfile class="size-full" :user="user" />
      </div>
      {{ user.username }}
    </div>
  </header>
</template>

<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import type { User } from '@/type/models'

defineProps<{
  user: User
}>()

const emit = defineEmits(['chatClosed'])
</script>
