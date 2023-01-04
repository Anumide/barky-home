<template>
	<div class="">
		<header ref="header" class="header">
			<TheHeader :class="{ 'bg-white text-black shadow-md' : !isVisible }" />
			<form class="flex bg-white gap-x-2 shadow w-5/6 max-w-sm mx-auto items-center my-8 md:my-12 py-2 px-3 rounded">
				<input type="text" placeholder="State, City, Address" class="bg-transparent focus:outline-none grow placeholder:text-xs">
				<span class="w-4 cursor-pointer">
					<img src="@/assets/icons/source/searchIcon.svg" alt="searchIcon" class="w-full h-full">
				</span>
			</form>
		</header>
		<main class="my-8 mx-auto xl:max-w-[85%] lg:max-w-[90%] mt-8 mb-20">
			<div class="flex flex-col md:flex-row gap-8 md:gap-0 justify-around">
				<DashboardCategory
					category-type="Buy a home"
					category-text="houses for sale, for sale by owner, for sale by agent, new construction, old constructed, all homes"
					image-src="buyhome"
					text="Browse homes"
					text-class="md:w-full w-[60%]"
					@click="$router.push('/buy')"
				/>
				<DashboardCategory
					category-type="Rent homes"
					category-text="new constructions, park out, halls, hostels, offices, trucks, cars, all"
					image-src="renthome"
					image-width="md:w-[13rem]"
					text="Find rentals"
					text-class="w-[60%] md:w-3/4"
					@click="$router.push('/rent')"
				/>
				<DashboardCategory
					category-type="Shortlets"
					category-text="party, stay, filming, beach house, all"
					image-src="shortlet"
					image-width="md:w-[12rem]"
					text="Find shortlets"
					text-class="w-[60%] md:w-3/4"
					@click="$router.push('/shortlets')"
				/>
			</div>
			<div class="flex flex-col md:flex-row gap-8 md:gap-0 justify-around mt-4 md:mt-20">
				<DashboardCategory
					category-type="Lands"
					category-text="lease (farming, company, shops, store, garage) buy, all"
					image-src="land"
					image-width="md:w-[12rem]"
					text="Browse Lands"
					text-class="w-[60%] md:w-3/4"
					@click="$router.push('/lands')"
				/>
				<DashboardCategory
					category-type="Agent finder"
					category-text="real estate agents, property manager/mandates, home inspectors, house builders, developers, all"
					image-src="agentfinder"
					text="Find agents"
					text-class="md:w-full w-[60%]"
					@click="$router.push('/agent-finder')"
				/>
				<DashboardCategory
					category-type="Invest with us"
					category-text="Partner with us and earn high ROI"
					image-src="invest"
					image-width="md:w-[12rem]"
					text="Invest"
					text-class="w-[60%] md:w-3/4"
				/>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const header = ref(null)
const isVisible = ref(true)
const rootMargin = '-150px 0px 0px 0px'

useIntersectionObserver(
	header,
  ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting
  },
  { rootMargin }
)

</script>

<style scoped>
	.header{
		background: center / cover no-repeat url('@/assets/images/header-mobile-bg.png') ;
		height: 50vh;
		padding-top: 3rem;
	}
	@media screen and (min-width: 768px){
		.header{
			background: center / cover no-repeat url('@/assets/images/header-bg.png');
			padding: 5rem;
		}
	}
</style>
