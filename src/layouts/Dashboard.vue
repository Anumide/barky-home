<template>
	<div class="flex h-screen w-full">
		<sideNav />
		<div class="h-screen w-full overflow-auto">
			<Navigation />
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
