<template>
	<button class="border-solid border rounded font-medium text-xs duration-300" @click.prevent="$emit('click')">
		{{ text }}
	</button>
</template>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true
    }
})

defineEmits(['click'])
</script>
