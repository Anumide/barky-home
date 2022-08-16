<template>
	<div class="xl:w-[22%] lg:w-1/3 w-[47%] max-w-sm h-full overflow-auto text-white bg-[#201A62] md:block hidden">
		<div class="py-4 lg:py-8">
			<div class="logo flex items-center text-neutral-50 pl-4 lg:pl-8 xl:pl-12">
				<icon name="hamburger" class="w-8 text-neutral-50" />
				<div class="w-20">
					<img src="@/assets/image/Traq.png" alt="" class="w-full">
				</div>
			</div>
			<!-- side nav menu lists -->
			<div class="my-8 lg:my-12">
				<div v-for="option in sideMenuOptions" :key="option.name" class="side-menu">
					<icon :name="option.icon" class="icons" />
					<span class="grow">{{ option.name }}</span>
				</div>
			</div>
			<!-- setting and logout -->
			<div>
				<div class="side-menu">
					<icon name="setting" class="icons" />
					<span class="grow">Settings</span>
				</div>
				<div class="side-menu">
					<icon name="logout" class="icons" />
					<span class="grow">Logout</span>
				</div>
			</div>
		</div>
		<slot />
	</div>
</template>

<script setup lang="ts">
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const sideMenuOptions = ref([
	{
		name: 'Dashboard',
		icon: 'category'
	},
	{
		name: 'Sales',
		icon: 'sales'
	},
	{
		name: 'Expense',
		icon: 'expense'
	},
	{
		name: 'Bank',
		icon: 'bank'
	},
	{
		name: 'Accountant',
		icon: 'accountant'
	},
	{
		name: 'Tax',
		icon: 'tax'
	},
	{
		name: 'Reports',
		icon: 'report'
	},
	{
		name: 'HRM',
		icon: 'hrm'
	}
 ])
</script>

<style scoped>
 .side-menu {
	@apply pl-4 lg:pl-8 xl:pl-12 pr-2 font-medium text-lg text-neutral-50 py-2 lg:py-4 lg:my-2 my-3 flex gap-2 items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition duration-200;
 }

 .icons{
	@apply w-6 fill-transparent;
 }

</style>
