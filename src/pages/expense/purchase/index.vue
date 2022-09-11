<template>
	<div class="w-full h-full flex flex-col">
		<div class="flex items-center justify-between mb-8">
			<span class="text-2xl leading-6 text-dark font-normal">Purchase</span>
			<CustomButton class="text-white rounded-full w-fit px-6 py-3 text-sm leading-6 font-medium" label="Create Purchase" theme="link" to="/expense/purchase/new-purchase" />
		</div>
		<!-- cards start here -->
		<div class="w-full grid grid-cols-4 gap-x-4 mb-10">
			<TheCard class=" w-full bg-card_blue flex h-[120px] items-center justify-between">
				<div class="flex flex-col gap-y-2 py-2">
					<span class="font-normal text-xs text-white">Purchase Order</span>
					<span class="text-white text-[22px] font-semibold uppercase">0</span>
				</div>
				<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
					<icon name="invoice" class="w-4 h-4 text-card_blue" />
				</div>
			</TheCard>
			<TheCard class=" w-full bg-card_green flex h-[120px] items-center justify-between">
				<div class="flex flex-col gap-y-2 py-2">
					<span class="font-normal text-xs text-white">Approved Purchase</span>
					<span class="text-white text-[22px] font-semibold uppercase">0</span>
				</div>
				<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
					<icon name="invoice" class="w-4 h-4 text-card_green" />
				</div>
			</TheCard>
			<TheCard class=" w-full bg-card_red flex h-[120px] items-center justify-between">
				<div class="flex flex-col gap-y-2 py-2">
					<span class="font-normal text-xs text-white">Unapproved Purchase</span>
					<span class="text-white text-[22px] font-semibold uppercase">0</span>
				</div>
				<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
					<icon name="invoice" class="w-4 h-4 text-card_red" />
				</div>
			</TheCard>
			<TheCard class=" w-full bg-card_yellow flex h-[120px] items-center justify-between">
				<div class="flex flex-col gap-y-2 py-2">
					<span class="font-normal text-xs text-white">Return</span>
					<span class="text-white text-[22px] font-semibold uppercase">0</span>
				</div>
				<div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
					<icon name="invoice" class="w-4 h-4 text-card_yellow" />
				</div>
			</TheCard>
		</div>
		<!-- cards end here -->

		<!-- table starts here -->
		<div class="w-full px-[60px] py-[40px] relative rounded-md bottom-0 left-0 right-0 grow bg-white shadow-xl drop-shadow-md">
			<div class="text-sm font-medium mb-6">
				Purchase History
			</div>
			<div class="flex items-center justify-between mb-4 w-full">
				<CustomInput placeholder="Search Payee" class="w-full max-w-[330px] h-10 placeholder:text-xs text-sm bg-dashboard_background" />
				<div class="flex items-center gap-x-4">
					<CustomButton theme="outline" label="Print" class="text-primary text-xs rounded-full px-2 py-1.5" @click="uploadCsv">
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
					Oops! No Purchase available
				</p>
				<p class="text-base font-normal mb-8">
					Get paid faster and build custom invoices
				</p>
				<div class="flex items-center gap-x-4">
					<CustomButton label="Upload CSV" theme="outline" class="py-2 px-7 rounded-full text-primary h-[44px] font-medium text-sm" @click="openModal" />
					<CustomButton label="Create purchase" theme="link" class="py-2.5 px-7 rounded-full h-[44px] text-white whitespace-nowrap font-medium text-sm" to="/expense/purchase/new-purchase" />
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
								Status
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Date
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								PO No.
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Supplier Name
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Sub Total
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Discount
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-4"
							>
								Freight
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 pl-4 text-right"
							>
								Total
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
								<div class="w-full h-6 px-4 rounded-full bg-green-100 flex items-center justify-center font-medium text-green-700">
									paid
								</div>
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								July 7, 2022
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								334651
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								Femi Dozie
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								N300,000
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								N3,000
							</td>
							<td
								class="text-xs text-dark px-4"
							>
								N5,000
							</td>
							<td
								class="text-xs text-dark pl-4 text-right"
							>
								N450,000
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
const data = ref(false)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { modalIsOpen, openModal, closeModal } = useModal()
</script>

<style lang="scss" scoped>

</style>
