<script setup lang="ts">
useHead({
  title: 'Fusion Axi - Solution Innovation'
});

</script>

<template>
  <div>
    <NavBar />
    <LandingHeroSection />
    <LandingTechStackSection />
   
    <section
      id="products"
      class="bg-gray-50 dark:bg-gray-800"
    >
      <div
        class="container py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
      >
        <!-- Row -->
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2
              class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Work with tools you already use
            </h2>
            <p class="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            <!-- List -->
            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Continuous integration and deployment</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Development workflow</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Knowledge management</span>
              </li>
            </ul>
            <p class="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
          <img
            src="https://cdn.devdojo.com/images/december2020/productivity.png"
            class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            alt="dashboard feature image"
          >
        </div>
        <!-- Row -->
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="https://cdn.devdojo.com/images/december2020/settings.png"
            alt="feature image 2"
          >
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2
              class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              We invest in the world’s potential
            </h2>
            <p class="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            <!-- List -->
            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Dynamic reports and dashboards</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Templates for everyone</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Development workflow</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Limitless business automation</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Knowledge management</span>
              </li>
            </ul>
            <p class="font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      id="services"
      class="bg-gray-50 dark:bg-gray-800"
    >
      <div class="container py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <!-- Row -->
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Work with tools you already use
            </h2>
            <p class="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
            </p>
            <!-- List -->
            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg>
                <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Continuous integration and deployment</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg>
                <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg>
                <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
              </li>
            </ul>
            <p class="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
            </p>
          </div>
          <img
            class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
            alt="dashboard feature image"
          >
        </div>
        <!-- Row -->
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="https://cdn.devdojo.com/images/december2020/settings.png"
            alt="feature image 2"
          >
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <p class="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
            </p>
            <!-- List -->
            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg>
                <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Dynamic reports and dashboards</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg>
                <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Templates for everyone</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg>
                <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg>
                <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Limitless business automation</span>
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg>
                <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
              </li>
            </ul>
            <p class="font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
      <div class="container pb-8 lg:pt-16 mx-auto lg:pb-24 lg:px-6 ">
        <h2 class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div class="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h3 id="accordion-flush-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>Can I use this in open-source projects?</span>
                <svg
                  data-accordion-icon=""
                  class="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-1"
              class=""
              aria-labelledby="accordion-flush-heading-1"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  this is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to <a
                    href="#"
                    class="text-orange-600 dark:text-orange-500 hover:underline"
                  >get started</a> and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon=""
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-2"
              class="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  this is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out the <a
                    href="#"
                    class="text-orange-600 dark:text-orange-500 hover:underline"
                  >Figma design system</a> based on the utility classes from Tailwind CSS and components from this.
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span>What are the differences between this and Tailwind UI?</span>
                <svg
                  data-accordion-icon=""
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-3"
              class="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from this are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that this relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both this, this Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a
                      href="#"
                      class="text-orange-600 dark:text-orange-500 hover:underline"
                    >this Pro</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-orange-600 dark:text-orange-500 hover:underline"
                    >Tailwind UI</a>
                  </li>
                </ul>
              </div>
            </div>
            <h3 id="accordion-flush-heading-4">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-4"
                aria-expanded="false"
                aria-controls="accordion-flush-body-4"
              >
                <span>What about browser support?</span>
                <svg
                  data-accordion-icon=""
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-4"
              class="hidden"
              aria-labelledby="accordion-flush-heading-4"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from this are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that this relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both this, this Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a
                      href="#"
                      class="text-orange-600 dark:text-orange-500 hover:underline"
                    >this Pro</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-orange-600 dark:text-orange-500 hover:underline"
                    >Tailwind UI</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-sm mx-auto text-center">
          <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Start your free trial today
          </h2>
          <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Try our platform for 30 days. No credit card required.
          </p>
          <a
            href="#"
            class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
          >Free trial for 30 days</a>
        </div>
      </div>
    </section>
    <footer class="bg-white dark:bg-gray-800">
      <div class="container py-6 mx-auto lg:py-16 md:py-8 lg:py-10">
        <!-- <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Company
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">About</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Careers</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Brand Center</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Help center
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Discord Server</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Twitter</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Facebook</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Legal
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Licensing</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Terms</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Company
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">About</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Careers</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Brand Center</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Download
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">iOS</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Android</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Windows</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>
        </div> -->
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        >
        <div class="text-center">
          <a
            href="#"
            class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <!-- <img src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Logo" /> -->
            Fusion Axi
          </a>
          <span
            class="block text-sm text-center text-gray-500 dark:text-gray-400"
          >© 2024 Fusion Axi (Soft Axi Indonesia). All Rights Reserved.
          </span>
          <ul class="flex justify-center mt-5 space-x-5">
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <Icon
                  name="fa6-brands:facebook"
                  class="w-5 h-5"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <Icon
                  name="fa6-brands:instagram"
                  class="w-5 h-5"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <Icon
                  name="fa6-brands:linkedin"
                  class="w-5 h-5"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <Icon
                  name="fa6-brands:x-twitter"
                  class="w-5 h-5"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <Icon
                  name="fa6-brands:github"
                  class="w-5 h-5"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <Icon
                  name="fa6-brands:slack"
                  class="w-5 h-5"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
