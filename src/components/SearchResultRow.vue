<template>
  <div class="p-4 bg-white w-full shadow-xl rounded flex items-center gap-4 hover:bg-gray-100">
    <UserProfile :user="user" />
    <p>{{ user.username }}</p>
  </div>
</template>
<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import type { User } from '@/type/models'

defineProps<{
  user: User
}>()
</script>
