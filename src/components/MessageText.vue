<template>
  <p
    class="py-2 px-4 bg-gray-300 w-fit text-lg"
    :class="{
      'bg-gray-600 text-gray-300 rounded-l-lg rounded-tr-lg': message.user.id == user?.id,
      'rounded-r-lg rounded-tl-lg': message.user?.id !== user?.id,
    }"
  >
    {{ message.body }}
  </p>
</template>
<script setup lang="ts">
import type { Message, User } from '@/type/models'

defineProps<{
  message: Message
  user: User
}>()
</script>
