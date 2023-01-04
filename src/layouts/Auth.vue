<template>
	<div class="flex flex-col justify-between h-screen">
		<div class="my-4">
			<p class="max-w-lg mx-auto mb-4 font-semibold text-xl text-center">
				Welcome to Barkyhomes
			</p>
			<section>
				<div class="flex gap-4 px-8 lg:px-[30%] md:px-[20%] border-b-2 border-border_color border-solid">
					<NuxtLink to="/sign-in" class="px-1 pt-1 pb-0 text-xs font-semibold">
						Sign In
					</NuxtLink>
					<NuxtLink to="/sign-up" class="px-1 pt-1 pb-0 text-xs font-semibold">
						Sign Up
					</NuxtLink>
				</div>
				<slot />
			</section>
		</div>
		<TheFooter />
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
a.router-link-active{
    @apply bg-cover_background rounded-t;
}

</style>
