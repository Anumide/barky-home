<template>
  <div>
    <NuxtLayout name="auth">
      <section class="flex justify-center h-full pt-[80px]  relative bottom-0 right-0 left-0">
        <div class="w-[640px] py-[100px]  h-full border-b-0 border-[#3F51B5] border-[1px] px-[47px]">
            <div class="w-[100px] h-[100px] border mb-[37px]">
                Icons
            </div>
            <p class="text-[54px] font-[600] mb-[24px]">Account Successfully Created</p>
            <p class="text-[20px] font-[400] mb-[34px]">Please check your mail, a verification link have been sent to you</p>
            <AuthButton label="Continue" linkTo="#" theme="link" />
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

</script>

<style scoped></style>
