<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
</script>

<template>
  <div class="flex items-center gap-3 p-3">
    <UserProfile v-for="i in 5" :key="i" />
  </div>
</template>
<style scoped></style>
