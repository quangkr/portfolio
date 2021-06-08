<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div
    class="bg-teal-200 bg-opacity-20 flex flex-col items-center min-h-screen items-center"
  >
    <div
      class="xl:container w-full px-10 flex flex-col items-center bg-red-100 flex-auto"
    >
      <section
        id="section-hero"
        class="w-full flex flex-col items-center justify-center flex-auto"
      >
        <p class="text-4xl">
          <carbon-campsite class="inline-block" />
        </p>
        <h1 class="font-mono text-6xl">
          Dang Minh Quang
        </h1>
        <p>
          <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
        </p>
        <a href="#section-projects" target="_self">CTA</a>
      </section>
      <section id="section-projects" class="section-projects"></section>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
