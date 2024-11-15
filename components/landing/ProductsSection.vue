<script setup lang="ts">
interface ProductPros {
  icon: string
  title: string
  description: string
  link?: string
}
const products: ProductPros[] = [
  {
    icon: 'lucide:blocks',
    title: 'Enterprise CRM',
    description:
      'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.',
    link: 'https://crm.fusionaxi.com'
  },
  {
    icon: 'lucide:chart-no-axes-combined',
    title: 'Dashboarding Solution',
    description:
      'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.',
    link: 'https://bi.fusionaxi.com'
  },
  {
    icon: 'lucide:network',
    title: 'Integration System',
    description:
      'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.'
  },
  {
    icon: 'lucide:earth-lock',
    title: 'System Security',
    description:
      'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.',
    link: 'https://security.fusionaxi.com'
  }
]
</script>

<template>
  <section
    id="products"
    class="bg-gray-50 dark:bg-gray-800"
  >
    <div class="container py-24 sm:py-32">
      <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div class="grid lg:grid-cols-2 gap-4 w-full order-last md:order-first">
          <Card
            v-for="(item, index) in products"
            :key="index"
            class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
          >
            <CardHeader>
              <div class="flex justify-between">
                <Icon
                  :name="item.icon"
                  class="size-8 mb-6 text-primary"
                />

                <span
                  class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >
                  0{{ index + 1 }}
                </span>
              </div>
              <CardTitle>{{ item.title }}</CardTitle>
            </CardHeader>
            <CardContent class="text-muted-foreground">
              {{ item.description }}
            </CardContent>
          </Card>
        </div>
        <div class="order-1 md:order-last">
          <h2 class="text-lg text-primary mb-2 tracking-wider">
            Products
          </h2>

          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Explore our current product
          </h2>

          <p class="text-xl text-muted-foreground mb-8">
            We have best solution and products for your business growing
            and catch up the dynamic market changes.
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
              >Centralize your business and customer</span>
            </li>
            <li class="flex space-x-3">
              <Icon
                name="lucide:circle-check-big"
                class="flex-shrink-0 w-5 h-5 text-primary dark:text-primary/75"
              />
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >Online Business Decision Support</span>
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
      </div>
    </div>
  </section>
</template>
