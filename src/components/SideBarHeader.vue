<template>
  <header class="flex items-center justify-between">
    <UserProfile v-if="userStore.user" :user="userStore.user" class="size-8" />
    <UserProfileSkeleton v-else />
    <button @click="userStore.logout">logout</button>
  </header>
</template>

<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import { useUserStore } from '@/stores/user'
import UserProfileSkeleton from '@/components/skeletons/UserProfileSkeleton.vue'

const userStore = useUserStore()
</script>
