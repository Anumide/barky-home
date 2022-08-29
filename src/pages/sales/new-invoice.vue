<template>
	<div>
		<NuxtLayout name="dashboard">
			<template #top_nav_menu>
				<NuxtLink to="/sales" class="rounded-full bg-light_gray p-3 cursor-pointer mr-6">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
							stroke="#536DFE"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M20.4999 12H3.66992"
							stroke="#536DFE"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</NuxtLink>
				<div class="text-dark font-medium text-2xl leading-6">
					New Invoice
				</div>
			</template>
			<div class="w-full h-full flex flex-col pb-[100px]">
				<div class="flex items-center justify-between w-full mb-6">
					<div class="flex flex-col gap-y-3 w-[40%] max-w-[380px]">
						<span class="text-sm font-medium">Who is this invoice for?</span>
						<CustomSelect label="" :options="['Bayo Adenekan']" default-option="select customer" class="text-sm h-10" />
					</div>
					<div class="flex items-center flex-col gap-y-3">
						<span class="text-lg">Total Amout</span>
						<span class="font-bold text-2xl leading-6">N600,000</span>
					</div>
				</div>
				<table class="min-w-full text-left mb-10">
					<thead class="">
						<tr>
							<th
								scope="col"
								class="font-medium text-sm text-dark py-3 pr-10 w-[40%]"
							>
								Billing Address
							</th>
							<th
								scope="col"
								class="font-medium text-sm text-dark py-3 pr-10 w-[20%]"
							>
								Invoice Date
							</th>
							<th
								scope="col"
								class="font-medium text-sm text-dark py-3 pr-10 w-[20%]"
							>
								Due Date
							</th>
							<th
								scope="col"
								class="font-medium text-sm text-dark py-3 pr-10 w-[20%]"
							>
								Invoice number
							</th>
						</tr>
					</thead>
					<tbody class="">
						<tr
							class=""
						>
							<td
								class="pr-10"
							>
								<CustomTextarea placeholder="Enter billing address" class="placeholder:text-xs text-sm" />
								<!-- <CustomInput placeholder="Enter billing address" class="h-10 placeholder:text-xs text-sm" /> -->
							</td>
							<td
								class="pr-10"
							>
								<CustomInput type="date" placeholder="" class="h-10 placeholder:text-xs text-sm" />
							</td>
							<td
								class="pr-10"
							>
								<CustomInput type="date" placeholder="" class="h-10 placeholder:text-xs text-sm" />
							</td>
							<td
								class=""
							>
								<CustomInput placeholder="INV32019" class="h-10 placeholder:text-xs text-sm" />
							</td>
						</tr>
					</tbody>
				</table>
				<table class="min-w-full text-left mb-3">
					<thead class="bg-light_gray h-[50px]">
						<tr class="">
							<th
								scope="col"
								class="font-medium text-sm text-dark py-3 px-2 w-[35%]"
							>
								Product
							</th>
							<th
								scope="col"
								class="font-medium text-sm text-dark py-3 px-2 w-[35%]"
							>
								Description
							</th>
							<th
								scope="col"
								class="font-medium text-sm text-dark py-3 px-2 w-[10%]"
							>
								Quantity
							</th>
							<th
								scope="col"
								class="font-medium text-sm text-dark py-3 px-2 w-[10%]"
							>
								Price
							</th>
							<th
								scope="col"
								class="font-medium text-sm text-dark py-3 px-2 w-[10%] text-center"
							>
								Amount
							</th>
						</tr>
					</thead>
					<tbody class="">
						<tr
							class="h-[65px]"
						>
							<td
								class="pr-10"
							>
								<CustomInput placeholder="Enter product name" class="h-10 placeholder:text-xs text-sm" />
							</td>
							<td
								class="pr-10"
							>
								<CustomInput placeholder="Enter description" class="h-10 placeholder:text-xs text-sm" />
							</td>
							<td
								class="pr-10"
							>
								<CustomInput placeholder="" class="h-10 placeholder:text-xs text-sm" />
							</td>
							<td
								class="pr-10"
							>
								<CustomInput placeholder="" class="h-10 placeholder:text-xs text-sm" />
							</td>
							<td
								class="pr-2 text-center"
							>
								<span class="text-sm font-medium">N256,000.00</span>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="flex items-center space-x-2 px-2 cursor-pointer w-fit mb-12">
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.5 9H13.5" stroke="#536DFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M9 13.5V4.5" stroke="#536DFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>

					<span class="inline-block text-card_blue text-sm font-medium hover:text-primary transition-colors duration-300">Add a new invoice product</span>
				</div>

				<!-- subtotal -->
				<div class="h-[42px] flex items-center justify-between px-6 bg-light_gray font-medium text-sm mb-8">
					<span>Subtotal</span>
					<span>-N0.00</span>
				</div>
				<!-- subtotal ends here -->

				<!-- discount table -->
				<div class="border border-dark_gray w-full px-6 py-5 rounded-md mb-6">
					<table class="w-full">
						<tbody class="">
							<tr
								class="h-[65px]"
							>
								<td
									class="pr-10 w-[35%]"
								>
									<div class="w-full max-w-[300px] h-10 px-[14px] bg-light_gray rounded-md flex items-center font-medium text-sm">
										Discount
									</div>
								</td>
								<td
									class="pr-10 w-[35%]"
								>
									<CustomSelect label="" default-option="Percentage discount" hidden :options="['Percentage discount']" class="h-10 text-sm" />
								</td>
								<td
									class="pr-10 w-[10%]"
								>
									<CustomInput placeholder="" class="h-10 placeholder:text-xs text-sm" />
								</td>
								<td
									class="pr-10 w-[10%]"
								/>
								<td
									class="pr-2 text-center w-[10%]"
								>
									<span class="text-sm font-medium">N256,000.00</span>
								</td>
							</tr>
							<tr
								class="h-[65px]"
							>
								<td
									class="pr-10"
								>
									<div class="w-full max-w-[300px] h-10 px-[14px] bg-light_gray rounded-md flex items-center font-medium text-sm">
										Value added Tax
									</div>
								</td>
								<td
									class="pr-10"
								/>
								<td
									class="pr-10"
								>
									<CustomInput placeholder="" class="h-10 placeholder:text-xs text-sm" />
								</td>
								<td
									class="pr-10 w-[10%]"
								/>
								<td
									class="pr-2 text-center w-[10%]"
								>
									<span class="text-sm font-medium">N0.00</span>
								</td>
							</tr>
							<tr
								class="h-[65px]"
							>
								<td
									class="pr-10"
								>
									<div class="w-full max-w-[300px] h-10 px-[14px] bg-light_gray rounded-md flex items-center font-medium text-sm">
										Total Amount
									</div>
								</td>
								<td
									class="pr-10"
								/>
								<td
									class="pr-10"
								/>
								<td
									class="pr-10 w-[10%]"
								/>
								<td
									class="pr-2 text-center w-[10%]"
								>
									<span class="text-sm font-medium">N0.00</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- discount table ends here -->

				<!-- send invoices here -->
				<div class="border border-dark_gray w-full px-6 pt-5 pb-10 mb-[70px] rounded-md">
					<h2 class="text-base font-medium text-dark mb-2">
						Send invoices in instalments
					</h2>
					<p class="font-normal text-xs text-dark mb-2">
						How many instalments will this invoice be paid?
					</p>
					<table class="min-w-full text-left relative">
						<thead class="">
							<tr>
								<th
									scope="col"
									class="font-medium text-sm text-dark py-3 pr-10 w-[20%]"
								>
									Instalment no.
								</th>
								<th
									scope="col"
									class="font-medium text-sm text-dark py-3 pr-10 w-1/4"
								>
									Invoice Date
								</th>
								<th
									scope="col"
									class="font-medium text-sm text-dark py-3 pr-10 w-1/4"
								>
									Due Date
								</th>
								<th
									scope="col"
									class="font-medium text-sm text-dark py-3 w-[10%]"
								>
									Percentage Split
								</th>
								<th
									scope="col"
									class="font-medium text-sm text-dark py-3 pr-10 w-[10%]"
								/>
								<th
									scope="col"
									class="font-medium text-sm text-dark py-3 pr-2 w-[10%] text-center"
								>
									Amount
								</th>
							</tr>
						</thead>
						<tbody class=" border-l-2 border-light_gray">
							<tr
								class="h-14 "
							>
								<td
									class="pr-10 relative"
								>
									<span class="absolute top-0 left-[-11px] z-10 rounded-full text-xs font-medium bg-gray-100 p-1 w-5 h-5 text-cemter flex items-center justify-center">1</span>
									<!-- <CustomInput placeholder="Enter product name" class="h-10 placeholder:text-xs text-sm" /> -->
								</td>
								<td
									class="pr-10"
								>
									<CustomInput type="date" class="h-10 placeholder:text-xs text-sm" />
								</td>
								<td
									class="pr-10"
								>
									<CustomInput type="date" class="h-10 placeholder:text-xs text-sm" />
								</td>
								<td
									class="pr-10"
								>
									<CustomInput class="h-10 placeholder:text-xs text-sm" />
								</td>
								<td
									class="pr-10"
								/>
								<td
									class="pr-2 text-center text-sm"
								>
									-N0.00
								</td>
							</tr>
							<tr
								class="h-14 "
							>
								<td
									class="pr-10 relative"
								>
									<span class="absolute top-0 left-[-11px] z-10 rounded-full text-xs font-medium bg-gray-100 p-1 w-5 h-5 text-cemter flex items-center justify-center">2</span>
									<!-- <CustomInput placeholder="Enter product name" class="h-10 placeholder:text-xs text-sm" /> -->
								</td>
								<td
									class="pr-10"
								>
									<CustomInput type="date" class="h-10 placeholder:text-xs text-sm" />
								</td>
								<td
									class="pr-10"
								>
									<CustomInput type="date" class="h-10 placeholder:text-xs text-sm" />
								</td>
								<td
									class="pr-10"
								>
									<CustomInput class="h-10 placeholder:text-xs text-sm" />
								</td>
								<td
									class="pr-10"
								/>
								<td
									class="pr-2 text-center text-sm"
								>
									N0.00
								</td>
							</tr>
						</tbody>
						<div class="flex items-center justify-center absolute left-[-10px] cursor-pointer bg-dark w-5 h-5 text-center rounded-full  text-white hover:scale-110 transition-transform duration-300">
							+
						</div>
					</table>
				</div>
				<!-- send invoices  ends here -->

				<!-- save buttons here -->
				<div class="w-full flex items-center justify-end gap-x-4">
					<CustomButton label="Save and new" theme="outline" class="py-2 px-7 rounded-full text-primary h-[44px] font-medium text-sm w-fit whitespace-nowrap" />
					<CustomButton label="Save and close" theme="submit" class="py-2.5 px-7 rounded-full h-[44px] text-white font-medium text-sm w-fit whitespace-nowrap" />
				</div>
				<!-- save buttons ends here -->
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>

<style lang="scss" scoped>

</style>
