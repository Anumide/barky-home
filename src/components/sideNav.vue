<template>
	<div class="lg:w-80 w-60 h-full text-white bg-[#201A62] md:block hidden">
		<div class="py-4 lg:py-8">
			<div class="logo flex items-center text-neutral-50 pl-4 lg:pl-12">
				<icon name="hamburger" class="w-8 text-neutral-50" />
				<img src="@/assets/image/Traq.png" alt="" class="w-[40%]">
			</div>
			<!-- side nav menu lists -->
			<div class="menu-list my-8 lg:my-12">
				<div class="dashboard pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
					<icon name="category" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Dashboard</span>
				</div>
				<div class="sales pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
					<icon name="sales" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Sales</span>
				</div>
				<div class="expense pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
					<icon name="expense" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Expense</span>
				</div>
				<div class="bank pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
					<icon name="bank" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Bank</span>
				</div>
				<div class="accountant pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
					<icon name="accountant" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Accountant</span>
				</div>
				<div class="tax pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
					<icon name="tax" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Tax</span>
				</div>
				<div class="reports pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
					<icon name="report" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Reports</span>
				</div>
				<div class="hrm pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
					<icon name="hrm" class="w-5 mr-2 fill-transparent" />
					<span class="grow">HRM</span>
				</div>
			</div>
			<!-- setting and logout -->
			<div class="setting-logout">
				<div class="setting pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
					<icon name="setting" class="w-5 mr-2 fill-transparent" />
					<span class="grow">Settings</span>
				</div>
				<div class="logout pl-4 lg:pl-12 pr-2 font-medium text-neutral-50 py-2 my-1 flex items-center justify-between hover:bg-[#3488ED] hover:bg-opacity-10 transition">
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
