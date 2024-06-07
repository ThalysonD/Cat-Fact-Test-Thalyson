// nuxt.config.js
export default {
  css: ["@/assets/css/tailwind.css"],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/composition-api/module"],
  plugins: ["~/plugins/meowFacts.js", "~/plugins/pinia.js"],
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
};
