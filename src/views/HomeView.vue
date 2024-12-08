<template>
  <main
    class="outline-none bg-gray-100 grid md:grid-cols-4 min-h-screen items-start"
    @keydown.esc="unselectChat"
    tabindex="0"
  >
    <TheSideBar
      @chat-selected="showChatList = false"
      :class="{
        'hidden md:flex': !showChatList,
      }"
      class="border-r h-screen"
    />
    <TheChatView
      @chat-closed="unselectChat"
      :class="{
        'hidden md:block': showChatList,
      }"
    />
  </main>
</template>
<script setup lang="ts">
import TheSideBar from '@/components/TheSideBar.vue'
import TheChatView from '@/components/TheChatView.vue'
import { useChatStore } from '@/stores/chat'
import { echo } from '@/lib/echo'
import type { User } from '@/type/models'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const showChatList = ref<boolean>(true)

const chatStore = useChatStore()
const userStore = useUserStore()

const unselectChat = () => {
  chatStore.closeChat()
  showChatList.value = true
}

echo
  .join('user.join')
  .joining((user: User) => {
    user.isActive = true
    userStore.activeUsers.push(user)
  })
  .here((users: User[]) => {
    userStore.activeUsers = users
      .map((u) => ({ ...u, isActive: true }))
      .filter((u) => u.id !== userStore.user?.id)
  })
  .leaving((user: User) => {
    userStore.activeUsers = userStore.activeUsers.filter((u) => u.id !== user.id)
  })
</script>
