<script setup lang="ts"></script>

<template>
  <div
    class="w-full border-2 flex items-center flex-col gap-6 px-4 py-8 max-w-sm mx-auto rounded-lg shadow-md"
  >
    <slot class="text-center" name="title">Title</slot>

    <div class="w-full">
      <slot>Border Container</slot>
    </div>
  </div>
</template>

<style scoped></style>
