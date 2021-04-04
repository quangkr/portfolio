import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { path } from '@vuepress/utils';

export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "Hello, VuePress!",
  description: "This is my first VuePress site",

  bundler: "@vuepress/vite",
  theme: path.resolve(__dirname, 'theme'),
});
