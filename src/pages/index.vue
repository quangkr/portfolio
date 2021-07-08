<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import imgThumbBlogr from '~/assets/thumb-blogr.png'
import imgThumbRestCountries from '~/assets/thumb-rest-countries.png'
import SvgLogo from '~/assets/logo.svg'

const router = useRouter()

// helpers
function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
    )
    .join('&')
}

// form handling
type formDataType = Record<string, string>
const initialFormData = (): formDataType => ({
  name: '',
  email: '',
  message: '',
})
const formData: formDataType = reactive(initialFormData())
function resetForm(): void {
  Object.assign(formData, initialFormData())
}

async function handleSubmit() {
  const finalData = {
    'form-name': 'contact',
    ...formData,
  }

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  const response = await axios.post(
    '/',
    encode(finalData),
    axiosConfig,
  )
  console.log(response)
}
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
    <section id="section-projects" class="w-full">
      <feature-card
        class="max-w-160 w-8/10 mx-auto my-12"
        :img-src="imgThumbBlogr"
        title="Blogr"
      >
        A very simple landing page with no interactivity and no routes; written in Vue with simple HTML and CSS.
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
    <section id="section-contact" class="w-full">
      <div class="mx-auto max-w-screen-lg px-8 py-24">
        <h2 class="mb-12 text-console-7 text-3xl text-center">
          Let's chat
        </h2>
        <div class="w-full">
          <form
            class="w-full grid grid-cols-[max-content,1fr] gap-x-4 gap-y-6"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label for="formdata-name">Name</label>
            <base-input id="formdata-name" v-model="formData.name" type="text" name="name" />
            <label for="formdata-email">Email</label>
            <base-input id="formdata-email" v-model="formData.email" type="email" name="email" />
            <label for="formdata-message">Message</label>
            <base-input id="formdata-message" v-model="formData.message" type="textarea" name="message" />
            <base-button type="submit">
              Send
            </base-button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
