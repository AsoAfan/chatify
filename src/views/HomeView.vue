<template>
  <main class="grid md:grid-cols-4 min-h-screen items-start">
    <TheSideBar />
    <div class="md:col-span-3 bg-gray-300 p-3">Message View</div>
  </main>
</template>
<script setup lang="ts">
import TheSideBar from '@/components/TheSideBar.vue'
</script>
