<template>
	<form
		class="w-full max-w-[640px] px-2 md:w-[640px] pt-[15px] lg:pt-[0] pb-[130px]"
	>
		<p class="mb-[30px] text-[28px] font-medium text-dark">
			Set up your business account
		</p>
		<div class="w-full space-y-[30px]">
			<!-- company name -->
			<CustomInput
				title="Company Name"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- trading name -->
			<CustomInput
				title="Trading Name"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- email address -->
			<CustomInput
				title="Email Address"
				type="email"
				placeholder="E.g: hello@gmail.com"
				error-message="this is a required field"
			/>
			<!-- phone number -->
			<CustomInput
				title="Phone"
				type="text"
				placeholder="E.g +2348123456789"
				error-message="this is a required field"
			/>
			<!-- website -->
			<CustomInput
				title="Website"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- Address -->
			<CustomInput
				title="Address"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- Contact Name -->
			<CustomInput
				title="Contact Name"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- tax number and currencies-->
			<div class="grid w-full md:grid-cols-2 gap-y-[30px] gap-x-[15px]">
				<CustomInput
					title="Tax Identification Number"
					type="text"
					placeholder=""
					error-message="this is a required field"
				/>
				<CustomSelect label="Currencies" default-option="Select Currency" :options="[1, 2, 3]" />
			</div>
			<!-- financial year start and end-->
			<div class="grid w-full md:grid-cols-2 gap-y-[30px] gap-x-[15px]">
				<CustomInput
					title="Financial Year Start"
					type="text"
					placeholder=""
					error-message="this is a required field"
				/>
				<CustomInput
					title="Financial Year End"
					type="text"
					placeholder=""
					error-message="this is a required field"
				/>
			</div>
			<!-- submit button -->
			<CustomButton
				label="Continue"
				theme="submit"
				@click="$emit('componentIsBusinessType')"
			/>
		</div>
	</form>
</template>

<script setup lang="ts">
defineEmits(['componentIsBusinessType'])
</script>
