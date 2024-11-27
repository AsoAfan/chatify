<script setup lang="ts">
import type { User } from '@/type/models'
import UserProfileSkeleton from '@/components/skeletons/UserProfileSkeleton.vue'

// const userStore = useUserStore()

defineProps<{
  user: User
}>()
</script>

<template>
  <UserProfileSkeleton v-if="!user" />
  <div class="rounded-full bg-gray-300 size-12 overflow-hidden">
    <img class="size-full object-cover" :src="user?.image_url" :alt="user?.username" />
  </div>
</template>

<style scoped></style>
