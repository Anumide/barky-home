<template>
  <div>
    <NuxtLayout name="auth">
      <template #route-link>
        <span class="cursor-pointer hover:underline underline-offset-4"
          >Login</span
        >
      </template>
      <section class="flex items-center justify-center pt-[80px] pb-[130px] w-full mx-auto overflow-x-hidden">
        <form class="w-[515px]">
          <p class="font-[500] text-[28px] mb-[30px]">Get started</p>
          <div class="w-full space-y-[30px]">
            <!-- first and last name -->
            <div class="w-full grid grid-cols-2 gap-[15px]">
              <AuthInput
                title="First name"
                type="text"
                placeholder="E.g: John"
                errorMessage="this is a required field"
              />
              <AuthInput
                title="Last name"
                type="text"
                placeholder="E.g: Chukwudi"
                errorMessage="this is a required field"
              />
            </div>
            <!-- email address -->
            <AuthInput
              title="Email Address"
              type="email"
              placeholder="E.g: hello@gmail.com"
              errorMessage="this is a required field"
            />
            <!-- phone number -->
            <AuthInput
              title="Phone"
              type="text"
              placeholder="E.g +2348123456789"
              errorMessage="this is a required field"
            />
            <!-- password -->
            <AuthInput
              title="Password"
              type="password"
              placeholder="Password (min of 8 characters)"
              
              ><template #icon
                ><span @click.self="hide">eye</span></template
              ></AuthInput
            >
            <!-- confirm password -->
            <AuthInput
              title="Confirm password"
              type="password"
              placeholder="Password (min of 8 characters)"
              errorMessage="this is a required field"
              ><template #icon
                ><span @click.self="hide">eye</span></template
              ></AuthInput
            >
            <!-- consent/agreement -->
            <div class="flex items-center space-x-2">
              <input type="checkbox" />
              <span class="text-[12px]"
                >I have read, understood and I agree to Traq’s
                <NuxtLink class="text-[#3488ED] cursor-pointer"
                  >Privacy Policy</NuxtLink
                >, and
                <NuxtLink class="text-[#3488ED] cursor-pointer"
                  >Terms and Conditions</NuxtLink
                ></span
              >
            </div>
            <!-- submit button -->
            <AuthButton label="Create Account" theme="submit" @click="test" />
          </div>
        </form>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const test = () => {
  alert("hello there");
};
const hide = () => {
  alert("toggle password visibility");
};
</script>

<style scoped></style>
