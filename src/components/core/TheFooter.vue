<template>
	<footer class="container my-10">
		<div class="flex justify-between p-4 md:w-11/12 mx-auto my-8">
			<div class="md:grow">
				<ul class="flex flex-col md:flex-row gap-4 md:justify-around">
					<li>
						<NuxtLink to="" class="links">
							Investments
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="" class="links">
							Advertise
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="" class="links">
							About
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="md:grow">
				<ul class="flex flex-col md:flex-row gap-4 md:justify-around">
					<li>
						<NuxtLink to="" class="links">
							Feedback
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="" class="links">
							Terms
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="" class="links">
							Help
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
		<div class="flex justify-between w-48 md:w-1/3 mx-auto my-10">
			<!-- <icon name="facebook" class="w-4" />
			<icon name="instagram" class="w-4" />
			<icon name="twitter" class="w-4" />
			<icon name="email" class="w-4" /> -->
			<div class="w-3">
				<img src="@/assets/icons/source/facebook.svg" alt="" class="w-full h-full">
			</div>
			<div class="w-5">
				<img src="@/assets/icons/source/instagram.svg" alt="" class="w-full h-full">
			</div>
			<div class="w-6">
				<img src="@/assets/icons/source/twitter.svg" alt="" class="w-full h-full">
			</div>
			<div class="w-6">
				<img src="@/assets/icons/source/email.svg" alt="" class="w-full h-full">
			</div>
		</div>
		<div class="flex justify-between text-[11px] mx-auto w-48">
			<span>&copy;2022</span>
			<span>barkyhomes</span>
			<span class="italic">All rights reserved</span>
		</div>
	</footer>
</template>

<style scoped>
    .links{
        @apply hover:underline text-sm lg:text-base cursor-pointer;
    }
</style>
