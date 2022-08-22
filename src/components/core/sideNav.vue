<template>
	<div class="wrapper">
		<div class="py-4 lg:py-8">
			<div class="logo">
				<icon name="hamburger" class="w-8 text-cover_background" />
				<div class="w-20">
					<img src="@/assets/images/logoWhite.png" alt="" class="w-full">
				</div>
			</div>
			<!-- side menu lists -->
			<div id="side-menu-parent" class="my-8 lg:my-12">
				<div v-for="option in sideMenuOptions" :key="option.name">
					<menu-list
						:name="option.name"
						:icon="option.icon"
					/>
				</div>
			</div>
			<!-- setting and logout -->
			<div>
				<menu-list
					name="Settings"
					icon="setting"
				/>
				<menu-list
					name="Log out"
					icon="logout"
				/>
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
.wrapper{
	@apply xl:w-[22%] lg:w-1/3 w-[47%] max-w-sm h-full overflow-auto text-cover_background bg-primary_dark md:block hidden
}
 .side-menu {
	@apply pl-4 lg:pl-8 xl:pl-12 pr-2 font-medium text-lg text-cover_background py-2 lg:py-4 lg:my-2 my-3 flex gap-2 items-center justify-between transition-all duration-200;
 }

#side-menu-parent a{
	@apply bg-transparent;
}

 #side-menu-parent a:hover{
	@apply hover:bg-[#3488ED] hover:bg-opacity-10;
 }

  a.router-link-exact-active{
	@apply border-l-4 border-solid border-cover_background
}

.active{
	@apply border-l-4 border-cover_background border-solid;
}

.logo{
	@apply flex items-center text-cover_background pl-4 lg:pl-8 xl:pl-12;
}
 .icons{
	@apply w-6 fill-transparent;
 }

</style>
