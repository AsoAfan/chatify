<template>
  <div class="relative mt-4 z-10">
    <SearchInput placeholder="Search..." class="peer w-full bg-gray-200 mb-1" v-model="query" />
    <div class="absolute w-full peer-focus:block hidden" v-if="query.length > 0">
      <SearchResultRow
        v-for="user in userStore.searchResult"
        :key="user.id"
        :user="user"
        @click="onCreateChat(user)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue'
import { useUserStore } from '@/stores/user'
import { ref, watch } from 'vue'
import SearchResultRow from '@/components/SearchResultRow.vue'
import { useChatStore } from '@/stores/chat'
import type { User } from '@/type/models'

const userStore = useUserStore()
const chatStore = useChatStore()

const query = ref('')

watch(query, () => {
  if (query.value) userStore.search(query.value)
})

const onCreateChat = (user: User) => {
  chatStore.createChat({
    user_id: user.id,
  })
  userStore.addChat()
  // userStore.user?.conversations
  chatStore.selectUser(user)
  query.value = ''
}
</script>
<!--<style scoped>-->
<!--::-webkit-scrollbar {-->
<!--  width: 1px;-->
<!--}-->

<!--::-webkit-scrollbar:hover {-->
<!--  width: 5px;-->
<!--}-->

<!--::-webkit-scrollbar-thumb {-->
<!--  background-color: #aaa;-->
<!--  border-radius: 1111px;-->
<!--}-->
<!--</style>-->
