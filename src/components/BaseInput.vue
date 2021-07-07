<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'

defineProps({
  modelValue: String,
})
defineEmit(['update:modelValue'])
</script>

<template>
  <input
    class="rounded-md shadow border"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
