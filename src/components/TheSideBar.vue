<template>
  <aside class="flex flex-col justify-start p-3 gap-4 overflow-y-scroll">
    <section class="">
      <SideBarHeader />
      <SearchUsers />
      <ActiveUsers class="shrink-0" />
    </section>
    <section class="flex flex-col justify-center gap-3">
      <ChatRow
        :user="user.user2"
        v-for="user in userStore.user?.conversations"
        :key="user.id"
        @click="selectUser(user)"
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

const { selectUser } = useChatStore()
const userStore = useUserStore()
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
