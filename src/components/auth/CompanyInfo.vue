<template>
	<form class="w-full max-w-[640px] px-2 md:w-[640px] pt-[15px] lg:pt-[0] pb-[130px]">
		<p class="mb-[30px] text-[28px] font-medium">
			Set up your business account
		</p>
		<div class="w-full space-y-[30px]">
			<!-- company name -->
			<AuthInput
				title="Company Name"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- trading name -->
			<AuthInput
				title="Trading Name"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- email address -->
			<AuthInput
				title="Email Address"
				type="email"
				placeholder="E.g: hello@gmail.com"
				error-message="this is a required field"
			/>
			<!-- phone number -->
			<AuthInput
				title="Phone"
				type="text"
				placeholder="E.g +2348123456789"
				error-message="this is a required field"
			/>
			<!-- website -->
			<AuthInput
				title="Website"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- Address -->
			<AuthInput
				title="Address"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- Contact Name -->
			<AuthInput
				title="Contact Name"
				type="text"
				placeholder=""
				error-message="this is a required field"
			/>
			<!-- tax number and currencies-->
			<div class="grid w-full md:grid-cols-2 gap-y-[30px] gap-x-[15px]">
				<AuthInput
					title="Tax Identification Number"
					type="text"
					placeholder=""
					error-message="this is a required field"
				/>
				<AuthSelect label="Select Industry" :options="[1,2,3]" />
			</div>
			<!-- financial year start and end-->
			<div class="grid w-full md:grid-cols-2 gap-y-[30px] gap-x-[15px]">
				<AuthInput
					title="Financial Year Start"
					type="text"
					placeholder=""
					error-message="this is a required field"
				/>
				<AuthInput
					title="Financial Year End"
					type="text"
					placeholder=""
					error-message="this is a required field"
				/>
			</div>
			<!-- submit button -->
			<AuthButton label="Continue" theme="submit" @click="$emit('componentIsBusinessType')" />
		</div>
	</form>
</template>

<script setup lang="ts">
defineEmits(['componentIsBusinessType'])
</script>
