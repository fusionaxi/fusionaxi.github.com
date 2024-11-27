<script setup lang="ts">
useHead({
  title: 'Fusion Axi - Solution Innovation'
})
</script>

<template>
  <div>
    <NavBar />
    <LandingHeroSection />
    <LandingTechStackSection />
    <LandingProductsSection />
    <LandingServicesSection />
    <LandingPricingSection />
    <LandingFAQSection />
    <LandingContactSection />
    <Footer :container="true" />
  </div>
</template>
