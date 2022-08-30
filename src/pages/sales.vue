<template>
	<div class="h-full w-full relative">
		<div class="flex items-center gap-x-6 border-b border-gray-300 font-medium text-lg leading-6 text-dark_gray sticky top-[115px] shadow-sm z-[9999] bg-white pt-5">
			<div class="flex items-center gap-x-6 w-full mx-auto max-w-[1728px] pl-[136px] pr-[70px]">
				<NuxtLink
					to="/sales/invoice"
					:class="{
						'border-b-[3px] border-primary text-primary':
							$route.path.startsWith('/sales/invoice'),
					}"
					class="cursor-pointer py-2 border-b-[3px] border-transparent"
				>
					Invoice
				</NuxtLink>
				<NuxtLink
					to="/sales/customers"
					:class="{
						'border-b-[3px] border-primary text-primary':
							$route.path === '/sales/customers',
					}"
					class="cursor-pointer py-2 border-b-[3px] border-transparent"
				>
					Customers
				</NuxtLink>
				<NuxtLink
					to="/sales/products"
					:class="{
						'border-b-[3px] border-primary text-primary':
							$route.path === '/sales/products',
					}"
					class="cursor-pointer py-2 border-b-[3px] border-transparent"
				>
					Products
				</NuxtLink>
			</div>
		</div>
		<div class="h-full w-full mx-auto max-w-[1728px] pl-[136px] pr-[70px] pt-[45px]">
			<NuxtPage />
		</div>
	</div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'dashboard'
})

</script>

<style lang="scss" scoped>

</style>
