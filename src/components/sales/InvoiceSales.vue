<template>
	<div class="w-full h-full flex flex-col">
		<div class="flex items-center justify-between mb-8">
			<span class="text-2xl leading-6 text-dark font-normal">Invoices</span>
			<CustomButton class="text-white rounded-full w-fit px-6 py-3 text-sm leading-6 font-medium" label="Create Invoice" theme="link" to="/sales/new-invoice" />
		</div>
		<!-- cards start here -->
		<div class="w-full grid grid-cols-4 gap-x-4 mb-10">
			<TheCard class=" w-full bg-card_blue flex justify-between">
				<div class="flex flex-col gap-y-2 py-2 z-10">
					<span class="font-normal text-xs text-white">Total Sales</span>
					<span class="text-white text-[22px] font-semibold uppercase">No</span>
					<div class="rounded-full px-2 py-2 text-card_blue text-[7.6px] leading-[14.03px] bg-white font-medium w-[78px] flex">
						Last 30 days
						<icon name="arrow-down" class="w-3 h-4 text-card_blue" fill="currentColor" />
					</div>
				</div>
				<div class="z-10">
					<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
						<icon name="invoice" class="w-4 h-4 text-card_blue" />
					</div>
				</div>
			</TheCard>
			<TheCard class=" w-full bg-card_orange flex justify-between">
				<div class="flex flex-col gap-y-2 py-2 z-10">
					<span class="font-normal text-xs text-white">Total Paid Invoice</span>
					<span class="text-white text-[22px] font-semibold uppercase">N6,000,000</span>
					<div class="rounded-full px-2 py-2 text-card_orange text-[7.6px] leading-[14.03px] bg-white font-medium w-[78px] flex">
						Last 30 days
						<icon name="arrow-down" class="w-3 h-4 text-card_orange fill-current" />
					</div>
				</div>
				<div class="z-10">
					<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
						<icon name="invoice" class="w-4 h-4 text-card_orange" />
					</div>
				</div>
			</TheCard>
			<TheCard class=" w-full bg-card_yellow flex justify-between">
				<div class="flex flex-col gap-y-2 py-2">
					<span class="font-normal text-xs text-white">Total Open Invoice</span>
					<span class="text-white text-[22px] font-semibold uppercase">No</span>
					<div class="rounded-full px-2 py-2 text-card_yellow text-[7.6px] leading-[14.03px] bg-white font-medium w-[78px] flex">
						Last 30 days
						<icon name="arrow-down" class="w-3 h-4 text-card_yellow" fill="none" />
					</div>
				</div>
				<div>
					<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
						<icon name="invoice" class="w-4 h-4 text-card_yellow" />
					</div>
				</div>
			</TheCard>
			<TheCard class=" w-full bg-card_green flex justify-between">
				<div class="flex flex-col gap-y-2 py-2">
					<span class="font-normal text-xs text-white">Total Open Invoice</span>
					<span class="text-white text-[22px] font-semibold upperecase">N6,000,000</span>
					<div class="rounded-full px-2 py-2 text-card_green text-[7.6px] leading-[14.03px] bg-white font-medium w-[78px] flex">
						Last 30 days
						<icon name="arrow-down" class="w-3 h-4 text-card_green fill-card_green" />
					</div>
				</div>
				<div>
					<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
						<icon name="invoice" class="w-4 h-4 text-card_green" />
					</div>
				</div>
			</TheCard>
		</div>
		<!-- cards end here -->

		<!-- table starts here -->
		<div class="w-full px-[60px] py-[40px] relative rounded-md bottom-0 left-0 right-0 grow bg-white shadow-xl drop-shadow-md">
			<div class="text-sm font-medium mb-6">
				Transaction History
			</div>
			<div class="flex items-center justify-between mb-4 w-full">
				<CustomInput placeholder="Search Customers" class="w-full max-w-[330px] h-10 placeholder:text-xs text-sm" />
				<div class="flex items-center gap-x-4">
					<CustomButton theme="outline" label="Print" class="text-primary text-xs rounded-full px-2 py-1.5">
						<template #icon-left>
							<icon name="invoice" fill="none" class="w-4 h-4" />
						</template>
					</CustomButton>
					<CustomButton theme="outline" label="Download" class="text-primary text-xs rounded-full px-2 py-1.5">
						<template #icon-left>
							<icon name="invoice" fill="none" class="w-4 h-4" />
						</template>
					</CustomButton>
					<CustomButton theme="outline" label="Mail" class="text-primary text-xs rounded-full px-2 py-1.5">
						<template #icon-left>
							<icon name="invoice" fill="none" class="w-4 h-4" />
						</template>
					</CustomButton>
				</div>
			</div>
			<div class="flex items-center justify-between">
				<CustomSelect label="" default-option="All statuses" hidden :options="['All statuses','next option international and global dimensions']" class="h-10 text-sm w-fit min-w-fit" />
				<div class="flex items-center gap-x-4">
					<CustomButton class="h-[35px] py-1.5 px-2.5 font-medium text-xs" label="Apply filters" theme="submit" @click="uploadCsv" />
					<button class="h-[35px] py-1.5 px-2.5 font-medium text-xs rounded-md bg-gray-100 text-gray-400 flex items-center justify-center w-fit whitespace-nowrap">
						Clear filters
					</button>
				</div>
			</div>
			<div v-if="!data" class="pt-[70px] pb-[30px] flex flex-col items-center justify-center">
				<img src="@/assets/icons/source/emptyDocument.svg" alt="" class="[119px] h-[144px]">
				<p class="font-medium mt-2 text-2xl leading-6 mb-3">
					Oops! No invoice available
				</p>
				<p class="text-base font-normal mb-8">
					Get paid faster and build custom invoices
				</p>
				<div class="flex items-center gap-x-4">
					<CustomButton label="Upload CSV" theme="outline" class="py-2 px-7 rounded-full text-primary h-[44px] font-medium text-sm" @click="openModal" />
					<CustomButton label="Create invoice" theme="link" class="py-2.5 px-7 rounded-full h-[44px] text-white whitespace-nowrap font-medium text-sm" to="/sales/new-invoice" />
				</div>
			</div>
			<div v-else class="mt-6">
				<table class="min-w-full text-left">
					<thead class="border-b border-dark_gray">
						<tr>
							<th />
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4 text-center"
							>
								Product Name
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Category
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Category Income
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Description
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Price
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Tax
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Action
							</th>
						</tr>
					</thead>
					<tbody class="">
						<tr
							v-for="staff in 4"
							:key="staff"
							class=" border-b border-dark_gray h-[68px] cursor-pointer hover:bg-slate-100 transition-colors duration-200"
						>
							<td
								class="py-5 px-4"
							>
								<input type="checkbox" class="w-4 h-4 cursor-pointer">
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								<div class="w-full h-6 px-4 rounded-full bg-green-100 flex items-center justify-center font-medium text-green-700">
									paid
								</div>
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								Ademola Holdings
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								July 4, 2022
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								33867812
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								N1,320,000
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								N320,000
							</td>
							<td
								class="text-xs text-dark px-4 w-fit"
							>
								<!-- <div class="w-full h-7 px-2 rounded-full bg-green-100 flex items-center justify-center font-medium text-green-700">
									Receive Payment
								</div> -->
								<select class="py-2 px-2 rounded-full outline-none bg-primary_light font-medium text-primary">
									<option>Receive Payment</option>
								</select>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<!-- table ends here -->
		<!-- upload modal here -->
		<TransitionFade>
			<Modal v-if="modalIsOpen" @closeModal="closeModal">
				<TransitionFade>
					<UploadCsv @close-modal="closeModal">
						/>
					</uploadcsv>
				</TransitionFade>
			</Modal>
		</TransitionFade>
	</div>
</template>

<script setup lang="ts">
import { useModal } from '~~/src/composables/use-modal'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const uploadCsv = () => {
    data.value = true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = ref(false)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { modalIsOpen, openModal, closeModal } = useModal()
</script>

<style lang="scss" scoped>

</style>
