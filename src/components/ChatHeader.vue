<template>
  <header class="border-b shadow-sm w-full">
    <div class="p-4 flex items-center gap-4">
      <div class="size-8">
        <UserProfile class="size-full" :user="user" />
      </div>
      {{ user.username }}
    </div>
  </header>
</template>

<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import type { User } from '@/type/models'

defineProps<{
  user: User
}>()
</script>
