<template>
	<div class="w-full">
		<div class="flex items-center mb-10">
			<NuxtLink to="/sales/products" class="rounded-full bg-light_gray p-3 cursor-pointer mr-6">
				<icon name="arrowBack" fill="none" class="w-6 h-6" />
			</NuxtLink>
			<div class="text-dark font-medium text-2xl leading-6">
				New Product
			</div>
		</div>
		<div class="flex gap-x-4">
			<CustomButton class="w-36 transition rounded-full text-primary hover:text-white hover:bg-primary" label="Save and New" theme="outline" @click="test" />
			<CustomButton class="w-36 transition rounded-full hover:ring-primary hover:ring-2 hover:ring-offset-2" label="Save and Close" theme="submit" @click="test" />
		</div>
	</div>
</template>
<script setup lang="ts">
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const test = () => {
	alert('button has been clicked!')
}
</script>
