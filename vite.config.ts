import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // build: {
  //   rollupOptions: {
  //     external: [
  //       // 将需要声明为外部模块的文件路径添加到这里
  //       'avatar.jpg'
  //     ]
  //   }
  // }
});
