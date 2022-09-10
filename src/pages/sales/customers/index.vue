<template>
	<div class="w-full h-full flex flex-col">
		<div class="flex items-center justify-between mb-8">
			<span class="text-2xl leading-6 text-dark font-normal">Customers</span>
			<CustomButton class="text-white rounded-full w-fit px-6 py-3 text-sm leading-6 font-medium" label="Create Customer" theme="link" to="/sales/customers/new-customer" />
		</div>
		<!-- cards start here -->
		<div class="w-full grid grid-cols-4 gap-x-4 mb-10">
			<TheCard class=" w-full bg-card_blue flex h-[120px] items-center justify-between">
				<div class="flex flex-col gap-y-2 py-2">
					<span class="font-normal text-xs text-white">Total Customers</span>
					<span class="text-white text-[22px] font-semibold uppercase">0</span>
				</div>
				<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
					<icon name="invoice" class="w-4 h-4 text-card_blue" />
				</div>
			</TheCard>
			<TheCard class=" w-full bg-card_yellow flex h-[120px] items-center justify-between">
				<div class="flex flex-col gap-y-2 py-2">
					<span class="font-normal text-xs text-white">Open Balance</span>
					<span class="text-white text-[22px] font-semibold uppercase">0</span>
				</div>
				<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
					<icon name="invoice" class="w-4 h-4 text-card_yellow" />
				</div>
			</TheCard>
			<TheCard class=" w-full bg-card_green flex h-[120px] items-center justify-between">
				<div class="flex flex-col gap-y-2 py-2">
					<span class="font-normal text-xs text-white">Average Payable Days</span>
					<span class="text-white text-[22px] font-semibold uppercase">0</span>
				</div>
				<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
					<icon name="invoice" class="w-4 h-4 text-card_green" />
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
				<CustomInput placeholder="Search Customers" class="w-full max-w-[330px] h-10 placeholder:text-xs text-sm bg-dashboard_background" />
				<div class="flex items-center gap-x-4">
					<CustomButton theme="outline" label="Print" class="text-primary text-xs rounded-full px-2 py-1.5" @click="uploadCsv" >
						<template #icon-left>
							<icon name="printer" fill="none" class="w-4 h-4" />
						</template>
					</CustomButton>
					<CustomButton theme="outline" label="Download" class="text-primary text-xs rounded-full px-2 py-1.5">
						<template #icon-left>
							<icon name="download" fill="none" class="w-4 h-4" />
						</template>
					</CustomButton>
					<CustomButton theme="outline" label="Mail" class="text-primary text-xs rounded-full px-2 py-1.5">
						<template #icon-left>
							<icon name="mail" fill="none" class="w-4 h-4" />
						</template>
					</CustomButton>
				</div>
			</div>
			<div v-if="!data" class="pt-[70px] pb-[30px] flex flex-col items-center justify-center">
				<img src="@/assets/icons/source/emptyDocument.svg" alt="" class="[119px] h-[144px]">
				<p class="font-medium mt-2 text-2xl leading-6 mb-3">
					Oops! No customer available
				</p>
				<p class="text-base font-normal mb-8">
					Get paid faster and build custom invoices
				</p>
				<div class="flex items-center gap-x-4">
					<CustomButton label="Upload CSV" theme="outline" class="py-2 px-7 rounded-full text-primary h-[44px] font-medium text-sm" @click="openModal" />
					<CustomButton label="Create customer" theme="link" class="py-2.5 px-7 rounded-full h-[44px] text-white whitespace-nowrap font-medium text-sm" to="/sales/customers/new-customer" />
				</div>
			</div>
			<div v-else class="mt-6">
				<table class="min-w-full text-center">
					<thead class="border-b border-dark_gray">
						<tr>
							<th
								scope="col"
								class="pr-4 text-left"
							>
								<input type="checkbox" class="w-4 h-4 cursor-pointer">
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Customer
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Phone
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Email
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Currency
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Open Balance
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
								class="py-5 pr-4 text-left"
							>
								<input type="checkbox" class="w-4 h-4 cursor-pointer">
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								Eko Hotel and Suites
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								+2348039922901
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								ekosuites@gmail.com
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								NGN
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								N12,000
							</td>
							<td
								class="text-xs text-dark pl-4 text-right"
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
					<UploadCsv @close-modal="closeModal" />
				</TransitionFade>
			</Modal>
		</TransitionFade>
	</div>
</template>

<script setup lang="ts">
import { useModal } from '~~/src/composables/use-modal'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const uploadCsv = () => {
    data.value = !data.value
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = ref(true)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { modalIsOpen, openModal, closeModal } = useModal()
</script>

<style lang="scss" scoped>

</style>
