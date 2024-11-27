<template>
  <main class="h-screen w-screen flex items-center justify-center" v-if="loading">
    <ChattifyLogo class="text-5xl animate-pulse" />
  </main>
  <RouterView v-else />
</template>
<script setup lang="ts">
import ChattifyLogo from '@/components/ChattifyLogo.vue'
import { loading } from '@/bootstrap/server'
</script>
