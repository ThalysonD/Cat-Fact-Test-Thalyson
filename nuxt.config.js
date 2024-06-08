// nuxt.config.js
export default {
  css: ["@/assets/css/tailwind.css"],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/composition-api/module"],
  plugins: ["~/plugins/meowFacts.js", "~/plugins/pinia.js"],
  target: "static",
  ssr: false,
  generate: {
    fallback: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  },
  // server: {
  //   port: process.env.PORT || 3000,
  //   host: '0.0.0.0'
  // }
};
