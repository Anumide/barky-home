<template>
	<footer class="container mt-10 mb-2">
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
			<Icon name="ri:facebook-fill" size="30px" class="origin-bottom hover:translate-y-[-3px] hover:scale-110 cursor-pointer hover:drop-shadow" />
			<Icon name="ri:instagram-line" size="30px" class="origin-bottom hover:translate-y-[-3px] hover:scale-110 cursor-pointer" />
			<Icon name="mdi:twitter" size="30px" class="origin-bottom hover:translate-y-[-3px] hover:scale-110 cursor-pointer" />
			<Icon name="mdi:whatsapp" size="30px" class="origin-bottom hover:translate-y-[-3px] hover:scale-110 cursor-pointer" />
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
