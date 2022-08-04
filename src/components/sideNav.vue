<template>
	<div class="lg:w-80 w-60 h-full text-white bg-[#201A62]">
		<div class="py-6 lg:py-8">
			<div class="logo text-neutral-50 pl-6 lg:pl-12">
				<icon name="hamburger" class="w-5 text-neutral-50" />
				<img src="@/assets/image/Traq.png" alt="">
			</div>
			<!-- side nav menu lists -->
			<div class="menu-list my-8 lg:my-12">
				<div class="dashboard pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="category" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Dashboard</span>
				</div>
				<div class="sales pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="sales" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Sales</span>
				</div>
				<div class="expense pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="expense" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Expense</span>
				</div>
				<div class="bank pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="bank" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Bank</span>
				</div>
				<div class="accountant pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="accountant" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Accountant</span>
				</div>
				<div class="tax pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="tax" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Tax</span>
				</div>
				<div class="reports pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="report" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Reports</span>
				</div>
				<div class="hrm pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="hrm" class="w-5 mr-2 fill-transparent" />
					<span class="grow">HRM</span>
				</div>
			</div>
			<!-- setting and logout -->
			<div class="setting-logout">
				<div class="setting pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="setting" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Settings</span>
				</div>
				<div class="logout pl-6 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between">
					<icon name="logout" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Logout</span>
				</div>
			</div>
		</div>
		<slot />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
