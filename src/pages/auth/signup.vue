<template>
	<div>
		<NuxtLayout name="auth">
			<template #route-link>
				<NuxtLink to="/auth/signin" class="underline cursor-pointer underline-offset-2">
					Login
				</NuxtLink>
			</template>
			<section
				class="mx-auto flex w-full items-center justify-center overflow-x-hidden pt-20 pb-[130px]"
			>
				<form class="w-[515px] px-2">
					<p class="mb-[30px] text-[28px] font-medium">
						Get started
					</p>
					<div class="w-full space-y-[30px]">
						<!-- first and last name -->
						<div class="grid w-full sm:grid-cols-2 gap-y-[30px] gap-x-[15px]">
							<AuthInput
								title="First name"
								type="text"
								placeholder="E.g: John"
								error-message="this is a required field"
							/>
							<AuthInput
								title="Last name"
								type="text"
								placeholder="E.g: Chukwudi"
								error-message="this is a required field"
							/>
						</div>
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
						<!-- password -->
						<AuthInput
							title="Password"
							type="password"
							placeholder="Password (min of 8 characters)"
						>
							<template #icon>
								<icon name="eye" class="w-[19px]" @click="hide" />
							</template>
						</AuthInput>
						<!-- confirm password -->
						<AuthInput
							title="Confirm password"
							type="password"
							placeholder="Password (min of 8 characters)"
							error-message="this is a required field"
						>
							<template #icon>
								<icon name="eye" class="w-[19px]" @click="hide" />
							</template>
						</AuthInput>
						<!-- consent/agreement -->
						<div class="flex items-center space-x-2">
							<input type="checkbox">
							<span class="text-xs">I have read, understood and I agree to Traq’s
								<NuxtLink class="cursor-pointer text-[#3488ED]">Privacy Policy</NuxtLink>, and
								<NuxtLink class="cursor-pointer text-[#3488ED] underline">Terms and Conditions</NuxtLink></span>
						</div>
						<!-- submit button -->
						<AuthButton label="Create Account" theme="submit" @click="test" />
					</div>
				</form>
			</section>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const test = () => {
  alert('hello there')
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hide = () => {
  alert('toggle password visibility')
}
</script>

<style scoped></style>
