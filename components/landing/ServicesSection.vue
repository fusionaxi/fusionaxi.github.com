<script setup lang="ts">
</script>

<template>
  <section
    id="services"
    class="bg-gray-50 dark:bg-gray-800"
  >
    <div class="container py-24 sm:py-32">
      <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 class="text-lg text-primary mb-2 tracking-wider">
            Services
          </h2>

          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            We provide tailored services
          </h2>

          <p class="text-xl text-muted-foreground mb-8">
            Deliver great service experiences fast - without the complexity of
            traditional solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
          <ul
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <Icon
                name="lucide:circle-check-big"
                class="flex-shrink-0 w-5 h-5 text-primary dark:text-primary/75"
              />
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >Continuous integration and deployment</span>
            </li>
            <li class="flex space-x-3">
              <Icon
                name="lucide:circle-check-big"
                class="flex-shrink-0 w-5 h-5 text-primary dark:text-primary/75"
              />
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >Development workflow</span>
            </li>
            <li class="flex space-x-3">
              <Icon
                name="lucide:circle-check-big"
                class="flex-shrink-0 w-5 h-5 text-primary dark:text-primary/75"
              />
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >Knowledge management</span>
            </li>
          </ul>
          <p class="mb-8 font-light lg:text-xl">
            Deliver great service experiences fast - without the complexity of
            traditional solutions.
          </p>
        </div>
        <img
          alt="dashboard feature"
          class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
        >
      </div>
    </div>
  </section>
</template>
