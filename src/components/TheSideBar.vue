<script setup lang="ts">
import SideBarHeader from '@/components/SideBarHeader.vue'
import SearchInput from '@/components/SearchInput.vue'
import ActiveUsers from '@/components/ActiveUsers.vue'
import ChatRow from '@/components/ChatRow.vue'
</script>

<template>
  <aside class="p-4 flex flex-col justify-center gap-4">
    <SideBarHeader />
    <SearchInput placeholder="Search..." class="w-full bg-gray-200" />
    <ActiveUsers />
    <section class="flex flex-col justify-center gap-3">
      <ChatRow v-for="i in 5" :key="i" />
    </section>
  </aside>
</template>

<style scoped></style>
