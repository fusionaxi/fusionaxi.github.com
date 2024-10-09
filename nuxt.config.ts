// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: "AIzaSyCuCNZiy8fDikw2r2A3NY97LubFCuE-2k4",
        authDomain: "corporate-portal-222a6.firebaseapp.com",
        projectId: "corporate-portal-222a6",
        storageBucket: "corporate-portal-222a6.appspot.com",
        messagingSenderId: "633509913269",
        appId: "1:633509913269:web:bb8aa603b1e02f60ed14fc",
        measurementId: "G-GF90HKXL9D",
      },
    },
  },
});