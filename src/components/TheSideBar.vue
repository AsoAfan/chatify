<template>
  <aside class="flex flex-col justify-start p-3 gap-4 overflow-y-scroll">
    <section class="">
      <SideBarHeader />
      <SearchUsers />
      <ActiveUsers class="shrink-0" />
    </section>
    <section class="flex flex-col justify-center gap-3">
      <ChatRow
        :isActive="chatStore.conversation?.id == conversation.id"
        v-for="conversation in userStore.sortedChats"
        :conversation="conversation"
        :key="conversation.id"
        @click="onClick(conversation)"
      />
    </section>
  </aside>
</template>

<script setup lang="ts">
import SideBarHeader from '@/components/SideBarHeader.vue'
import ActiveUsers from '@/components/ActiveUsers.vue'
import ChatRow from '@/components/ChatRow.vue'
import { useChatStore } from '@/stores/chat'
import SearchUsers from '@/components/SearchUsers.vue'
import { useUserStore } from '@/stores/user'
import type { Conversation } from '@/type/models'

const chatStore = useChatStore()
const userStore = useUserStore()

//
// if (router.query.chat) {
//   const chat = userStore.user?.conversations.find((c) => c.id === router.query.chat)
//   chatStore.selectUser(chat as Conversation)
// }

const emit = defineEmits(['chatSelected'])

const onClick = (conversation: Conversation) => {
  chatStore.selectUser(conversation)
  emit('chatSelected', conversation)
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 1px;
}

::-webkit-scrollbar:hover {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 1111px;
}
</style>
