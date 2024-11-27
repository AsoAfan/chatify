<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import { users } from '@/utils/dumpData'
</script>

<template>
  <div class="flex items-center gap-3 p-3 w-full overflow-x-scroll">
    <UserProfile :user="user" v-for="user in users" :key="user.id" />
  </div>
</template>
<style scoped></style>
