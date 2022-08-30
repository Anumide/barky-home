<template>
	<div class="mt-4 mx-auto mb-12 pb-[80px] rounded-md ring-gray-300 bg-white ring-1 w-[950px] max-w-[950px] h-[678px] flex flex-col relative max-h-[678px] px-[60px]">
		<div class="flex items-center justify-between border-b mb-8 py-4">
			<span class="text-[18px] leading-[16px]">Upload CSV</span>
			<div class="rounded-full cursor-pointer p-1 flex items-center justify-center bg-primary_light w-[30px] h-[30px] text-primary" @click="$emit('closeModal')">
				<icon name="close" class="w-5 h-5" />
			</div>
		</div>
		<!-- actual dropzone here -->
		<div
			class="border border-dark_gray rounded-md border-dashed flex flex-col transition-colors duration-200 items-center justify-center h-full mb-8"
			:class="{'bg-card_blue': dropZoneActive}"
			@dragenter.prevent="toggleActive"
			@dragleave.prevent="toggleActive"
			@dragover.prevent
			@drop.prevent="handleDrop($event)"
		>
			<label for="csv_file_input" class="cursor-pointer"><icon name="addDocument" class="w-14 h-16" /></label>

			<label for="csv_file_input" class="text-sm font-medium cursor-pointer mt-4">
				Select a CSV file to upload
			</label>
			<p class="text-xs text-gray-400">
				or drag and drop it here
			</p>
			<input id="csv_file_input" ref="inputFileRef" class="hidden" type="file" @change="handleFileInput">
		</div>
		<!-- actual dropzone ends here -->
		<div
			class="flex flex-col"
		>
			<label for="csv_file_input" class="font-medium w-fit text-base text-dark mb-4 cursor-pointer">
				Select a CSV or Excel file to upload
			</label>
			<div class="w-full h-full flex gap-x-4 mb-3">
				<CustomInput v-model="droppedFile.name" class="flex-1" type="text" />
				<CustomButton class="w-[115px] h-[48px] py-[14px]" label="Upload" theme="submit" />
			</div>
			<span class="text-xs cursor-pointer font-medium text-card_blue w-fit">
				Download a sample file
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">

defineEmits(['closeModal'])

const inputFileRef = ref(null)

const droppedFile = ref('')
const dropZoneActive = ref(false)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toggleActive = () => {
	dropZoneActive.value = !dropZoneActive.value
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
</script>

<style lang="scss" scoped>

</style>
