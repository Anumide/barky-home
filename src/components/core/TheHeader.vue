<template>
	<div class="flex justify-between items-center p-2 bg-transparent container">
		<!-- menu list  -->
		<div class="md:hidden w-8">
			<img src="@/assets/icons/source/hamburger.svg" alt="" class="w-full h-full">
		</div>
		<div class="hidden md:block grow">
			<ul class="flex justify-between items-center">
				<li>
					<NuxtLink to="" class="links">
						Buy
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="" class="links">
						Rent
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="" class="links">
						Shortlets
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="" class="links">
						Lands
					</NuxtLink>
				</li>
			</ul>
		</div>
		<div class="md:mx-8 lg:mx-16 xl:mx-20">
			<img src="@/assets/images/barky-home-logo.png" alt="" class="xl:h-12">
		</div>
		<!-- profile -->
		<div class="md:hidden">
			<div v-if="!isLogin">
				<NuxtLink to="" class="links text-blue-600">
					Sign In
				</NuxtLink>
			</div>
			<div v-else>
				profile
			</div>
		</div>
		<div class="hidden md:block grow">
			<ul class="flex justify-between items-center">
				<li>
					<NuxtLink to="" class="links">
						Agent finder
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="" class="links">
						Advert
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="" class="links">
						Invest
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="" class="links text-blue-600">
						Sign In
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
    const isLogin = ref(false)
</script>

<style scoped>
    .links{
        @apply hover:underline text-sm lg:text-base;
    }
</style>
