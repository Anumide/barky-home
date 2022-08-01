<template>
	<div>
		<TestComp />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'auth',
	middleware: ['helloWorld'],
});
</script>

<style scoped></style>
