<template>
  <main
    class="outline-none bg-gray-100 grid md:grid-cols-4 min-h-screen items-start"
    @keydown.esc="closeChat"
    tabindex="0"
  >
    <TheSideBar class="border-r h-screen" />
    <TheChatView />
  </main>
</template>
<script setup lang="ts">
import TheSideBar from '@/components/TheSideBar.vue'
import TheChatView from '@/components/TheChatView.vue'
import { useChatStore } from '@/stores/chat'

const { closeChat } = useChatStore()
</script>
