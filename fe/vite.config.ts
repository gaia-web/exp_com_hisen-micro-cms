import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import UnoCSS from "unocss/vite";

export default defineConfig({
  build: {
    target: "ES2022",
    outDir: '../www',
  },
  plugins: [solid(), UnoCSS()],
});
