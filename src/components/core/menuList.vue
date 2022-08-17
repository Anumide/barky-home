<template>
	<div class="side-menu">
		<icon name="category" class="icons" />
		<span class="grow">Dashboard</span>
	</div>
</template>

<script>

</script>

<style scoped>
 .side-menu {
	@apply pl-4 lg:pl-8 xl:pl-12 pr-2 font-medium text-lg text-neutral-50 py-2 lg:py-4 lg:my-2 my-3 flex gap-2 items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition duration-200;
 }

 .icons{
	@apply w-6 fill-transparent;
 }

</style>
