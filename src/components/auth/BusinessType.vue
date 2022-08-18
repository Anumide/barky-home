<template>
	<div
		class="flex h-full text-dark w-full max-w-[640px] md:w-[640px] items-center justify-center lg:pt-[0] pb-[130px]"
	>
		<form class="w-full px-2">
			<p class="mb-[60px] text-[28px] font-medium">
				Hey Bayo, tell us more about your business
			</p>
			<p class="mb-[15px] text-base font-medium">
				What type of business do you run?
			</p>
			<div class="mb-[40px] grid grid-cols-2 gap-x-[20px] gap-y-[30px]">
				<!-- Sole Proprietorship -->
				<div class="relative">
					<input
						id="one"
						v-model="radio"
						type="radio"
						name="business"
						value="Sole Proprietorship"
						class="hidden peer"
					>
					<label
						for="one"
						class="flex cursor-pointer w-full items-center justify-center rounded-md bg-transparent py-[23px] text-[14px] font-medium ring-1 ring-black/[0.12] peer-checked:bg-primary_light peer-checked:ring-primary"
					>Sole Proprietorship</label>
				</div>
				<!-- Partnership -->
				<div class="relative">
					<input
						id="two"
						v-model="radio"
						type="radio"
						name="business"
						value="Partnership"
						class="hidden peer"
					>
					<label
						for="two"
						class="flex cursor-pointer w-full items-center justify-center rounded-md bg-transparent py-[23px] text-[14px] font-medium ring-1 ring-black/[0.12] peer-checked:bg-primary_light peer-checked:ring-primary"
					>Partnership</label>
				</div>
				<!-- Limited Liability -->
				<div class="relative">
					<input
						id="three"
						v-model="radio"
						type="radio"
						name="business"
						value="Limited Liability"
						class="hidden peer"
					>
					<label
						for="three"
						class="flex cursor-pointer w-full items-center justify-center rounded-md bg-transparent py-[23px] text-[14px] font-medium ring-1 ring-black/[0.12] peer-checked:bg-primary_light peer-checked:ring-primary"
					>Limited Liability</label>
				</div>
				<!-- Public Limited Liability -->
				<div class="relative">
					<input
						id="four"
						v-model="radio"
						type="radio"
						name="business"
						value="Public Limited Liability"
						class="hidden peer"
					>
					<label
						for="four"
						class="flex cursor-pointer w-full items-center justify-center rounded-md bg-transparent py-[23px] text-[14px] font-medium ring-1 ring-black/[0.12] peer-checked:bg-primary_light peer-checked:ring-primary"
					>Public Limited Liability</label>
				</div>
			</div>
			<!-- select options -->
			<CustomSelect label="Select Industry" default-option="Select Industry" :options="[1, 2, 3]" />
			<!-- submit button and switch component -->
			<div class="grid w-full grid-cols-2 gap-x-5 mt-[50px]">
				<CustomButton theme="outline" label="Previous" @click="$emit('componentIsCompanyInfo')" />
				<CustomButton theme="submit" label="Submit" />
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
defineEmits(['componentIsCompanyInfo'])
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio = ref('Sole Proprietorship')
</script>
