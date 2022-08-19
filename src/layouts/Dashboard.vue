<template>
	<div class="flex h-screen w-full">
		<sideNav />
		<div class="h-screen grow overflow-auto">
			<Navigation />
			<TransitionFade>
				<router-view />
			</TransitionFade>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
