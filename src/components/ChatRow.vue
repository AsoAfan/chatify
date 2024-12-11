<template>
  <div
    class="w-full flex items-end justify-between gap-2 hover:bg-gray-200 p-2 rounded transition"
    :class="{ 'bg-gray-200': isActive }"
  >
    <UserProfile :user="user" />
    <div class="flex flex-col w-full">
      <strong class="text-sm font-medium">{{ user.username }}</strong>
      <div class="flex items-ce justify-between">
        <div class="truncate w-full text-xs">
          <p v-if="lastMessage">
            {{ lastMessage?.user.id !== user.id ? 'You' : user.username }}:
            {{ lastMessage?.body }}
          </p>
          <p v-else>{{ `Say hi to ${user.username}` }}</p>
        </div>
      </div>
    </div>
    <p v-if="lastMessage" class="text-[10px] w-fit text-nowrap text-gray-400">
      {{ formatDiffForHumans(lastMessage.created_at) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import type { Conversation } from '@/type/models'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'
import { useDateFormatter } from '@/composables/useDateFormatter'

const { formatDiffForHumans } = useDateFormatter()
const { conversation, isActive = false } = defineProps<{
  conversation: Conversation
  isActive?: boolean
}>()
const userStore = useUserStore()

const user = computed(() =>
  conversation.user1.id == userStore.user?.id ? conversation.user2 : conversation.user1,
)

const lastMessage = computed(() => conversation.messages[conversation.messages.length - 1])
</script>
