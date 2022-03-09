import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import * as path from "path";
const pathSrc = path.resolve(__dirname, "./src");


export default defineConfig({
  base: "/fidante-homepage/",
  plugins: [react(), tsconfigPaths()],
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
        // chunkFileNames: `[name].js`,
        manualChunks: undefined,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
