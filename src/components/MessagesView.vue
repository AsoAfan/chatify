<template>
  <section v-if="selectedUser">
    <div class="w-full flex flex-col gap-2 items-center justify-start p-8">
      <div class="flex flex-col border-b-2 pb-4 w-full items-center">
        <UserProfile :user="selectedUser" class="size-24" />
        <strong class="text-lg tracking-wide text-center w-fit mx-auto">
          {{ selectedUser.username }}
        </strong>
      </div>
    </div>
    <div v-if="chat.messages.length" class="p-4 flex flex-col gap-4">
      <MessageContainer :chat="chat" />
    </div>
    <div v-else>No messages found.</div>
  </section>
</template>
<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import type { Conversation, User } from '@/type/models'
import MessageContainer from '@/components/MessageContainer.vue'

// const chatStore = useChatStore()
// const userStore = useUserStore()

defineProps<{
  selectedUser?: User
  chat: Conversation
}>()
</script>
