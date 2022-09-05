<template>
	<div class="full">
		<div class="flex items-center mb-10">
			<NuxtLink to="/sales/products" class="rounded-full bg-light_gray p-3 cursor-pointer mr-6">
				<icon name="arrowBack" fill="none" class="w-6 h-6" />
			</NuxtLink>
			<div class="text-dark font-medium text-2xl leading-6">
				Stock Transfer
			</div>
		</div>
		<div>
			<div class="flex gap-x-48 mb-4">
				<div class="flex flex-col gap-y-3 w-full">
					<span class="text-sm font-medium">Source Store </span>
					<CustomSelect label="" :options="['Adebayo Adenekan']" default-option="Select customer" class="text-sm h-10" />
				</div>
				<div class="flex flex-col gap-y-3 w-full">
					<span class="text-sm font-medium">Destination Store </span>
					<CustomSelect label="" :options="['Adebayo Adenekan']" default-option="Select customer" class="text-sm h-10" />
				</div>
				<!-- <CustomInput type="date" title="Expiration Date" class="w-3/4 h-10 placeholder:text-xs text-sm" /> -->
			</div>
		</div>
		<div class="border-b border-solid border-neutral-200">
			<table class="min-w-full text-left mb-3">
				<thead class="bg-light_gray h-[50px]">
					<tr class="">
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[28%]"
						>
							Item
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[28%]"
						>
							Receiving Person
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[11%]"
						>
							Transfer Method
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[11%]"
						>
							Quantity
						</th>
						<th
							scope="col"
							class="font-medium text-sm text-dark py-3 px-2 w-[10%]"
						>
							Price
						</th>
					</tr>
				</thead>
				<tbody class="">
					<tr
						v-for="(stock, index) in stockList"
						:key="index"
						class="h-[65px]"
					>
						<td
							class="pr-6"
						>
							<CustomInput v-model="stock.name" placeholder="Enter product name" class="h-10 placeholder:text-xs text-sm" />
						</td>
						<td
							class="pr-6"
						>
							<CustomSelect label="" default-option="Select" hidden :options="['Adebayo Adenekan']" class="h-10 text-sm min-w-fit" />
						</td>
						<td
							class="pr-6"
						>
							<CustomSelect label="" default-option="Select" hidden :options="[1, 2, 3]" class="h-10 text-sm min-w-fit" />
						</td>
						<td
							class="pr-6"
						>
							<CustomInput placeholder="N0.00" class="h-10 placeholder:text-xs text-sm min-w-fit" />
						</td>
						<td
							class="pr-2"
						>
							<CustomInput placeholder="N0.00" class="h-10 placeholder:text-xs text-sm min-w-fit" />
						</td>
					</tr>
				</tbody>
			</table>
			<div class="flex items-center space-x-2 px-2 cursor-pointer w-fit mb-8" @click="addNewProduct">
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.5 9H13.5" stroke="#536DFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M9 13.5V4.5" stroke="#536DFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<span class="inline-block text-card_blue text-sm font-medium hover:text-primary transition-colors duration-300">Add item</span>
			</div>
		</div>
		<div class="flex flex-col gap-y-3 w-96 my-4">
			<span class="text-base font-medium">Notes</span>
			<CustomTextarea label="" placeholder="Write something..." default-option="Select customer" class="text-sm" />
		</div>
		<div class="flex justify-between items-center mt-16">
			<CustomButton class="w-36 px-20 transition rounded-full text-red-600 ring-red-600 hover:text-white hover:bg-red-600" label="Cancel and Delete" theme="outline" @click="test" />
			<div class="flex gap-x-4">
				<CustomButton class="w-36 transition rounded-full text-primary hover:text-white hover:bg-primary" label="Save and New" theme="outline" @click="test" />
				<CustomButton class="w-36 transition rounded-full hover:ring-primary hover:ring-2 hover:ring-offset-2" label="Save and Close" theme="submit" @click="test" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const stockList = ref([{
		name: ''
	}])

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const addNewProduct = () => {
		stockList.value.push({
			name: ''
		})
	}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	const test = () => {
		alert('button has been clicked!')
	}

</script>
