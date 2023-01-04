<template>
	<nav class="w-full fixed backdrop-blur top-0 left-0 text-red-50 z-50 transition-all duration-75">
		<div class="flex justify-between items-center p-2 md:px-4 bg-transparent container">
			<!-- menu list  -->
			<div class="md:hidden w-7">
				<img src="@/assets/icons/source/hamburger.svg" alt="" class="w-full h-full">
			</div>
			<div class="hidden md:block grow">
				<ul class="flex justify-between items-center">
					<li>
						<NuxtLink to="/buy" class="links">
							Buy
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/rent" class="links">
							Rent
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/shortlets" class="links">
							Shortlets
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/lands" class="links">
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
					<NuxtLink to="/sign-in" class="links text-blue-600">
						Sign In
					</NuxtLink>
				</div>
				<div v-else class="bg-pink-200 text-pink-500 flex justify-center items-center text-xs rounded-full w-8 h-8">
					BA
				</div>
			</div>
			<div class="hidden md:block grow">
				<ul class="flex justify-between items-center">
					<li>
						<NuxtLink to="/agent-finder" class="links">
							Agent finder
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/ads" class="links">
							Advert
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="" class="links">
							Invest
						</NuxtLink>
					</li>
					<li>
						<div v-if="!isLogin">
							<NuxtLink to="/sign-in" class="links text-blue-600">
								Sign In
							</NuxtLink>
						</div>
						<div v-else class="bg-pink-200 text-pink-500 flex justify-center items-center text-xs rounded-full w-8 h-8">
							BA
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
    const isLogin = ref(false)
</script>

<style scoped>
    .links{
        @apply hover:underline text-sm lg:text-base cursor-pointer;
    }
</style>
