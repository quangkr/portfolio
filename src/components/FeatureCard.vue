<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  imgSrc: String,
  title: String,
  tags: Array,
  demoLink: String,
  sourceLink: String,
})
</script>

<template>
  <div
    class="
      flex flex-col
      rounded-md shadow
    "
  >
    <div>
      <img alt="Feature thumbnail" :src="imgSrc" />
    </div>
    <div class="px-6 py-12">
      <div class="mb-8 text-2xl">
        {{ title }}
      </div>
      <div class="prose">
        <slot></slot>
      </div>
      <div class="flex flex-col mx-auto mt-6 items-center">
        <base-button class="flex items-center">
          Live Demo
          <uil-external-link-alt class="w-6 h-auto ml-1" />
        </base-button>
        <base-button class="mt-4 flex items-center">
          View Source
          <uil-github class="w-6 h-auto ml-1" />
        </base-button>
      </div>
    </div>
  </div>
</template>
