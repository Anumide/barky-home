<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  linkTo: {
    type: String,
    default: "#",
  },
  theme: {
    type: String,
    required: true,
    validator(value) {
      return ["submit", "link"].includes(value);
    },
  },
});
defineEmits(["click"]);
</script>

<template>
  <button
    v-if="theme === 'submit'"
    @click.prevent="$emit('click')"
    class="w-full text-white bg-[#3F51B5] rounded-[6px] text-[16px] py-[13px] cursor-pointer"
    :disabled="disabled"
  >
    {{ label }}
  </button>

  <NuxtLink
    v-else-if="theme == 'link'"
    :to="linkTo"
    class="text-white bg-[#3F51B5] rounded-full text-[16px] py-[18px] px-[45px] cursor-pointer inline-block"
  >
    {{ label }}
  </NuxtLink>

  <button v-else>{{ label }}</button>
</template>

<style scoped></style>
