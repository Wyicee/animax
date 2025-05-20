// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/fonts',
  ],
  css: [ 'assets/styles/main.scss' ],
  fonts: {
    families: [
      { name: 'Share Tech', provider: 'google' },
      { name: 'Overlock SC', provider: 'google' },
      { name: 'Goblin One', provider: 'google' },
    ],
  },
});