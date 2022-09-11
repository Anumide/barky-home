
<template>
	<div class="w-full h-full flex flex-col">
		<div class="flex items-center justify-between mb-16">
			<span class="text-2xl leading-6 text-dark font-normal">Products</span>
			<!-- create button with dropdown -->
			<CustomSelect
				select-type="btnDropdown"
				:label="'Create Product'"
				:options="periods"
				link="/sales/products/new-product"
			/>
			<!-- <div

				class="w-48 bg-primary flex items-center divide-x-reverse divide-solid divide-white rounded-full text-white cursor-pointer relative"
			>
				<NuxtLink to="/sales/products/new-product" class="bg-primary hover:ring-primary hover:ring-2 hover:ring-offset-2 transition text-sm border-r border-white/80 border-solid rounded-l-full pl-6 pr-3 py-3 leading-6 font-medium">
					Create Product
				</NuxtLink>
				<div
					tabindex="0"
					class="flex justify-center items-center bg-primary rounded-r-full pl-5 p-4"
					@click="isPeriod = !isPeriod"
					@blur="isPeriod = false"
				>
					<icon
						name="arrowDown"
						class="w-4"
					/>
				</div>

				<TransitionFade>
					<div v-if="isPeriod" class="absolute top-[3.3rem] right-3 z-10 bg-white rounded drop-shadow-lg shadow-xl text-black w-44">
						<ul class="divide-y divide-boder_color">
							<li v-for="period in periods" :key="period.name" class="py-2 pl-3 cursor-pointer hover:bg-neutral-200 transition">
								<NuxtLink :to="'/sales/products/' + period.periodLink">
									{{ period.name }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</TransitionFade>
			</div> -->
			<!-- end of create button with dropdown -->
		</div>
		<!-- products history  -->
		<div class="w-full px-[60px] py-[40px] relative rounded-md bottom-0 left-0 right-0 grow bg-white shadow-xl drop-shadow-md">
			<div class="text-sm font-medium mb-6">
				Product History
			</div>
			<div class="flex items-center justify-between mb-8 w-full">
				<CustomInput placeholder="Search Customers" class="w-full max-w-[390px] h-10 placeholder:text-xs text-sm" />
				<div class="flex items-center gap-x-4">
					<CustomButton theme="outline" label="Print" class="group transition text-primary hover:text-white hover:bg-primary text-xs rounded-full px-2 py-1.5">
						<template #icon-left>
							<icon name="printer" fill="none" class="w-4 h-4 group-hover:text-white transition" />
						</template>
					</CustomButton>
					<CustomButton theme="outline" label="Download" class="group text-primary transition hover:text-white hover:bg-primary text-xs rounded-full px-2 py-1.5">
						<template #icon-left>
							<icon name="download" fill="none" class="w-4 h-4 group-hover:text-white transition" />
						</template>
					</CustomButton>
					<CustomButton theme="outline" label="Mail" class="group text-primary transition hover:text-white hover:bg-primary text-xs rounded-full px-2 py-1.5">
						<template #icon-left>
							<icon name="mail" fill="none" class="w-4 h-4 group-hover:text-white transition" />
						</template>
					</CustomButton>
				</div>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-4">
					<CustomSelect label="" default-option="All Products" hidden :options="['All statuses','next option international and global dimensions']" class="h-10 text-sm w-40" />
					<CustomSelect label="" default-option="Products Category" hidden :options="['All statuses','next option international and global dimensions']" class="h-10 text-sm w-48" />
				</div>
				<div class="flex items-center gap-x-4">
					<CustomButton class="h-[35px] py-1.5 px-2.5 font-medium text-xs" label="Apply filters" theme="submit" @click="uploadCsv" />
					<button class="h-[35px] py-1.5 px-2.5 font-medium text-xs rounded-md bg-gray-100 text-gray-400 flex items-center justify-center w-fit whitespace-nowrap">
						Clear filters
					</button>
				</div>
			</div>
			<div v-if="data" class="pt-[70px] pb-[30px] mt-8 flex flex-col items-center justify-center">
				<img src="@/assets/icons/source/emptyDocument.svg" alt="" class="[119px] h-[144px]">
				<p class="font-medium mt-2 text-2xl leading-6 mb-3">
					Oops! No invoice available
				</p>
				<p class="text-base font-normal mb-8">
					Get paid faster and build custom invoices
				</p>
				<div class="flex items-center gap-x-4">
					<CustomButton label="Upload CSV" theme="outline" class="py-2 px-7 rounded-full text-primary hover:text-white hover:bg-primary transition h-[44px] font-medium text-sm" @click="openModal" />
					<CustomButton label="Create invoice" theme="link" class="py-2.5 px-7 rounded-full h-[44px] text-white hover:ring-primary hover:ring-2 hover:ring-offset-2 transition whitespace-nowrap font-medium text-sm" to="/sales/invoice/new-invoice" />
				</div>
			</div>
			<div v-else class="mt-6">
				<table class="min-w-full text-left">
					<thead class="border-b border-dark text-left">
						<tr>
							<th class="py-5 px-3 w-[5%]">
								<input type="checkbox" class="w-4 h-4 cursor-pointer">
							</th>
							<th
								scope="col"
								class="w-[17%] font-semibold text-sm text-dark py-6 px-3"
							>
								Product Name
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-3"
							>
								Category
							</th>
							<th
								scope="col"
								class="w-[19%] font-semibold text-sm text-dark py-6 px-3"
							>
								Category Income
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-3"
							>
								Description
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-3"
							>
								Price
							</th>
							<th
								scope="col"
								class="font-semibold text-sm text-dark py-6 px-3"
							>
								Tax
							</th>
							<th
								scope="col"
								class="w-20 font-semibold text-sm text-dark py-6 px-3"
							>
								Action
							</th>
						</tr>
					</thead>
					<tbody class="">
						<tr
							v-for="(staff, index) in 4"
							:key="staff"
							class=" border-b border-black/20 h-[68px] cursor-pointer hover:bg-slate-100 transition-colors duration-200"
						>
							<td
								class="py-5 px-3"
							>
								<input type="checkbox" class="w-4 h-4 cursor-pointer">
							</td>
							<td
								class="text-xs text-dark px-3"
							>
								Apple
							</td>
							<td
								class="text-xs text-dark px-3"
							>
								Laptop
							</td>
							<td
								class="text-xs text-dark px-3"
							>
								N900,000
							</td>
							<td
								class="text-xs text-dark px-3"
							>
								Macbook Pro
							</td>
							<td
								class="text-xs text-dark px-3"
							>
								N900,000
							</td>
							<td
								class="text-xs text-dark px-3"
							>
								N20,000
							</td>
							<td
								class="text-xs text-dark px-3 text-right"
							>
								<div
									class="w-[6.6rem] m-auto p-2 rounded-full outline-none bg-primary_light font-medium text-primary"
									@click="isShow(index)"
								>
									<CustomSelect
										custom-class="gap-1 text-xs"
										icon-width="w-5"
										select-type="dropdown"
										:label="'Make active'"
										:options="[{name: 'Edit'}, {name: 'Run report'}, {name: 'Duplicate'}]"
									/>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

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

<script setup>
import { useModal } from '~~/src/composables/use-modal'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isOpened = ref(false)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const uploadCsv = () => {
    data.value = true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = ref(false)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { modalIsOpen, openModal, closeModal } = useModal()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const periods = [
	{ name: 'Import CSV', link: '' },
	{ name: 'Add Stock', link: '/sales/products/' + 'add-stock' },
	{ name: 'Stock Transfer', link: '/sales/products/' + 'stock-transfer' },
	{ name: 'Stock Adjustment', link: '/sales/products/' + 'stock-adjustment' }
]

</script>

<style lang="scss" scoped>

</style>
