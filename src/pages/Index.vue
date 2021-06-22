<template>
  <Layout>
    <div class="w-full flex flex-col items-center">
      <section id="section-hero" class="w-full bg-console-0 text-center">
        <div class="xl:container mx-auto px-4 grid grid-cols-1 grid-rows-3 min-h-screen">
          <SvgLogo class="w-full max-w-60 h-auto mx-auto px-8 row-start-1 self-end" />
          <h1 class="row-start-2 self-center text-3xl text-console-8">
            Hi, I'm <span class="text-console-2">Quang</span>
            <p class="mt-6 font-normal text-2xl">I'm a <span class="text-console-3">Web Developer</span></p>
          </h1>
          <a href="#section-projects" target="_self" class="row-start-3 self-end text-console-8">
            <Icon :icon="iconChevronDown" class="w-28 h-auto" />
          </a>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import { Icon } from '@iconify/vue2'
import iconChevronDown from '@iconify-icons/mdi-light/chevron-down'
import SvgLogo from '~/assets/logo.svg'

export default {
  components: {
    Icon,
    SvgLogo,
  },

  data() {
    return {
      iconChevronDown,
    }
  },

  metaInfo: {
    title: 'Dang Minh Quang - Web developer',
  },
}
</script>
