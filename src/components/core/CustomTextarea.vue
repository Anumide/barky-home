<template>
	<div class="flex flex-col mb-1 w-full">
		<span v-if="title" class="text-base font-medium mb-2 text-dark">{{ title }}</span>

		<!-- <textarea
					v-bind="$attrs"
					:placeholder="placeholder"
					class="w-full bg-white rounded-[6px] py-2 px-6 ring-1 ring-black/[0.12] outline-primary transition-all duration-200 ease-in bg-transparent focus:bg-primary_light"
					@input="$emit('update:modelValue', $event.target.value)"
				/> -->
		<textarea
			v-bind="$attrs"
			:placeholder="placeholder"
			class="w-full mb-1 h-16 bg-white rounded-[6px] py-2 px-4 ring-1 ring-black/[0.12] outline-primary transition-all duration-200 ease-in bg-transparent focus:bg-primary_light"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<!-- <p
				v-if="errorMessage"
				class="space-x-2 text-xs flex items-center text-primary_error"
			>
				<icon name="infoCircle" class="w-[13px] h-[13px]" /><span>{{
					errorMessage
				}}</span>
			</p> -->
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
  // eslint-disable-next-line vue/require-prop-types
  modelValue: {
    required: true,
    default: ''
  }
//   errorMessage: {
//     type: String,
//     default: ''
//   }
})

defineEmits(['update:modelValue'])

</script>
