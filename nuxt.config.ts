// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  css: [ 'assets/styles/main.scss' ],
  googleFonts: {
    families: {
      'Share+Tech': true,
      'Overlock+SC': true,
      'Goblin+One': true
    },
    display: 'swap',
    prefetch: true,
    preconnect: true
  }
});