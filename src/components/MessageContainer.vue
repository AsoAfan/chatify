<template>
  <div
    class="flex items-end gap-2"
    :class="{ 'self-end flex-row-reverse': message.user?.id == userStore.user?.id }"
    v-for="message in chat.messages"
    :key="message.id"
  >
    <UserProfile :user="message.user" class="size-9" />
    <MessageText :message="message" :user="userStore.user" />
  </div>
</template>
<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import MessageText from '@/components/MessageText.vue'
import type { Conversation } from '@/type/models'
import { useUserStore } from '@/stores/user'

defineProps<{
  chat: Conversation
}>()

const userStore = useUserStore()
</script>
