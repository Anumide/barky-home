<template>
	<!-- select industry -->
	<div class="w-full">
		<div class="relative mb-1 flex w-full flex-col">
			<span class="mb-2 text-base font-medium">{{ label }}</span>
			<div class="relative mb-1 w-full">
				<select
					class="w-full appearance-none rounded-[6px] bg-transparent h-12 py-2 px-6 outline-primary ring-1 ring-black/[0.12]"
					:value="modelValue"
					@change="$emit('update:modelValue', $event.target.value)"
				>
					<option v-if="defaultOption" value="" disabled>
						{{ defaultOption }}
					</option>
					<option v-for="(option, index) in options" :key="index">
						{{ option }}
					</option>
				</select>
				<div
					class="absolute right-8 top-[50%] translate-y-[-50%] cursor-pointer"
				>
					<icon name="arrowDown" class="w-6" />
				</div>
			</div>
			<p
				v-if="errorMessage"
				class="space-x-2 text-xs flex items-center text-primary_error"
			>
				<icon name="infoCircle" class="w-[13px] h-[13px]" /><span>{{
					errorMessage
				}}</span>
			</p>
		</div>
	</div>
	<!-- slect ends here -->
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    required: true,
    default: ''
  },
  errorMessage: {
    type: String,
    default: ''
  },
  defaultOption: {
	type: String,
	default: ''
  }
})

defineEmits(['update:modelValue'])
</script>
