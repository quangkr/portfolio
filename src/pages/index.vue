<script setup lang="ts">
import { useRouter } from 'vue-router'

import SvgLogo from '~/assets/logo.svg'

const router = useRouter()
</script>

<template>
  <div
    class="w-full flex flex-col items-center"
  >
    <section
      id="section-hero"
      class="w-full bg-console-0 text-center"
    >
      <div class="xl:container mx-auto px-4 grid grid-cols-1 grid-rows-3 min-h-screen">
        <SvgLogo class="w-full max-w-60 h-auto mx-auto px-8 row-start-1 self-end" />
        <h1 class="row-start-2 self-center font-sans text-3xl text-console-8">
          Hi, I'm <span class="text-console-2">Quang</span>
          <p class="mt-6 font-normal text-2xl">
            I'm a <span class="text-console-3">Web Developer</span>
          </p>
        </h1>
        <a href="#section-projects" target="_self" class="row-start-3 self-end text-console-8">
          <mdi-light-chevron-down class="w-28 h-auto" />
        </a>
      </div>
    </section>
    <section id="section-projects" class="section-projects"></section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
