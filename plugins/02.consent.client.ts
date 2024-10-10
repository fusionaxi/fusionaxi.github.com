export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        src: `https://cdn.consentmanager.net/delivery/autoblocking/17db6d5c11b48.js`,
        type: 'text/javascript',
        'data-cmp-ab': '1',
        'data-cmp-host': 'c.delivery.consentmanager.ne',
        'data-cmp-cdn': 'cdn.consentmanager.net',
        'data-cmp-codesrc': '16'
      }
    ]
  })
})