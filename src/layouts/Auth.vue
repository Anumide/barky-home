<template>
	<div class="bg-[#FAFEFF] flex min-h-screen relative w-full overflow-x-hidden ">
		<nav
			v-bind="$attrs"
			class="bg-[#FAFEFF] fixed top-0 left-0 right-0  w-full z-[100] overflow-x-hidden mx-auto"
		>
			<div class="max-w-[1728px] mx-auto flex justify-between items-center py-[35px] px-3.5 md:px-[70px]">
				<NuxtLink to="/" class="flex items-center justify-center gap-x-[22px]">
					<img src="@/assets/images/logo.png" class="w-[98px] h-[30px]">
				</NuxtLink>
				<div class="text-base font-medium">
					<slot name="route-link" />
				</div>
			</div>
		</nav>
		<div class="px-3.5 md:px-[70px] mt-[100px] w-full relative overflow-x-hidden max-w-[1728px] mx-auto">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
