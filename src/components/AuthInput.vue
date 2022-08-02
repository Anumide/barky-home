<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    required: true,
    type: String,
    default: "text",
  },
  modelValue: {
    required: true,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col mb-1 w-full relative">
      <span class="text-[16px] mb-2">{{ title }}</span>

      <div class="w-full relative mb-1">
        <input
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :placeholder="placeholder"
          :type="type"
          class="w-full rounded-[6px] py-2 px-6 ring-1 ring-black/[0.12] outline-[#536DFE] bg-transparent focus:bg-[#536DFE]/[14%]"
        />
        <div
          class="absolute right-6 top-[50%] translate-y-[-50%] cursor-pointer"
        >
          <slot name="icon" />
        </div>
      </div>
      <p class="space-x-2 text-[12px] text-[#E02B1D]" v-if="errorMessage">
        <span>O</span><span>{{ errorMessage }}</span>
      </p>
    </div>
  </div>
</template>
