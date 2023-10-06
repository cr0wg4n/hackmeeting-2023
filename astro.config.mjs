import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://0x7e7.hackmeeting.org.bo/',
  integrations: [
    tailwind(), 
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
    vue()
  ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});