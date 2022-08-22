<template>
	<div>
		<div v-if="icon" class="w-8 h-8 flex justify-center items-center rounded-full bg-opacity-10" :class="bgColor">
			<icon :name="icon" class="w-4" :class="iconColor" />
		</div>
		<span class="text-xs text-neutral-400 font-poppins tracking-wider"><small>{{ salesType }}</small></span>
		<p class="font-semibold text-sm font-poppins">
			{{ value }}
		</p>
	</div>
</template>

<script setup lang="ts">
defineProps({
	icon: {
		type: String,
		required: true,
		default: ''
	},
	iconColor: {
		type: String,
		default: ''
	},
	bgColor: {
		type: String,
		default: ''
	},
	salesType: {
		type: String,
		required: true
	},
	value: {
		type: String,
		required: true,
		default: 'NO'
	}
})

</script>
