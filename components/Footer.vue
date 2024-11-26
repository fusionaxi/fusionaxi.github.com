<script setup lang="ts">
defineProps({
  container: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <footer>
    <div
      class="py-6 mx-auto md:py-8 lg:py-10"
      :class="{ container: container }"
    >
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
      <!-- <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        > -->
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
          <!-- <li>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Icon
                name="fa6-brands:facebook"
                class="size-5"
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
                class="size-5"
              />
            </a>
          </li> -->
          <li>
            <a
              href="https://www.linkedin.com/company/fusionaxi"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              target="_blank"
            >
              <Icon
                name="fa6-brands:linkedin"
                class="size-5"
              />
            </a>
          </li>
          <!-- <li>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Icon
                name="fa6-brands:x-twitter"
                class="size-5"
              />
            </a>
          </li> -->
          <li>
            <a
              href="https://github.com/fusionaxi"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              target="_blank"
            >
              <Icon
                name="fa6-brands:github"
                class="size-5"
              />
            </a>
          </li>
          <!-- <li>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <Icon
                name="fa6-brands:slack"
                class="size-5"
              />
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </footer>
</template>
