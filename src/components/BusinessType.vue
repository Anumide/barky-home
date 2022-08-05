<template>
	<div class="flex h-full w-full max-w-[640px] md:w-[640px] items-center justify-center lg:pt-[0] pb-[130px]">
		<form class="w-full px-2">
			<p class="mb-[60px] text-[28px] font-[500]">
				Hey Bayo, tell us more about your business
			</p>
			<p class="mb-[15px] text-[16px] font-[500]">
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
						class="peer hidden"
					>
					<label
						for="one"
						class="flex cursor-pointer w-full items-center justify-center rounded-[6px] bg-transparent py-[23px] text-[14px] font-[500] ring-1 ring-black/[0.12] peer-checked:bg-[#536DFE]/[14%] peer-checked:ring-[#536DFE]"
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
						class="peer hidden"
					>
					<label
						for="two"
						class="flex cursor-pointer w-full items-center justify-center rounded-[6px] bg-transparent py-[23px] text-[14px] font-[500] ring-1 ring-black/[0.12] peer-checked:bg-[#536DFE]/[14%] peer-checked:ring-[#536DFE]"
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
						class="peer hidden"
					>
					<label
						for="three"
						class="flex cursor-pointer w-full items-center justify-center rounded-[6px] bg-transparent py-[23px] text-[14px] font-[500] ring-1 ring-black/[0.12] peer-checked:bg-[#536DFE]/[14%] peer-checked:ring-[#536DFE]"
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
						class="peer hidden"
					>
					<label
						for="four"
						class="flex cursor-pointer w-full items-center justify-center rounded-[6px] bg-transparent py-[23px] text-[14px] font-[500] ring-1 ring-black/[0.12] peer-checked:bg-[#536DFE]/[14%] peer-checked:ring-[#536DFE]"
					>Public Limited Liability</label>
				</div>
			</div>
			<!-- select options -->
			<AuthSelect label="Select Industry" :options="[1,2,3]" />
			<!-- submit button and switch component -->
			<div class="grid w-full grid-cols-2 gap-x-[20px] mt-[50px]">
				<button
					class="w-full cursor-pointer rounded-[6px] ring-[#3F51B5] ring-1 h-[48px] py-2 text-[16px]"
				>
					Previous
				</button>
				<AuthButton theme="submit" label="Submit" />
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio = ref('Sole Proprietorship')
</script>
