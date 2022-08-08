<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    required: true,
    type: String,
    default: 'text'
  },
  modelValue: {
    required: true,
    default: ''
  },
  errorMessage: {
    type: String,
    default: ''
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
	<div class="w-full">
		<div class="flex flex-col mb-1 w-full relative">
			<span class="text-[16px] font-[500] mb-2">{{ title }}</span>

			<div class="w-full relative mb-1">
				<input
					:value="modelValue"
					:placeholder="placeholder"
					:type="type"
					class="w-full rounded-[6px] h-[48px] py-2 px-6 ring-1 ring-black/[0.12] outline-[#536DFE] transition-all duration-200 ease-in bg-transparent focus:bg-[#536DFE]/[14%]"
					@input="$emit('update:modelValue', $event.target.value)"
				>
				<div
					class="absolute right-6 top-[50%] translate-y-[-50%] cursor-pointer"
				>
					<slot name="icon" />
				</div>
			</div>
			<p v-if="errorMessage" class="space-x-2 text-[12px] flex items-center text-[#E02B1D]">
				<icon name="infoCircle" class="w-[13px] h-[13px]" /><span>{{ errorMessage }}</span>
			</p>
		</div>
	</div>
</template>
