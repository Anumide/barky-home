<template>
	<button class="border-solid border-primary border rounded font-medium text-xs" @click="$emit('click')">
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
