<template>
	<div>
		<header>
			<TheHeader class="bg-white text-black shadow-md" />
		</header>
		<main class="container mt-28 mb-12 w-11/12 mx-auto">
			<div class="my-8">
				<form class="w-1/2 min-w-fit mx-auto flex items-center gap-4 justify-center" @submit.prevent="clickSubmit	">
					<input type="text" placeholder="Price" class="w-20 bg-[#F3EFEF] rounded shadow-sm px-2 py-3 placeholder:font-medium font-normal text-xs placeholder:text-xs placeholder:text-[rgba(74, 64, 185, 0.4)] focus:outline-none focus:ring-primary focus:ring-1">
					<div class="p-2 shadow-sm bg-[#F3EFEF] rounded focus:outline-primary">
						<input type="text" placeholder="State, City, Address" class="bg-transparent pr-1 placeholder:font-medium font-normal text-xs placeholder:text-xs placeholder:text-[rgba(74, 64, 185, 0.4)] focus:outline-none">
						<Icon name="ic:sharp-location-on" size="25px" class="text-primary_dark pl-1 text-lg border-l border-solid border-border_color" />
					</div>
					<CustomButton text="Save" class="bg-primary shadow-sm text-white py-3 px-6 font-semibold hover:bg-[#4A40B9]" />
				</form>
			</div>
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
const clickSubmit = () => console.log('clickSubmit')

const images = ref([
	'https://picsum.photos/id/100/500/500',
    'https://picsum.photos/id/236/500/500',
    'https://picsum.photos/id/253/500/500',
    'https://picsum.photos/id/231/500/500'
])
</script>
