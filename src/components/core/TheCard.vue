<template>
	<div class="rounded-md relative px-6 pt-4 pb-3 hover:scale-105 transition-transform duration-300 shadow-xl">
		<!-- <span class="font-normal text-xs text-white">Total Open Invoice</span>
		<span class="text-white text-[22px] font-semibold">NO</span>
		<div class="rounded-full px-2 py-2 text-card_green text-[7.6px] leading-[14.03px] bg-white font-medium w-[78px]">
			Last 30 days
		</div> -->
		<slot />
		<img src="../../assets/images/cardBg.svg" alt="card background" aria-hidden="true" class="absolute inset-0 w-full h-full">
	</div>
</template>

<script setup lang>

</script>

<style lang="scss" scoped>

</style>
