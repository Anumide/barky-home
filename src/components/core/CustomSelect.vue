<template>
	<!-- select industry -->
	<div class="w-full">
		<div class="relative mb-1 flex w-full flex-col">
			<span v-if="label" class="mb-2 text-base font-medium">{{ label }}</span>
			<div class="relative mb-1 w-full h-12" v-bind="$attrs">
				<select
					class="appearance-none h-full w-full rounded-md bg-transparent  py-2 px-6 pr-10 outline-primary ring-1 ring-black/[0.12] "
					:value="modelValue"
					@change="$emit('update:modelValue', $event.target.value)"
				>
					<option v-if="defaultOption" value="" disabled selected :hidden="hidden">
						{{ defaultOption }}
					</option>
					<option v-for="(option, index) in options" :key="index" :Value="option">
						{{ option }}
					</option>
				</select>
				<div
					class="absolute top-0 right-0 h-full w-10 flex items-center justify-center pointer-events-none"
				>
					<icon name="chevronDown" class="w-6" />
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
	default: ''
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
  },
  hidden: {
	type: Boolean,
	default: false
  }
})

defineEmits(['update:modelValue'])
</script>
