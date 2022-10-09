<template>
	<div class="">
		<header class="header">
			<TheHeader />
			<form class="flex bg-white gap-x-2 shadow w-5/6 max-w-sm mx-auto items-center my-8 md:my-12 py-2 px-3 rounded">
				<input type="text" placeholder="State, City, Address" class="bg-transparent focus:outline-none grow placeholder:text-xs">
				<span class="w-4 cursor-pointer">
					<img src="@/assets/icons/source/searchIcon.svg" alt="searchIcon" class="w-full h-full">
				</span>
			</form>
		</header>
		<main class="my-8 mx-auto lg:max-w-[90%] mt-8 mb-20">
			<div class="flex flex-col md:flex-row gap-8 md:gap-0 justify-around">
				<DashboardCategory
					category-type="Buy a home"
					category-text="houses for sale, for sale by owner, for sale by agent, new construction, old constructed, all homes"
					image-src="buyhome"
					text="Browse homes"
					text-class="md:w-full w-[60%]"
				/>
				<DashboardCategory
					category-type="Rent homes"
					category-text="new constructions, park out, halls, hostels, offices, trucks, cars, all"
					image-src="renthome"
					text="Find rentals"
					text-class="w-[60%] md:w-3/4"
				/>
				<DashboardCategory
					category-type="Shortlets"
					category-text="party, stay, filming, beach house, all"
					image-src="shortlet"
					text="Find shortlets"
					text-class="w-[60%] md:w-3/4"
				/>
			</div>
			<div class="flex flex-col md:flex-row gap-8 md:gap-0 justify-around mt-4 md:mt-20">
				<DashboardCategory
					category-type="Lands"
					category-text="lease (farming, company, shops, store, garage) buy, all"
					image-src="land"
					text="Browse Lands"
					text-class="w-[60%] md:w-3/4"
				/>
				<DashboardCategory
					category-type="Agent finder"
					category-text="real estate agents, property manager/mandates, home inspectors, house builders, developers, all"
					image-src="agentfinder"
					text="Find agents"
					text-class="md:w-full w-[60%]"
				/>
				<DashboardCategory
					category-type="Invest with us"
					category-text="Partner with us and earn high ROI"
					image-src="invest"
					text="Invest"
					text-class="w-[60%] md:w-3/4"
				/>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
	.header{
		background: center / cover no-repeat url('@/assets/images/header-mobile-bg.png') ;
		height: 45vh;
	}
	@media screen and (min-width: 768px){
		.header{
			background: center / cover no-repeat url('@/assets/images/header-bg.png');
			height: 40vh;
		}
	}
</style>
