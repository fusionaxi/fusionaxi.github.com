<script setup lang="ts">
interface FAQProps {
  question: string
  answer: string
  value: string
}
const faqs: FAQProps[] = [{
  question: 'How to request the product access and service for your business?',
  answer: 'It was depend to your available line to contact us. We recommend you to contact using contact form or direct to our office, telepon or email provided.',
  value: 'faq#1'
}, {
  question: 'Do i need signed the agreement for accessing product or service?',
  answer: 'Definitely yes, we encourage to sign the agreement to provide the product and service for growing your business. The agreement is also as evidance we are partner on the project.',
  value: 'faq#2'
}]
</script>

<template>
  <section
    id="faq"
    class="py-24 sm:py-32 "
  >
    <div class="container">
      <div class="text-center mb-8">
        <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
          FAQs
        </h2>

        <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
          Frequently asked questions
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        class="max-w-screen-md mx-auto AccordionRoot"
      >
        <AccordionItem
          v-for="item in faqs"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger class="text-left">
            {{ item.question }}
          </AccordionTrigger>
          <AccordionContent>{{ item.answer }}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>
