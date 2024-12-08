<template>
  <section class="md:col-span-3 h-screen">
    <div v-if="chatStore.conversation" class="h-full flex flex-col">
      <ChatHeader
        @chat-closed="emit('chatClosed')"
        v-if="chatStore.selectedUser"
        :user="chatStore.selectedUser"
        class="sticky top-0 z-50 bg-white"
      />
      <div class="flex flex-col grow overflow-auto h-full">
        <MessagesView
          class="chat"
          :chat="chatStore.conversation"
          :selectedUser="chatStore.selectedUser"
        />
        <MessageInput class="sticky bottom-0" />
      </div>
    </div>
    <div v-else class="min-h-screen h-full flex items-center justify-center">
      Please select a chat.
    </div>
  </section>
</template>
<script setup lang="ts">
import ChatHeader from '@/components/ChatHeader.vue'
import { useChatStore } from '@/stores/chat'
import MessageInput from '@/components/MessageInput.vue'
import MessagesView from '@/components/MessagesView.vue'
import { watchEffect } from 'vue'
import { echo } from '@/lib/echo'
import type { MessageNotification } from '@/type/responseTypes'

const chatStore = useChatStore()

const emit = defineEmits(['chatClosed'])
watchEffect(() => {
  if (chatStore.conversation) {
    echo.private(`user.${chatStore.conversation?.id}`).notification((e: MessageNotification) => {
      chatStore.pushMessage(e.message)
    })
  }
})
</script>
