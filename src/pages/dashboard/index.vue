<template>
	<div class="grid grid-cols-3 auto-rows-auto gap-4 pl-24 pr-8 pt-8">
		<custom-sales-segment
			type-of-sales="Profit or Loss"
			class="col-span-2 mb-4"
		>
			<div class="grid grid-cols-4">
				<CustomSalesInfo
					sales-type="Sales"
				/>
				<CustomSalesInfo
					sales-type="Cost of goods"
				/>
				<CustomSalesInfo
					sales-type="Expenses"
				/>
				<CustomSalesInfo
					sales-type="Profit/Loss"
				/>
			</div>
		</custom-sales-segment>

		<!-- Sales -->
		<custom-sales-segment
			type-of-sales="Sales"
			class="col-span-1 col-start-1"
		>
			<div class="grid grid-cols-2 gap-y-4 gap-x-14 py-4 px-6">
				<CustomSalesInfo
					icon="invoice"
					icon-color="text-[#F0A202]"
					bg-color="bg-[#F0A202]"
					sales-type="Total Paid Invoice"
				/>
				<CustomSalesInfo
					icon="coin"
					icon-color="text-[#1F1A62]"
					bg-color="bg-[#1F1A62]"
					sales-type="Sales"
				/>
				<CustomSalesInfo
					icon="invoice"
					icon-color="text-[#D95D39]"
					bg-color="bg-[#D95D39]"
					sales-type="Total Open Invoice"
				/>
				<CustomSalesInfo
					icon="percentage"
					icon-color="text-[#F18805]"
					bg-color="bg-[#F18805]"
					sales-type="Estimates"
				/>
			</div>
		</custom-sales-segment>

		<!-- Expenses -->
		<custom-sales-segment
			type-of-sales="Expenses"
			class="col-start-2 col-end-3"
		>
			<div class="grid grid-cols-2 gap-y-4 gap-x-14 py-4 px-6">
				<CustomSalesInfo
					icon="invoice"
					icon-color="text-[#F0A202]"
					bg-color="bg-[#F0A202]"
					sales-type="Total Paid Invoice"
				/>
				<CustomSalesInfo
					icon="coin"
					icon-color="text-[#1F1A62]"
					bg-color="bg-[#1F1A62]"
					sales-type="Sales"
				/>
				<CustomSalesInfo
					icon="invoice"
					icon-color="text-[#D95D39]"
					bg-color="bg-[#D95D39]"
					sales-type="Total Open Invoice"
				/>
				<CustomSalesInfo
					icon="percentage"
					icon-color="text-[#F18805]"
					bg-color="bg-[#F18805]"
					sales-type="Estimates"
				/>
			</div>
		</custom-sales-segment>

		<!-- bank history -->
		<div class="border border-border_color border-solid rounded-sm row-start-1 row-end-3 col-start-3 font-poppins">
			<div class="flex justify-between items-center border-b border-border_color border-solid pt-6 pb-3 px-4">
				<p class="font-medium text-lg">
					Bank
				</p>
				<a href="#">see all</a>
			</div>
			<div class="mt-20 flex items-center flex-col gap-4">
				<div class="w-40">
					<img src="@/assets/images/bankHistory.png" alt="" class="w-full h-full">
				</div>
				<p class="font-medium">
					Oops! No bank history available
				</p>
			</div>
		</div>

		<div class="new-account">
			<p>Open a new account with Traq</p>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'dashboard'
})
</script>

<style scoped>
.new-account{
	background-image: url('@/assets/images/newAccountbg.png');
}
</style>
