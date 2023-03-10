<template>
	<div>
		<header>
			<TheHeader class="bg-white text-black shadow-md" />
		</header>
		<main class="container mt-28 mb-12 w-11/12 mx-auto">
			<Search />
			<h1 class="font-semibold text-lg">
				Homes for sale
			</h1>
			<div class="my-3 grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-10">
				<div v-for="index in 10" :key="index">
					<Swipper :images="images" />
					<div class="mt-2 lg:text-xs text-sm">
						<p>Fully detached 5 bedroom duplex</p>
						<p>Price: <span>140M</span></p>
						<p>Location: <span>Ikota GRA, Lekki, Lagos</span></p>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">

const images = ref([
	'https://picsum.photos/id/100/500/500',
    'https://picsum.photos/id/236/500/500',
    'https://picsum.photos/id/253/500/500',
    'https://picsum.photos/id/231/500/500'
])
</script>
