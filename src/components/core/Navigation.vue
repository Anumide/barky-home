<template>
	<header class="header">
		<div class="font-medium text-2xl">
			Beauty Care Company
		</div>
		<div class="md:flex hidden">
			<div class="notification">
				<icon name="notification" class="w-6 text-dark fill-transparent" />
				<icon name="category" class="w-6 text-dark fill-transparent" />
			</div>
			<div class="profile">
				<div class="profile-image">
					<!-- <img src="@/assets/image/Traq.png" alt=""> -->
					<p class="text-primary_pink text-xs">
						BA
					</p>
				</div>
				<p class="font-medium text-base lg:block hidden">
					Bayo Adenekan
				</p>
				<icon name="arrowDown" class="w-3 text-[#667085] fill-transparent lg:block hidden" />
			</div>
		</div>
		<div id="hamburger" class="block md:hidden w-[8%]">
			<icon name="hamburger" class="w-full text-dark fill-transparent" />
		</div>
	</header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header{
	@apply lg:py-4 py-2 xl:pl-24 lg:pl-16 pl-4 lg:pr-4 pr-2 border-b border-[#bdbdbd] border-solid flex justify-between items-center
}
.notification{
	@apply lg:w-24 w-20 flex justify-between items-center lg:py-3 lg:px-4 px-3 py-2 border-solid border-r;
	border-color: #0000001f;
}

.profile{
	@apply lg:w-52 w-16 flex lg:p-3 p-2 items-center gap-2 justify-center;
}
.profile-image{
	@apply w-9 h-9 bg-[#EA4335] bg-opacity-10 rounded-full overflow-hidden flex justify-center items-center
}
</style>
