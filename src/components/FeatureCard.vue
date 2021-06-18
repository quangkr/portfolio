<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  thumbsUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col corner shadow">
    <div class="h-1/3">
      <img :src="thumbsUrl" alt="" />
    </div>
    <div class="h-2/3 py-24">
      <div class="my-8">
        {{ title }}
      </div>
      <div class="text-console-7">
        {{ description }}
      </div>
    </div>
  </div>
</template>
