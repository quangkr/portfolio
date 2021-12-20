<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'

import imgThumbBlogr from '~/assets/thumb-blogr.png'
import imgThumbRestCountries from '~/assets/thumb-rest-countries.png'
import SvgLogo from '~/assets/logo.svg'

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

async function handleSubmit(): Promise<void> {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  try {
    await axios.post(
      '/',
      encode({ ...formData }),
      axiosConfig,
    )
  }
  catch (e) {
    console.log(e.message)
  }

  resetForm()
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
        <div class="row-start-2 max-w-screen-md justify-self-center self-center px-6 text-3xl text-console-8">
          <h1>Hi, I'm <span class="text-console-2">Quang</span></h1>
          <p class="mt-6 font-normal text-2xl">
            I'm a <span class="text-console-3">Web Developer</span>
          </p>
          <p class="mt-10 text-xl">
            I love creating modern and clean websites, with intuitive user experiences.
          </p>
        </div>
        <a href="#section-projects" target="_self" class="row-start-3 self-end text-console-8">
          <mdi-light-chevron-down class="w-28 h-auto" />
        </a>
      </div>
    </section>
    <section id="section-projects" class="w-full py-24">
      <h2 class="mb-12 mx-auto text-console-7 text-3xl text-center">
        My Projects
      </h2>
      <div class="w-full max-w-screen-lg mx-auto flex flex-col md:flex-row md:flex-wrap">
        <feature-card
          class="max-w-90 w-8/10 mx-auto my-12"
          :img-src="imgThumbBlogr"
          title="Blogr"
          demo-link="https://blogr.dangminhquang.me"
          source-link="https://github.com/quangkr/frontendmentor-blogr-landing-page"
        >
          A very simple landing page with no interactivity and no routes; written in Vue with simple HTML and CSS.
        </feature-card>
        <feature-card
          class="max-w-90 w-8/10 mx-auto my-12"
          :img-src="imgThumbRestCountries"
          title="REST Countries API"
          demo-link="https://rclist.dangminhquang.me"
          source-link="https://github.com/quangkr/frontendmentor-rest-countries-api"
        >
          A simple SPA that fetches and displays data from <a href="https://restcountries.eu/" target="_blank">REST Countries API</a>.
          Written in React, it features a simple filter and a search bar, and also a Dark mode toggle.
        </feature-card>
      </div>
    </section>
    <section id="section-contact" class="w-full bg-console-0">
      <div class="mx-auto max-w-screen-md px-8 py-24">
        <h2 class="mb-12 text-console-7 text-3xl text-center">
          Contact Me!
        </h2>
        <div class="w-full">
          <form
            class="w-full grid grid-cols-1fr md:grid-cols-[max-content,1fr] gap-x-4"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label for="formdata-name" class="mt-2 mb-1">Name</label>
            <base-input id="formdata-name" v-model="formData.name" type="text" name="name" />
            <label for="formdata-email" class="mt-2 mb-1">Email</label>
            <base-input id="formdata-email" v-model="formData.email" type="email" name="email" />
            <label for="formdata-message" class="mt-2 mb-1">Message</label>
            <base-input id="formdata-message" v-model="formData.message" type="textarea" name="message" />
            <base-button type="submit" class="justify-self-center md:col-span-2">
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
