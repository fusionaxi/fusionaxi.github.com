<script setup lang="ts">
import { buttonVariants } from './ui/button'

interface RouteProps {
  href: string;
  label: string;
}

const routes: RouteProps[] = [{
  href: '#products',
  label: 'Products'
},
{
  href: '#services',
  label: 'Services'
},
{
  href: '#pricing',
  label: 'Pricing'
},
{
  href: '#faq',
  label: 'FAQ'
}];
</script>

<template>
  <header class="sticky border-b-[1px] top-0 z-40 py-2 w-full bg-white dark:border-b-slate-700 dark:bg-gray-900">
    <NavigationMenu class="mx-auto">
      <NavigationMenuList class="container h-14 w-screen flex justify-between">
        <NavigationMenuItem class="font-bold flex">
          <a
            rel="noreferer noopener"
            href="/"
            class="font-bold text-xl flex items-center"
          >
            <Icon
              name="lucide:circle-arrow-out-up-right"
              class="mr-2 text-primary"
            />
            <span
              class="self-center text-xl font-bold text-gray-900 leading-none select-none whitespace-nowrap dark:text-white"
            >Fusion Axi<span class="text-orange-600 font-black">.</span></span>
          </a>
        </NavigationMenuItem>
        <!-- Mobile -->
        <span class="flex md:hidden">
          <ModeToggle />
        </span>
        <!-- Desktop -->
        <nav class="hidden md:flex gap-2">
          <a
            v-for="(route, index) in routes"
            :key="index"
            :href="route.href"
            :class="[`text-[17px] ${buttonVariants({
              variant: 'ghost'
            })}`]"
          >
            {{ route.label }}
          </a>
        </nav>
        <div class="hidden md:flex gap-2 items-center">
          <a
            rel="noreferrer noopener"
            href="https://github.com/fusionaxi/.github/discussions"
            target="_blank"
            class="flex items-center justify-center"
            :class="[`border ${buttonVariants({
              variant: 'secondary'
            })}`]"
          >
            <Icon
              name="fa6-brands:github"
              class="mr-1 w-4 h-4"
            />
            Discuss
          </a>
          <ModeToggle />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
</template>
