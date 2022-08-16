<template>
	<div class="flex h-screen w-full">
		<sideNav />
		<div class="h-screen grow overflow-auto">
			<Navigation />
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
