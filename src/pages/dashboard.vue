<template>
	<div class="text-8xl font-bold">
		This is the dashboard
		<nuxt-child />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'dashboard'
})
</script>

<style scoped></style>
