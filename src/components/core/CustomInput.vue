<template>
	<div class="w-full text-dark">
		<div class="flex flex-col mb-1 w-full relative">
			<span v-if="title" class="text-base font-medium mb-2 text-dark">{{ title }}</span>

			<div class="w-full relative mb-1">
				<input
					v-bind="$attrs"
					:value="modelValue"
					:placeholder="placeholder"
					:type="type"
					class="w-full bg-white rounded-[2px] h-12 py-2 px-6 ring-1 ring-black/[0.12] outline-primary transition-all duration-200 ease-in bg-transparent focus:bg-primary_light"
					@input="$emit('update:modelValue', $event.target.value)"
				>
				<div
					class="absolute right-6 top-[50%] translate-y-[-50%] cursor-pointer"
				>
					<slot name="icon" />
				</div>
			</div>
			<p
				v-if="errorMessage"
				class="space-x-2 text-[12px] flex items-center text-primary_error"
			>
				<icon name="infoCircle" class="w-[13px] h-[13px]" /><span>{{
					errorMessage
				}}</span>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
	default: ''
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
    default: '',
	type: [String, Number]
  },
  errorMessage: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>
