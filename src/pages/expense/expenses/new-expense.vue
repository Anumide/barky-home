<template>
	<div class="w-full">
		<div class="flex items-center mb-10">
			<NuxtLink to="/expense/expenses" class="rounded-full bg-light_gray p-3 cursor-pointer mr-6">
				<icon name="arrowBack" fill="none" class="w-6 h-6" />
			</NuxtLink>
			<div class="text-dark font-medium text-2xl leading-6">
				New Expense
			</div>
		</div>
		<div class="w-full h-full flex flex-col pb-[100px]">
			<div class="flex items-center justify-between w-full mb-10">
				<div class="flex w-full gap-x-10">
					<div class="flex flex-col gap-y-3 w-[40%] max-w-[380px]">
						<span class="text-sm font-medium">Payee</span>
						<CustomSelect label="" :options="['Bayo Adenekan']" default-option="select payee" class="text-sm h-10 bg-white" />
					</div>
					<div class="flex flex-col gap-y-3 w-[40%] max-w-[380px]">
						<span class="text-sm font-medium">Date</span>
						<CustomInput type="date" placeholder="" class="h-10 placeholder:text-xs text-sm bg-white" />
					</div>
				</div>
				<div class="flex items-center flex-col gap-y-3">
					<span class="text-lg whitespace-nowrap">Total Amount</span>
					<span class="font-bold text-2xl leading-6">N600,000</span>
				</div>
			</div>
			<table class="min-w-full text-left mb-10">
				<thead class="bg-light_gray h-[50px]">
					<tr class="">
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[20%]"
						>
							Payment Method
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[20%]"
						>
							Reference no.
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[30%]"
						>
							Payment from
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[15%]"
						>
							Bank Balance
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[15%] text-center"
						/>
					</tr>
				</thead>
				<tbody class="">
					<tr
						class="h-[65px]"
					>
						<td
							class="pr-10"
						>
							<CustomSelect default-option="Select" :options="['Cash']" class="h-10 placeholder:text-xs text-sm bg-white" />
						</td>
						<td
							class="pr-10"
						>
							<CustomInput placeholder="" class="h-10 placeholder:text-xs text-sm bg-white" />
						</td>
						<td
							class="pr-10"
						>
							<CustomSelect default-option="Select" :options="['Bayo Adenekan']" class="h-10 placeholder:text-xs text-sm bg-white" />
						</td>
						<td
							class="pr-10"
						>
							N0.00
						</td>
						<td
							class="pr-2 text-center"
						/>
					</tr>
				</tbody>
			</table>
			<table class="min-w-full text-left mb-3">
				<thead class="bg-light_gray h-[50px]">
					<tr class="">
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[20%]"
						>
							Expense Account
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[30%]"
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
							class="font-medium text-sm text-dark py-3 px-2 w-[15%]"
						>
							Amount
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[15%]"
						>
							Total Amount
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[10%] text-center"
						>
							Tax
						</th>
					</tr>
				</thead>
				<tbody class="">
					<tr
						v-for="(product, index) in productList"
						:key="index"
						class="h-[65px]"
					>
						<td
							class="pr-10"
						>
							<CustomSelect v-model="product.account" :options="['Bayo Adenekan']" default-option="Select" class="h-10 placeholder:text-xs text-sm bg-white" />
						</td>
						<td
							class="pr-10"
						>
							<CustomInput v-model="product.description" placeholder="Enter description" class="h-10 placeholder:text-xs text-sm bg-white" />
						</td>
						<td
							class="pr-10"
						>
							<CustomInput v-model="product.qty" placeholder="" class="h-10 placeholder:text-xs text-sm bg-white" />
						</td>
						<td
							class="pr-10"
						>
							<CustomInput v-model="product.amount" placeholder="" class="h-10 placeholder:text-xs text-sm bg-white" />
						</td>
						<td
							class="pr-10"
						>
							<span class="text-sm font-medium">N{{ product.total = product.amount * product.qty }}.00</span>
						</td>
						<td
							class="pr-2 text-center"
						>
							<CustomSelect v-model="product.tax" :options="['75%']" default-option="" class="h-10 placeholder:text-xs text-sm bg-white" />
						</td>
					</tr>
				</tbody>
			</table>
			<div class="flex items-center space-x-2 px-2 cursor-pointer w-fit mb-12">
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.5 9H13.5" stroke="#536DFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M9 13.5V4.5" stroke="#536DFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<span class="inline-block text-card_blue text-sm font-medium hover:text-primary transition-colors duration-300" @click="addNewProduct ">Add another line</span>
			</div>

			<!-- discount table -->
			<div class="border border-dark_gray w-full px-6 py-5 rounded-md mb-24 bg-white shadow-md">
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
								<CustomSelect label="" default-option="Percentage discount" hidden :options="['Percentage discount']" class="h-10 text-sm bg-dashboard_background" />
							</td>
							<td
								class="pr-10 w-[10%]"
							>
								<CustomInput placeholder="" class="h-10 placeholder:text-xs text-sm bg-dashboard_background" />
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
								<CustomInput placeholder="" class="h-10 placeholder:text-xs text-sm bg-dashboard_background" />
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

			<!-- save buttons here -->
			<div class="w-full flex items-center justify-end gap-x-4">
				<CustomButton label="Save and new" theme="outline" class="py-2 px-7 rounded-full text-primary h-[44px] font-medium text-sm w-fit whitespace-nowrap" />
				<CustomButton label="Save and close" theme="submit" class="py-2.5 px-7 rounded-full h-[44px] text-white font-medium text-sm w-fit whitespace-nowrap" />
			</div>
			<!-- save buttons ends here -->
		</div>
	</div>
</template>

<script setup lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const productList = ref([{
		account: '',
		description: '',
		qty: 0,
		amount: 0,
		total: 0,
		tax: '75%'
	}])

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const addNewProduct = () => {
		productList.value.push({
			account: '',
			description: '',
			qty: 0,
			amount: 0,
			total: 0,
			tax: '75%'
		})
	}

</script>

<style lang="scss" scoped>

</style>
