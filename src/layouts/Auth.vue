<template>
  <div class="bg-[#FAFEFF] flex min-h-screen relative w-full overflow-x-hidden ">
    <nav
      v-bind="$attrs"
      class="bg-[#FAFEFF] flex justify-between items-center py-[35px] fixed top-0 left-0 right-0 px-[25px] md:px-[70px] w-full z-[100] overflow-x-hidden max-w-[1728px] mx-auto"
    >
      <div class="flex items-center justify-center gap-x-[22px]">
        <!-- <IconLogo class="w-[60px] h-[57px]" /> -->
        <span class="font-[500] text-[28px]">Logo</span>
      </div>
      <div class="font-[500] text-[16px]">
        <slot name="route-link"></slot>
      </div>
    </nav>
    <div class="px-[25px] md:px-[70px] mt-[100px] w-full overflow-x-hidden">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
