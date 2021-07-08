<script setup lang="ts">
defineProps({
  modelValue: String,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    class="rounded-md shadow border"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
