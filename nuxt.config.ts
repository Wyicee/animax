// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],
  plugins: [
    '~/plugins/bem-cn.ts',
  ],
  app: {
    baseURL: '/animax/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: '',
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  ssr: true,
  nitro: {
    prerender: {
      routes: [ '/' ],
    },
  },
  vite: {
    ssr: {
      noExternal: [ 'bem-cn-lite' ],
    },
    optimizeDeps: {
      include: [ 'bem-cn-lite' ],
    },
  },
  googleFonts: {
    families: {
      'Share+Tech': true,
      'Overlock+SC': true,
      'Goblin+One': true,
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
});