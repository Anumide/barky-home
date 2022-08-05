<template>
  <div>
    <NuxtLayout name="auth">
      <section
        class="relative bottom-0 right-0 left-0 flex h-full justify-center pt-[80px]"
      >
        <div
          class="h-full w-full md:w-[640px] max-w-[640px] md:border-[1px] md:border-b-0 md:border-[#3F51B5] pb-[100px] md:py-[100px] md:px-[47px]"
        >
          <icon name="envelopeStars" class="mb-[37px] w-[184px] mx-auto md:mx-0" />
          <p class="mb-[24px] text-[28px] md:text-[54px] font-[600] text-center md:text-left">
            Account Successfully Created
          </p>
          <p class="mb-[64px] text-[16px] md:text-[20px] font-[400] text-center md:text-left">
            Please check your mail, a verification link have been sent to you
          </p>
          <div class="w-full flex items-center justify-center md:items-start md:justify-start">
            <AuthButton label="Continue" link-to="#" theme="link" />
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>

<style scoped></style>
