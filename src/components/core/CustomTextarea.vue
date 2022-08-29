<template>
	<div class="w-full text-dark">
		<div class="flex flex-col mb-1 w-full relative">
			<span v-if="title" class="text-base font-medium mb-2 text-dark">{{ title }}</span>

			<div class="w-full relative mb-1">
				<textarea
					v-bind="$attrs"
					:placeholder="placeholder"
					class="w-full rounded-[6px] h-[48px] py-2 px-6 ring-1 ring-black/[0.12] outline-primary transition-all duration-200 ease-in bg-transparent focus:bg-primary_light resize-none"
					@input="$emit('update:modelValue', $event.target.value)"
				/>
			</div>
			<!-- <p
				v-if="errorMessage"
				class="space-x-2 text-xs flex items-center text-primary_error"
			>
				<icon name="infoCircle" class="w-[13px] h-[13px]" /><span>{{
					errorMessage
				}}</span>
			</p> -->
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
