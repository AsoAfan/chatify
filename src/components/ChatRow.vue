<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
</script>

<template>
  <div class="w-full flex items-center gap-2 hover:bg-gray-200 p-2 rounded transition">
    <UserProfile />
    <div class="flex flex-col">
      <strong class="text-sm font-medium">Username</strong>
      <p class="truncate w-full text-xs">Message Body that may be overflowed</p>
    </div>
  </div>
</template>

<style scoped></style>
