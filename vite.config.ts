import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import * as path from "path";
const reactSvgPlugin = require('vite-plugin-react-svg');
const pathSrc = path.resolve(__dirname, "./src");


export default defineConfig({
  plugins: [react(), tsconfigPaths(), reactSvgPlugin()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "${pathSrc}/assets/scss/index";` },
    },
  },
  build: {
    manifest: false,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
