<template>
  <div class="sc flex items-center gap-3 p-3 overflow-x-auto">
    <div v-if="userStore.activeUsers.length">
      <UserProfile :user="user" v-for="user in userStore.activeUsers" :key="user.id" />
    </div>
    <p v-else class="text-center w-full text-sm">No active users</p>
    <!-- @click="selectUser(user)" -->
  </div>
</template>

<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import { useUserStore } from '@/stores/user'

// const { selectUser } = useChatStore()
const userStore = useUserStore()
</script>
<style scoped>
::-webkit-scrollbar {
  height: 2px !important;
}

.sc:hover::-webkit-scrollbar-thumb {
  background-color: #aaa;
}

.sc::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 1111px;
}

.sc:hover::-webkit-scrollbar {
  height: 2px !important;
}
</style>
