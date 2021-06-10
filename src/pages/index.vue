<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
</script>

<template>
  <div
    class="xl:container w-full px-4 flex flex-col items-center bg-console-0 flex-auto"
  >
    <section
      id="section-hero"
      class="w-full grid grid-cols-1 grid-rows-3 min-h-screen text-center"
    >
      <h1 class="row-start-2 self-center font-sans text-4xl text-console-8">
        Hi, I'm <span class="text-console-2">Quang</span>
        <p class="mt-6 font-normal text-3xl">
          I'm a <span class="text-console-3">Web Developer</span>
        </p>
      </h1>
      <a href="#section-projects" target="_self" class="row-start-3 self-end text-console-8">
        <mdi-light-chevron-down class="w-28 h-auto" />
      </a>
    </section>
    <section id="section-projects" class="section-projects"></section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
