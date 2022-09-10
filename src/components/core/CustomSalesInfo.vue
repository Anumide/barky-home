<template>
	<div class="flex justify-between items-center">
		<div class="grow">
			<div v-if="icon" class="w-8 h-8 flex justify-center items-center rounded-full bg-opacity-10" :style="{'backgroundColor': `${iconColor}24`}">
				<icon :name="icon" class="w-4" :style="{'color': iconColor}" />
			</div>
			<span class="text-xs text-neutral-400 font-poppins tracking-wider"><small>{{ salesType }}</small></span>
			<p class="font-semibold text-lg font-poppins" :class="`text-${textColor}`">
				{{ value }}
			</p>
		</div>
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
	textColor: {
		type: String,
		default: ''
	},
	salesType: {
		type: String,
		required: true
	},
	// eslint-disable-next-line vue/require-prop-types
	value: {
		required: true,
		default: 'NO'
	},
	symbol: {
		type: String,
		default: ''
	}
})

</script>
