<template>
	<nuxt-link :to="'/' + name.toLowerCase()" class="side-menu">
		<icon :name="icon" class="icons" />
		<span class="grow">{{ name }}</span>
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps({
	name: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	}
})

</script>

<style scoped>
 .side-menu {
	@apply pl-4 lg:pl-8 xl:pl-12 pr-2 font-medium text-lg text-cover_background py-2 lg:py-4 lg:my-2 my-3 flex gap-2 items-center justify-between hover:bg-primary_link hover:bg-opacity-10 transition duration-200;
 }

 .icons{
	@apply w-6 fill-transparent;
 }

</style>
