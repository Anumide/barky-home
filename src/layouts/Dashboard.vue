<template>
	<div class="flex h-screen w-full">
		<sideNav />
		<div class="h-screen grow overflow-auto">
			<Navigation />
			<router-view v-slot="{ Component }">
				<transitionFade>
					<component :is="Component" />
				</transitionFade>
			</router-view>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
