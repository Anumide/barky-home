<template>
	<div class="grid grid-cols-3 auto-rows-auto gap-4">
		<CustomSalesSegment
			type-of-sales="Profit or Loss"
			class="col-span-2"
		>
			<div class="grid grider">
				<CustomSalesInfo
					sales-type="Sales"
					symbol="-"
					value="N4,000,000"
				/>
				<span class="self-end mt-4 text-center font-semibold text-lg">-</span>
				<CustomSalesInfo
					sales-type="Cost of goods"
					symbol="-"
					value="N4,000,000"
				/>
				<span class="self-end mt-4 text-center font-semibold text-lg">-</span>
				<CustomSalesInfo
					sales-type="Expenses"
					symbol="="
					value="N4,000,000"
				/>
				<span class="self-end mt-4 text-center font-semibold text-lg">=</span>
				<CustomSalesInfo
					sales-type="Profit/Loss"
					value="N4,000,000"
				/>
			</div>
		</CustomSalesSegment>

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
			<div class="flex justify-between items-center border-b border-border_color border-solid py-3 px-4">
				<p class="font-medium text-lg">
					Bank
				</p>
				<a v-if="bankHistories.length" href="#" class="links">see all</a>
			</div>
			<DashboardBankHistory
				:bank-histories="bankHistories"
			/>
		</div>

		<!-- create new account -->
		<div class="new-account col-start-3 font-poppins tracking-wider">
			<p class="text-white text-2xl font-bold w-52">
				Open a new account with Traq
			</p>
			<custom-button theme="submit" label="Create New Account" class="w-fit bg-white text-primary rounded-full text-sm px-2 font-medium my-4">
				<template #icon-right>
					<icon name="arrowUpRight" class="w-5 text-primary" />
				</template>
			</custom-button>
		</div>

		<div class="hover rounded-t row-start-3 col-span-2 p-7 bg-white">
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
				<a v-if="receivableInfos.length" href="#" class="links">view all</a>
			</div>
			<keep-alive>
				<TransitionFade>
					<component :is="comps[currentComponent]" :receivable-infos="receivableInfos" />
				</TransitionFade>
			</keep-alive>
		</div>
	</div>
</template>

<script setup lang="ts">
import receivables from '@/components/dashboard/Receivables.vue'
import payables from '@/components/dashboard/Payables.vue'

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bankHistories = [
    // {
    // bankName: 'Fidelity',
    // bankBalance: 'N900,000,000',
    // InAppBalance: 'N900,000,000',
    // bankLogo: '@/assets/icons/source/bankHistory.svg'
    // },
	// {
    // bankName: 'Fidelity',
    // bankBalance: 'N900,000,000',
    // InAppBalance: 'N900,000,000',
    // bankLogo: '@/assets/icons/source/bankHistory.svg'
    // },
	// {
    // bankName: 'Fidelity',
    // bankBalance: 'N900,000,000',
    // InAppBalance: 'N900,000,000',
    // bankLogo: '@/assets/icons/source/bankHistory.svg'
    // },
	// {
    // bankName: 'Fidelity',
    // bankBalance: 'N900,000,000',
    // InAppBalance: 'N900,000,000',
    // bankLogo: '@/assets/icons/source/bankHistory.svg'
    // },
	// {
    // bankName: 'Fidelity',
    // bankBalance: 'N900,000,000',
    // InAppBalance: 'N900,000,000',
    // bankLogo: '@/assets/icons/source/bankHistory.svg'
    // }
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const receivableInfos = [
	// {
	// 	billNo: '#456059',
	// 	vendor: 'Ademola Holdings',
	// 	amount: 'N30,0000',
	// 	dueDates: 'Jan 20, 2022',
	// 	dueDays: 500
	// },
	// {
	// 	billNo: '#456059',
	// 	vendor: 'Ademola Holdings',
	// 	amount: 'N30,0000',
	// 	dueDates: 'Jan 20, 2022',
	// 	dueDays: 350
	// },
	// {
	// 	billNo: '#456059',
	// 	vendor: 'Ademola Holdings',
	// 	amount: 'N30,0000',
	// 	dueDates: 'Jan 20, 2022',
	// 	dueDays: 200
	// }
]
</script>

<style scoped>

.grider{
	grid-template-columns: repeat(7, 1fr)
}
.new-account{
	background: url('@/assets/images/newAccountbg.png') no-repeat;
	@apply px-7 pt-24 pb-28 bg-cover rounded-t;
	background-position: -3px 0px;
}

.links{
	@apply text-card_blue underline text-sm;
}

.active-component{
	@apply rounded-full bg-white transition-all duration-200;
}

</style>
