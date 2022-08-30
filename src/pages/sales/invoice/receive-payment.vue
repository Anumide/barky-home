<template>
	<div class="w-full">
		<div class="flex items-center mb-10">
			<NuxtLink to="/sales/invoice" class="rounded-full bg-light_gray p-3 cursor-pointer mr-6">
				<icon name="arrowBack" fill="none" class="w-6 h-6" />
			</NuxtLink>
			<div class="text-dark font-medium text-2xl leading-6">
				Receive Payment
			</div>
		</div>
		<div class="w-full h-full flex flex-col pb-[100px]">
			<div class="flex items-center justify-between w-full mb-10">
				<div class="flex w-full gap-x-10">
					<div class="flex flex-col gap-y-3 w-[40%] max-w-[380px]">
						<span class="text-sm font-medium">Choose customer</span>
						<CustomSelect label="" :options="['Bayo Adenekan']" default-option="select customer" class="text-sm h-10" />
					</div>
					<div class="flex flex-col gap-y-3 w-[40%] max-w-[380px]">
						<span class="text-sm font-medium">Payment Date</span>
						<CustomInput type="date" placeholder="" class="h-10 placeholder:text-xs text-sm" />
					</div>
				</div>
				<div class="flex items-center flex-col gap-y-3">
					<span class="text-lg whitespace-nowrap">Amount Received</span>
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
							Ref No.
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-fit"
						>
							Deposit to
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 min-w-[10%] w-fit"
						>
							Bank Balance
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[10%] text-center"
						>
							Amount Received
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
							<CustomSelect label="" :options="['Cash','Transfer']" default-option="select method" class="text-sm h-10" />
						</td>
						<td
							class="pr-10"
						>
							<CustomInput v-model="product.description" placeholder="0994889940" class="h-10 placeholder:text-xs text-sm" />
						</td>
						<td
							class="pr-10"
						>
							<CustomSelect label="" :options="['Guaranty Trust Bank']" default-option="select bank" class="text-sm h-10" />
						</td>
						<td
							class="pr-10"
						>
							N0.00
							<!-- <span class="text-sm font-medium">N{{ product.amount = product.price * product.qty }}.00</span> -->
						</td>
						<td
							class="pr-2 text-center"
						>
							<CustomInput v-model="product.description" placeholder="" class="h-10 placeholder:text-xs text-sm" />
						</td>
					</tr>
				</tbody>
			</table>
			<!-- empty line -->
			<div class="h-1 w-full bg-light_gray mb-10" />

			<div class="flex flex-col gap-y-3 w-[40%] max-w-[380px] mb-10">
				<span class="text-sm font-medium">Outstanding Transactions</span>
				<CustomInput type="text" placeholder="Find invoice no." class="h-10 placeholder:text-xs text-sm" />
			</div>

			<table class="min-w-full text-center mb-24">
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
							Description
						</th>
						<th
							scope="col"
							class="font-semibold text-sm text-dark py-6 px-4"
						>
							Due Date
						</th>
						<th
							scope="col"
							class="font-semibold text-sm text-dark py-6 px-4"
						>
							Original Amount
						</th>
						<th
							scope="col"
							class="font-semibold text-sm text-dark py-6 px-4"
						>
							Open Balance
						</th>
						<th
							scope="col"
							class="font-semibold text-sm text-dark py-6 px-4 w-[20%]"
						>
							Payment
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
							Invoice no.LIL/0622/008_2
						</td>
						<td
							class="text-xs text-dark px-4"
						>
							28/06/2022
						</td>
						<td
							class="text-xs text-dark px-4"
						>
							48,857,00
						</td>
						<td
							class="text-xs text-dark px-4"
						>
							48,857,00
						</td>
						<td
							class="text-xs text-dark px-4"
						>
							<CustomInput placeholder="" class="h-10 placeholder:text-xs text-sm" />
						</td>
					</tr>
				</tbody>
			</table>

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
		name: '',
		description: '',
		qty: 0,
		price: 0,
		amount: 0
	}])

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const addNewProduct = () => {
		productList.value.push({
			name: '',
			description: '',
			qty: 0,
			price: 0,
			amount: 0
		})
	}

</script>

<style lang="scss" scoped>

</style>
