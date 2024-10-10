import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.firebase

  // Google Analytics configuration
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.dataLayer = window.dataLayer || []
  gtag("js", new Date())
  gtag("config", config.measurementId)
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${config.measurementId}`,
        async: true,
      }
    ]
  })

  // Google Firebase configuration
  const app = initializeApp(config)
  const analytics = getAnalytics(app)
  return {
    provide: {
      fire: {
        app: app,
        analytics: analytics
      }
    },
  }
})
