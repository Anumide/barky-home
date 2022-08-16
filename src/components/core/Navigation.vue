<template>
	<header class="lg:py-4 py-2 lg:pl-8 pl-4 lg:pr-4 pr-2 border-b border-[#bdbdbd] border-solid flex justify-between items-center">
		<div class="font-medium text-lg">
			Beauty Care Company
		</div>
		<div class="profile-notification md:flex hidden">
			<div class="notification lg:w-20 w-16 flex justify-between items-center lg:p-3 p-2 border-[#adadad] border-solid border-r">
				<icon name="notification" class="w-5 text-[#292D32] fill-transparent" />
				<icon name="category" class="w-5 text-[#292D32] fill-transparent" />
			</div>
			<div class="profile lg:w-52 w-48 flex lg:p-3 p-2 items-center justify-between">
				<div class="profile-image w-8 h-8 text-center rounded-full overflow-hidden text-[#292D32] border border-[#292D32] flex justify-between items-center">
					<!-- <img src="@/assets/image/Traq.png" alt=""> -->
					BA
				</div>
				<p class="font-medium">
					Bayo Adenekan
				</p>
				<icon name="arrowDown" class="w-3 text-[#667085] fill-transparent" />
			</div>
		</div>
		<div class="hamburger block md:hidden w-[8%]">
			<icon name="hamburger" class="w-full text-[#292D32] fill-transparent" />
		</div>
	</header>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
