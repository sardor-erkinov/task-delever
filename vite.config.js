/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  css: { preprocessorOptions: { scss: { additionalData: "@import \"/src/scss/_colors.scss\"; @import \"/src/scss/_mixins.scss\";", }, }, },
  resolve: {
    alias: {
      src: "/src/",
      components: "/src/components/",
      assets: "/src/assets/",
      public: "/public/",
    },
  },
})
