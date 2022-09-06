<template>
	<div class="w-full pb-24">
		<div class="flex items-center mb-10">
			<NuxtLink to="/sales/customers" class="rounded-full bg-light_gray p-3 cursor-pointer mr-6">
				<icon name="arrowBack" fill="none" class="w-6 h-6" />
			</NuxtLink>
			<div class="text-dark font-medium text-2xl leading-6">
				New Customer
			</div>
		</div>
		<form class="w-[649px] mx-auto mb-24">
			<p class="mb-[30px] text-xl font-medium text-dark">
				Create New Customer
			</p>
			<div class="w-full space-y-[30px]">
				<!-- first and last name -->
				<div class="grid w-full sm:grid-cols-2 gap-y-[30px] gap-x-[15px]">
					<CustomInput
						title="Company Name"
						type="text"
						placeholder="Eg; Eko Hotel and Suites"
						error-message=""
					/>
					<CustomInput
						title="Invoice Initials"
						type="text"
						placeholder="INV30212"
						error-message=""
					/>
				</div>
				<div class="grid w-full sm:grid-cols-2 gap-y-[30px] gap-x-[15px]">
					<CustomInput
						title="Full Name"
						type="text"
						placeholder="Eg; Femi Emeka"
						error-message=""
					/>
					<CustomInput
						title="Contact"
						type="text"
						placeholder="+23412345678"
						error-message=""
					/>
				</div>
				<!-- email address -->
				<CustomInput
					title="Email Address(s)"
					type="email"
					placeholder="Eg; example@mail.com, help@mail.com "
					error-message=""
				/>
				<div class="flex items-center gap-x-4 font-medium  text-sm">
					<span class="text-dark">Is billing address same as office address? </span>
					<span class="flex items-center gap-x-2"><input id="same-address" type="radio" name="fav_language" value="HTML">
						<label for="same-address">Yes</label></span>
					<span class="flex items-center gap-x-2"><input id="not-same-address" type="radio" name="fav_language" value="HTML">
						<label for="not-same-address">No</label></span>
				</div>
				<div class="grid w-full sm:grid-cols-2 gap-y-[30px] gap-x-[15px]">
					<CustomInput
						title="Office Address"
						type="text"
						placeholder="Enter office address"
						error-message=""
					/>
					<CustomInput
						title="Billing Address"
						type="text"
						placeholder="Enter billing address"
						error-message=""
					/>
				</div>
				<!-- sub company-->
				<CustomSelect label="Sub Company" default-option="Enter sub company" :options="[1, 2, 3]" />

				<!-- customer Industry / Currency -->
				<div class="grid w-full sm:grid-cols-2 gap-y-[30px] gap-x-[15px]">
					<CustomSelect label="Customer Industry" default-option="select industry" :options="[1, 2, 3]" />
					<CustomSelect label="Currency" default-option="select currency" :options="['Naira', 2, 3]" />
				</div>
				<!-- submit button -->
			</div>
		</form>
		<!-- save buttons here -->
		<div class="w-full flex items-center justify-end gap-x-4">
			<CustomButton label="Save and new" theme="outline" class="py-2 px-7 rounded-full text-primary h-[44px] font-medium text-sm w-fit whitespace-nowrap" />
			<CustomButton label="Save and close" theme="submit" class="py-2.5 px-7 rounded-full h-[44px] text-white font-medium text-sm w-fit whitespace-nowrap" @click="$router.push('/sales/customers/edit-customer')" />
		</div>
		<!-- save buttons ends here -->
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>
