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
