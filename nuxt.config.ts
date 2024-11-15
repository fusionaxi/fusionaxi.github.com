// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'nuxt-marquee'
  ],
  devtools: { enabled: true },
  colorMode: {
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode'
  },
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: 'AIzaSyCuCNZiy8fDikw2r2A3NY97LubFCuE-2k4',
        authDomain: 'corporate-portal-222a6.firebaseapp.com',
        projectId: 'corporate-portal-222a6',
        storageBucket: 'corporate-portal-222a6.appspot.com',
        messagingSenderId: '633509913269',
        appId: '1:633509913269:web:bb8aa603b1e02f60ed14fc',
        measurementId: 'G-GF90HKXL9D'
      }
    }
  },
  compatibilityDate: '2024-11-15',
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})
