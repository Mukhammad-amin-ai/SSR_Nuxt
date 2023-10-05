// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  // devtools: { enabled: false },
  runtimeConfig: {
    public:{
      BASE_URL: process.env.BASE_URL ,
    }

  },
  modules:[
    '@pinia/nuxt'
  ],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
        },
        {
          rel: "icon",
          href: "https://sinfxona.uz/favicon.ico",
        },
      ],
    },
  },
});
