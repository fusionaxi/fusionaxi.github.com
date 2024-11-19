<script setup lang="ts">
const handleSubmit = () => {
  const { firstName, lastName, email, subject, message } = contactForm
  console.log(contanctForm)
  const mailToLink = `mailto:fusionaxi@gmail.com?subject=${subject}&body="Hello I am ${firstName} ${lastName} with email ${email}. %0D%0A${message}"`
  window.location.href = mailToLink
}
</script>

<template>
  <section
    id="contact"
    class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800"
  >
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="">
          <div class="mb-4">
            <h2 class="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>

            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              Reach and connect with us
            </h2>
          </div>

          <p class="mb-8 text-muted-foreground lg:w-5/6">
            We really appreciate your interest and time for looking our products and services.
            We can provide more detail for your reference to grow your business.
            Please reach and connect with use below:
          </p>

          <div class="flex flex-col gap-4">
            <div>
              <div class="flex gap-2 mb-1 items-center">
                <Icon
                  name="lucide:building"
                  size="1.2rem"
                />
                <div class="font-bold">
                  Our Virtual Office
                </div>
              </div>
              <div>
                Jalan Boulevard Paramount Serpong, Plaza Times Square
                No. 81728 Lantai 2-4, 00 00
                Medangm Pagedangan, Tangerang,
                Banten 15334,
                Indonesia
              </div>
            </div>
            <div>
              <div class="flex gap-2 mb-1 items-center">
                <Icon
                  name="lucide:mail"
                  size="1.2rem"
                />
                <div class="font-bold">
                  Mail us
                </div>
              </div>
              <div>fusionaxi@gmail.com</div>
            </div>
            <div>
              <div class="flex gap-2 mb-1 items-center">
                <Icon
                  name="lucide:clock-4"
                  size="1.2rem"
                />
                <div class="font-bold">
                  Visit us
                </div>
              </div>
              <div>
                <div>Monday - Friday</div>
                <div>8am - 4.30pm</div>
              </div>
            </div>
          </div>
        </div>
        <Card class="bg-moted/69 dark:bg-card">
          <CardHeader class="text-primary text-2xl">
&nbsp;
          </CardHeader>
          <CardContent>
            <form
              class="grid gap-4"
              @submit.prevent="handleSubmit"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
