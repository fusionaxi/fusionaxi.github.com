<script setup lang="ts">
import { buttonVariants } from '../ui/button';

</script>

<template>
  <section class="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
    <div class="text-center lg:text-start space-y-6">
      <main class="text-5xl md:text-6xl font-bold">
        <h1 class="inline">
          <span class="inline bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
            We
          </span>
          provides
        </h1>
        <h2 class="inline">
          excellent
          <span class="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            products and services
          </span>
          to your business.
        </h2>
      </main>
      <p class="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Build your business solution and system effortlessly and timely.
      </p>

      <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex md:items-center md:justify-center lg:justify-start">
        <Button class="w-full md:w-1/3 inline-flex items-center justify-center" >
          Enquiry Now
          <Icon name="lucide:circle-arrow-right"
          class="w-4 h-4 ml-1" />
        </Button>
        <a
          rel="noreferrer noopener"
          href="https://github.com/fusionaxi/.github/discussions"
          target="_blank"
          :class="[`w-full h-full md:w-1/3 ${buttonVariants({
            variant: 'outline'
          })}`]"
        >
          <Icon
            name="fa6-brands:github"
            class="mr-1 w-4 h-4"
          />
          Discussion
        </a>
      </div>
    </div>
    <div className="z-10">
      <LandingHeroCards />
    </div>
    <div class="card-shadow"></div>
  </section>
</template>
