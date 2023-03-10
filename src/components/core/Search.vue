<template>
	<div class="my-8">
		<form class="w-1/2 min-w-fit mx-auto flex items-center gap-4 justify-center">
			<input
				v-model="placeSearch"
				type="text"
				placeholder="Price"
				class="w-20 bg-[#F3EFEF] rounded shadow-sm px-2 py-3 placeholder:font-medium font-normal text-xs placeholder:text-xs placeholder:text-[rgba(74, 64, 185, 0.4)] focus:outline-none focus:ring-primary focus:ring-1"
			>
			<div class="p-2 shadow-sm bg-[#F3EFEF] rounded focus:outline-primary">
				<input
					v-model="addressSearch"
					type="text"
					placeholder="State, City, Address"
					class="bg-transparent pr-1 placeholder:font-medium font-normal text-xs placeholder:text-xs placeholder:text-[rgba(74, 64, 185, 0.4)] focus:outline-none"
				>
				<Icon name="ic:sharp-location-on" size="25px" class="text-primary_dark pl-1 text-lg border-l border-solid border-border_color" />
			</div>
			<CustomButton text="Save" class="bg-primary shadow-sm text-white py-3 px-6 font-semibold hover:bg-[#4A40B9]" @click="clickSubmit" />
		</form>
	</div>
</template>
<script setup lang="ts">
const addressSearch = ref('')
const placeSearch = ref('')

const clickSubmit = () => {
    console.log(addressSearch.value)
}
</script>
