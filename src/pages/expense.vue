<template>
	<div class="h-full w-full relative">
		<div class="flex items-center gap-x-6 border-b border-gray-300 font-medium text-lg leading-6 text-dark_gray sticky top-[100px] shadow-sm z-[9999] bg-white pt-3">
			<div class="flex items-center gap-x-6 w-full mx-auto max-w-[1728px] px-[100px]">
				<NuxtLink
					to="/expense/expenses"
					:class="{
						'border-b-[3px] border-primary text-primary':
							$route.path.startsWith('/expense/expenses'),
					}"
					class="cursor-pointer py-2 border-b-[3px] border-transparent"
				>
					Expenses
				</NuxtLink>
				<NuxtLink
					to="/expense/purchase"
					:class="{
						'border-b-[3px] border-primary text-primary':
							$route.path.startsWith('/expense/purchase'),
					}"
					class="cursor-pointer py-2 border-b-[3px] border-transparent"
				>
					Purchase
				</NuxtLink>
				<NuxtLink
					to="/expense/vendors"
					:class="{
						'border-b-[3px] border-primary text-primary':
							$route.path.startsWith('/expense/vendors'),
					}"
					class="cursor-pointer py-2 border-b-[3px] border-transparent"
				>
					Vendors
				</NuxtLink>
			</div>
		</div>
		<div class="h-full w-full container">
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
