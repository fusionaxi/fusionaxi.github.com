<script setup lang="ts">
interface TechStackProps {
  icon: string
  name: string
}

const techStacks: TechStackProps[] = [{
  icon: 'devicon-plain:java',
  name: 'Java'
}, {
  icon: 'devicon-plain:quarkus',
  name: 'Quarkus'
}, {
  icon: 'devicon-plain:spring',
  name: 'Spring'
}, {
  icon: 'devicon-plain:nodejs-wordmark',
  name: 'NodeJS'
}, {
  icon: 'devicon-plain:vuejs',
  name: 'Vue 3'
}, {
  icon: 'devicon-plain:nuxtjs',
  name: 'Nuxt 3'
}, {
  icon: 'devicon-plain:javascript',
  name: 'Javascript',
}, {
  icon: 'devicon-plain:typescript',
  name: 'Typescript',
}, {
  icon: 'devicon-plain:css3-wordmark',
  name: 'CSS 3',
}]
</script>
<template>
  <section id="tech-stacks" class="max-w-[75%] mx-auto pb-8 sm:pb-16">
    <h2 class="text-lg md:text-xl text-center mb-6">Our Tech Stacks</h2>
    <div class="mx-auto">
      <Marquee class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]">
        <div v-for="(item, index) in techStacks"
          :key="index">
          <div class="inline-flex items-center text-xl md:text-2xl font-medium min-w-36">
            <Icon :name="item.icon" class="mr-2" size="2rem" />
            {{ item.name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>