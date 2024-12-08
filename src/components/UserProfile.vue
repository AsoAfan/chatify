<template>
  <div
    class="relative rounded-full bg-gray-300 shrink-0 size-12 border-transparent border-2 hover:border-black"
  >
    <UserProfileSkeleton v-if="!user" />
    <div v-else class="relative size-full">
      <div
        v-if="user.isActive"
        class="size-1/4 border-2 border-gray-300 rounded-full bg-green-700 absolute right-0.5 z-50 bottom-0"
      ></div>
      <img
        class="size-full rounded-full object-cover"
        :src="user.image_url"
        :alt="user.username"
        :title="user?.username"
      />
    </div>
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
