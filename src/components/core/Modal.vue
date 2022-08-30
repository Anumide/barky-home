<script setup lang="ts">
defineEmits(['closeModal'])
</script>

<template>
	<teleport to="body">
		<div
			class="w-full h-full z-[999999999] flex items-center justify-center fixed top-0 left-0 overflow-y-hidden bg-gray-800/60 p-8"
			@click.self="$emit('closeModal')"
		>
			<div
				class="flex items-center justify-center h-fit max-h-[98vh]"
			>
				<slot />
			</div>
		</div>
	</teleport>
</template>
