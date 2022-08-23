<template>
	<div class="grid grid-cols-3 auto-rows-auto gap-4 pl-24 pr-8 pt-8 bg-border_color">
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
					icon-color="#F0A202"
					sales-type="Total Paid Invoice"
				/>
				<CustomSalesInfo
					icon="coin"
					icon-color="#1F1A62"
					sales-type="Sales"
				/>
				<CustomSalesInfo
					icon="invoice"
					icon-color="#D95D39"
					sales-type="Total Open Invoice"
				/>
				<CustomSalesInfo
					icon="percentage"
					icon-color="#F18805"
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
					icon-color="#F0A202"
					sales-type="Total Paid Invoice"
				/>
				<CustomSalesInfo
					icon="coin"
					icon-color="#1F1A62"
					sales-type="Sales"
				/>
				<CustomSalesInfo
					icon="invoice"
					icon-color="#D95D39"
					sales-type="Total Open Invoice"
				/>
				<CustomSalesInfo
					icon="percentage"
					icon-color="#F18805"
					sales-type="Estimates"
				/>
			</div>
		</custom-sales-segment>

		<!-- bank history -->
		<!-- border border-border_color border-solid rounded-sm -->
		<div class="hover rounded-lg shadow-lg row-start-1 row-end-3 col-start-3 font-poppins bg-white">
			<div class="flex justify-between items-center border-b border-border_color border-solid pt-6 pb-3 px-4">
				<p class="font-medium text-lg">
					Bank
				</p>
				<a href="#" class="links">see all</a>
			</div>
			<div class="mt-20 flex items-center flex-col gap-4">
				<div class="w-40">
					<img src="@/assets/images/bankHistory.png" alt="" class="w-full h-full">
				</div>
				<p class="font-medium text-sm font-sans">
					Oops! No bank history available
				</p>
			</div>
		</div>

		<!-- create new account -->
		<div class="hover new-account col-start-3 font-poppins tracking-wider">
			<p class="text-white text-2xl font-bold w-52">
				Open a new account with Traq
			</p>
			<custom-button theme="submit" label="Create New Account" class="w-fit bg-white text-primary rounded-full text-sm px-2 font-medium my-4">
				<template #icon-right>
					<icon name="arrowUpRight" class="w-5 text-primary" />
				</template>
			</custom-button>
		</div>

		<div class="hover border rounded-t border-border_color row-start-3 col-span-2 p-7 bg-white">
			<div class="flex justify-between items-center">
				<div class="rounded-full bg-[#f8f8f8] py-1 px-5 flex gap-4 font-poppins">
					<span
						class="p-3 text-xs cursor-pointer"
						:class="{'active-component': currentComponent === 'receivables'}"
						@click="currentComponent = 'receivables'"
					>
						Receivables
					</span>
					<span
						class="p-3 text-xs cursor-pointer"
						:class="{'active-component': currentComponent === 'payables'}"
						@click="currentComponent = 'payables'"
					>
						payables
					</span>
				</div>
				<a href="#" class="links">view all</a>
			</div>
			<keep-alive>
				<TransitionFade>
					<component :is="comps[currentComponent]" />
				</TransitionFade>
			</keep-alive>
		</div>
	</div>
</template>

<script setup lang="ts">
import receivables from '@/components/receivables.vue'
import payables from '@/components/payables.vue'
definePageMeta({
	layout: 'dashboard'
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentComponent = ref('receivables')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const comps = {
	receivables,
	payables
}
</script>

<style scoped>
.new-account{
	background: url('@/assets/images/newAccountbg.png') no-repeat;
	@apply px-7 pt-24 pb-28 bg-cover rounded-t;
	background-position: -3px 0px;
}

.links{
	@apply text-card_blue underline text-sm;
}

.active-component{
	@apply rounded-full bg-white;
}
</style>
