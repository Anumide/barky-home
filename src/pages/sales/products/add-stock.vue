<template>
	<div class="w-full">
		<div class="flex items-center mb-10">
			<NuxtLink to="/sales/products" class="rounded-full bg-light_gray p-3 cursor-pointer mr-6">
				<icon name="arrowBack" fill="none" class="w-6 h-6" />
			</NuxtLink>
			<div class="text-dark font-medium text-2xl leading-6">
				Add Stock
			</div>
		</div>
		<div class="w-[30rem] ml-64 mr-auto">
			<p class="text-xl font-medium">
				Add Stock or Good Inflow
			</p>
			<div class="my-10">
				<CustomSelect label="Select Item" default-option="Select" hidden :options="[1, 2, 3]" class="text-sm w-full min-w-fit" />
				<div class="flex justify-between items-center gap-4 my-4">
					<CustomSelect label="Quantity" default-option="Select" hidden :options="[1, 2, 3]" class="text-sm min-w-fit" />
					<CustomInput
						title="Price"
						type="text"
						placeholder="NGN0.00"
						error-message=""
					/>
				</div>
				<div class="flex justify-between items-center gap-4 mt-4 mb-6">
					<CustomInput type="date" title="Date" class="placeholder:text-xs text-sm" />
					<CustomInput type="date" title="Expiration Date" class="placeholder:text-xs text-sm" />
				</div>
				<CustomButton class="hover:bg-card_blue transition" label="Add Stock" theme="submit" @click="test" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const test = () => {
		alert('button has been clicked!')
	}
</script>
