<template>
  <div
    class="rounded-full bg-gray-300 size-12 overflow-hidden border-transparent hover:border-black border-2"
  >
    <UserProfileSkeleton v-if="!user" />
    <img v-else class="size-full object-cover" :src="user.image_url" :alt="user.username" />
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/type/models'
import UserProfileSkeleton from '@/components/skeletons/UserProfileSkeleton.vue'

// const userStore = useUserStore()

defineProps<{
  user?: User
}>()
</script>
