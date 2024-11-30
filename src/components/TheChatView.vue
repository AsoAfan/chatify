<template>
  <section class="md:col-span-3 h-screen">
    <div v-if="chatStore.conversation" class="h-full flex flex-col">
      <ChatHeader
        v-if="chatStore.selectedUser"
        :user="chatStore.selectedUser"
        class="sticky top-0 z-50 bg-white"
      />
      <div class="flex flex-col grow">
        <MessagesView />
        <MessageInput />
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

const chatStore = useChatStore()
</script>
