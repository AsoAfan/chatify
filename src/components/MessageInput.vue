<template>
  <form @submit.prevent="onSubmit" class="mt-auto p-4 flex items-center gap-2">
    <BaseInput
      multiline
      placeholder="Write your message..."
      class="text-sm !p-3 rounded-lg h-auto"
      v-model="body"
    />
    <BaseButton>Send</BaseButton>
  </form>
</template>
<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import { useChatStore } from '@/stores/chat'
import { ref } from 'vue'

const chatStore = useChatStore()
const body = ref('')

const onSubmit = () => {
  chatStore.sendMessage(body.value)
  body.value = ''
}
</script>
