<template>
  <div class="sc flex items-center gap-3 p-3 overflow-x-auto">
    <UserProfile
      class="shrink-0"
      :user="user"
      v-for="user in users"
      :key="user.id"
      @click="selectUser(user)"
    />
  </div>
</template>

<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import { users } from '@/utils/dumpData'
import { useChatStore } from '@/stores/chat'

const { selectUser } = useChatStore()
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
