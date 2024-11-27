<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import type { User } from '@/type/models'

defineProps<{
  user: User
}>()
</script>

<template>
  <div class="w-full flex items-center gap-2 hover:bg-gray-200 p-2 rounded transition">
    <UserProfile :user="user" />
    <div class="flex flex-col">
      <strong class="text-sm font-medium">{{ user.username }}</strong>
      <p class="truncate w-full text-xs">Message Body that may be overflowed</p>
    </div>
  </div>
</template>

<style scoped></style>
