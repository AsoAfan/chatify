<template>
  <section class="h-full" v-if="chatStore.conversation && chatStore.selectedUser">
    <div class="w-full flex flex-col gap-2 items-center justify-start p-8">
      <div class="flex flex-col border-b-2 pb-4 w-full items-center">
        <UserProfile :user="chatStore.selectedUser" class="size-24" />
        <strong class="text-lg tracking-wide text-center w-fit mx-auto">
          {{ chatStore.selectedUser.username }}
        </strong>
      </div>
    </div>
    <div v-if="chatStore.conversation.messages.length" class="p-4 flex flex-col gap-4">
      <div
        class="flex items-end gap-2"
        :class="{ 'self-end flex-row-reverse': message.user?.id == userStore.user?.id }"
        v-for="message in chatStore.conversation.messages"
        :key="message.id"
      >
        <UserProfile :user="message.user" class="size-9" />
        <p
          class="py-2 px-4 bg-gray-300 w-fit text-lg"
          :class="{
            'bg-gray-600 text-gray-300 rounded-l-lg rounded-tr-lg':
              message.user?.id == userStore.user?.id,
            'rounded-r-lg rounded-tl-lg': message.user?.id !== userStore.user?.id,
          }"
        >
          {{ message.body }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import { useChatStore } from '@/stores/chat'
import { useUserStore } from '@/stores/user'

const chatStore = useChatStore()
const userStore = useUserStore()
</script>
