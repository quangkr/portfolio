<script setup lang="ts">
interface Props {
  type: 'button'|'a'
  to: string|undefined
  target: string|undefined
  rel: string|undefined
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  rel: 'noreferrer noopener',
})

function optionalAttr(expectedType: string, value: string|undefined): string|undefined {
  return props.type === expectedType ? value : undefined
}
</script>

<template>
  <component
    :is="type"
    class="
      px-1.2em py-0.4em
      rounded-md shadow
    "
    :href="optionalAttr('a', to)"
    :target="optionalAttr('a', target)"
    :rel="optionalAttr('a', rel)"
  >
    <slot></slot>
  </component>
</template>
