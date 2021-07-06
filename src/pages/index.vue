<script setup lang="ts">
import { useRouter } from 'vue-router'

import imgThumbBlogr from '~/assets/thumb-blogr.png'
import imgThumbRestCountries from '~/assets/thumb-rest-countries.png'
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
        <svg-logo class="w-full max-w-60 h-auto mx-auto px-8 row-start-1 self-end" />
        <h1 class="row-start-2 self-center text-3xl text-console-8">
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
    <section id="section-about" class="w-full">
      <div class="mx-auto max-w-screen-lg px-8 py-24">
        <h2 class="mb-12 text-console-7 text-3xl text-center">
          About me
        </h2>
        <p class="text-console-7 text-lg">
          I'm a frontend web developer.
          I create modern and clean websites using tools and frameworks like React, Vue and Tailwind.
        </p>
      </div>
    </section>
    <section id="section-projects" class="section-projects">
      <feature-card
        class="max-w-160 w-8/10 mx-auto my-12"
        :img-src="imgThumbBlogr"
        title="Blogr"
      >
        A very simple landing page with no interactivity and no routes. I used Vue with simple HTML and CSS to make this site.
      </feature-card>
      <feature-card
        class="max-w-160 w-8/10 mx-auto my-12"
        :img-src="imgThumbRestCountries"
        title="REST Countries API"
      >
        A simple SPA that fetches and displays data from <a href="https://restcountries.eu/" target="_blank">REST Countries API</a>.
        Written in React, it features a simple filter and a search bar, and also a Dark mode toggle.
      </feature-card>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
