<template>
  <div class="home-page">
    <section id="section-hero" class="section-hero">
      <div class="hero-inner">
        <h1 class="text-red-400">{{ frontmatter.hero.title }}</h1>
        <h2 class="hero-description">{{ frontmatter.hero.description }}</h2>
        <a href="#section-projects" target="_self" class="cta-link">
          {{ frontmatter.hero["cta-text"] }}
        </a>
      </div>
    </section>
    <section id="section-projects" class="section-projects"></section>
    <Content />
    <footer>{{ frontmatter.footer }}</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePageFrontmatter } from "@vuepress/client";
export default defineComponent({
  name: "Home",

  setup() {
    const frontmatter = usePageFrontmatter();

    return {
      frontmatter,
    };
  },
});
</script>
