<script setup lang="ts">
defineProps({
  modelValue: String,
  type: String,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <component
    :is="type == 'textarea' ? 'textarea' : 'input'"
    :type="type == 'textarea' ? null : type"
    class="rounded-md shadow border mb-6 px-4 py-2 font-sans text-base resize-none"
    :class="type == 'textarea' ? 'min-h-48' : ''"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
