import { defineClientAppEnhance } from "@vuepress/client";

import './styles/index.scss'

export default defineClientAppEnhance(({ app }) => {
  app.component("Mock", () => null);
});
