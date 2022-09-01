<template>
	<div class="w-full">
		<div class="flex items-center mb-10">
			<NuxtLink to="/sales/products" class="rounded-full bg-light_gray p-3 cursor-pointer mr-6">
				<icon name="arrowBack" fill="none" class="w-6 h-6" />
			</NuxtLink>
			<div class="text-dark font-medium text-2xl leading-6">
				New Product
			</div>
		</div>
		<div class="flex gap-12">
			<div class="flex gap-2 items-center my-2 mb-6">
				<input id="good" type="checkbox" class="w-4 h-4">
				<label for="good" class="text-sm font-medium">Good</label>
			</div>
			<div class="flex gap-2 items-center my-2 mb-6">
				<input id="service" type="checkbox" class="w-4 h-4">
				<label for="service" class="text-sm font-medium">Service</label>
			</div>
		</div>
		<div class="flex gap-x-40 py-6 border-b border-solid border-neutral-200">
			<div class="w-1/3 min-w-fit first:mt-0 last:mb-0">
				<CustomInput type="text" title="Product Name" placeholder="Enter product name" class="placeholder:text-xs text-sm my-2" />
				<CustomInput type="text" title="SKU No." placeholder="Enter SKU No." class="placeholder:text-xs text-sm my-2" />
				<CustomSelect label="Unit Of Measurement" :options="[1, 2, 3]" default-option="Select" class="text-sm my-2" />
			</div>
			<div class="w-[35%] flex justify-center items-center">
				<div
					class="border border-dark_gray rounded-md border-dashed flex flex-col transition-colors duration-200 items-center justify-center h-4/5 w-full"
					:class="{'bg-card_blue': dropZoneActive}"
					@dragenter.prevent="toggleActive"
					@dragleave.prevent="toggleActive"
					@dragover.prevent
					@drop.prevent="handleDrop($event)"
				>
					<label for="csv_file_input" class="cursor-pointer"><icon name="addImage" class="w-14 h-16" /></label>

					<label for="csv_file_input" class="text-sm font-medium cursor-pointer mt-4">
						Select an image to upload
					</label>
					<p class="text-xs text-gray-400">
						or drag and drop it here
					</p>
					<input id="csv_file_input" ref="inputFileRef" class="hidden" type="file" @change="handleFileInput">
				</div>
			</div>
		</div>
		<div class="flex gap-x-40 py-6 border-b border-solid border-neutral-200">
			<!-- sales Information -->
			<div class="w-1/3 min-w-fit first:mt-0 last:mb-0">
				<div class="flex gap-2 items-center my-2 mb-6">
					<input id="salesInfo" type="checkbox" class="w-4 h-4">
					<label for="salesInfo" class="text-sm font-medium">Sales Information</label>
					<icon name="information" class="w-4" />
				</div>
				<CustomInput type="text" title="Selling Price" placeholder="NGN0.00" class="placeholder:text-xs text-sm my-2" />
				<div class="flex flex-col gap-y-3">
					<span class="text-sm font-medium flex items-center gap-1">Account <icon name="information" class="w-4" /></span>
					<CustomSelect label="" :options="[1, 2, 3]" default-option="Select" class="text-sm" />
				</div>
				<CustomTextarea title="Description" placeholder="Enter product description" class="placeholder:text-xs text-sm my-2 mb-12 h-16" />
				<div class="flex flex-col gap-y-3">
					<span class="text-sm font-medium flex items-center gap-1">Select Account <icon name="information" class="w-4" /></span>
					<CustomSelect label="" :options="[1, 2, 3]" default-option="Select" class="text-sm" />
				</div>
			</div>
			<!-- purchase Information -->
			<div class="w-1/3 min-w-fit first:mt-0 last:mb-0">
				<div class="flex gap-2 items-center my-2 mb-6">
					<input id="costInfo" type="checkbox" class="w-4 h-4">
					<label for="costInfo" class="text-sm font-medium">Cost Information</label>
					<icon name="information" class="w-4" />
				</div>
				<CustomInput type="text" title="Selling Price" placeholder="NGN0.00" class="placeholder:text-xs text-sm my-2" />
				<div class="flex flex-col gap-y-3">
					<span class="text-sm font-medium flex items-center gap-1">Account <icon name="information" class="w-4" /></span>
					<CustomSelect label="" :options="[1, 2, 3]" default-option="Select" class="text-sm" />
				</div>
				<CustomTextarea title="Description" placeholder="Enter product description" class="placeholder:text-xs text-sm my-2 mb-16 h-16" />
				<div class="flex flex-col gap-y-3">
					<span class="text-sm font-medium flex items-center gap-1">Select Account <icon name="information" class="w-4" /></span>
					<CustomSelect label="" :options="[1, 2, 3]" default-option="Select" class="text-sm" />
				</div>
			</div>
		</div>
		<div class="py-6">
			<div class="flex gap-6">
				<span class="font-medium leading-8">Track Item</span>
				<div class="flex gap-6">
					<div class="flex gap-2 items-center my-2 mb-6">
						<input id="trackingYes" type="radio" class="w-4 h-4">
						<label for="trackingYes" class="text-sm font-medium">Yes</label>
					</div>
					<div class="flex gap-2 items-center my-2 mb-6">
						<input id="trackingNo" type="radio" class="w-4 h-4">
						<label for="trackingNo" class="text-sm font-medium">No</label>
					</div>
				</div>
			</div>
		</div>
		<div class="w-11/12 flex gap-x-6 mb-4">
			<div class="flex flex-col gap-y-3 w-2/5">
				<span class="text-sm font-medium flex items-center gap-1">Inventory Account <icon name="information" class="w-4" /></span>
				<CustomSelect label="" :options="['Adebayo Adenekan']" default-option="Select customer" class="text-sm h-10" />
			</div>
			<div class="flex flex-col gap-y-3 w-2/5">
				<span class="text-sm font-medium flex items-center gap-1">Vendor <icon name="information" class="w-4" /></span>
				<CustomInput type="text" placeholder="Enter vendor name" class="h-10 placeholder:text-xs text-sm" />
			</div>
			<div class="flex flex-col gap-y-3 w-1/6">
				<span class="text-sm font-medium">Opening Stock</span>
				<CustomInput type="text" placeholder="14" class="h-10 placeholder:text-xs text-sm" />
			</div>
			<div class="flex flex-col gap-y-3 w-1/6">
				<span class="text-sm font-medium">Low Stock</span>
				<CustomInput type="text" placeholder="14" class="h-10 placeholder:text-xs text-sm" />
			</div>
		</div>
		<div class="flex gap-x-4 justify-end mt-20">
			<CustomButton class="w-36 transition rounded-full text-primary hover:text-white hover:bg-primary" label="Save and New" theme="outline" @click="test" />
			<CustomButton class="w-36 transition rounded-full hover:ring-primary hover:ring-2 hover:ring-offset-2" label="Save and Close" theme="submit" @click="test" />
		</div>
	</div>
</template>
<script setup lang="ts">
	const inputFileRef = ref(null)

	const droppedFile = ref('')
	const dropZoneActive = ref(false)

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const toggleActive = () => {
		dropZoneActive.value = !dropZoneActive.value
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
	const handleDrop = (e: any) => {
		droppedFile.value = e.dataTransfer.files[0]
		toggleActive()
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleFileInput = () => {
		if (inputFileRef.value) {
			droppedFile.value = inputFileRef.value.files[0]
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const test = () => {
	alert('button has been clicked!')
}
</script>
