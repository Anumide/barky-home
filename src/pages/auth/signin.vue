<template>
	<div>
		<NuxtLayout name="auth">
			<template #route-link>
				<NuxtLink to="/auth/signup" class="underline cursor-pointer underline-offset-2">
					Create account
				</NuxtLink>
			</template>
			<section
				class="flex items-center justify-center w-full h-full mx-auto overflow-x-hidden"
			>
				<form class="w-[515px]">
					<p class="mb-[30px] text-[28px] font-medium">
						Welcome back
					</p>
					<div class="w-full space-y-[30px]">
						<!-- email address -->
						<AuthInput
							title="Email Address/Phone Number"
							type="text"
							placeholder=""
							error-message="this is a required field"
						/>
						<!-- password -->
						<AuthInput
							title="Password"
							type="password"
							placeholder="Password (min of 8 characters)"
							error-message="this is a required field"
						>
							<template #icon>
								<icon name="eye" class="w-[19px]" @click="hide" />
							</template>
						</AuthInput>
						<!-- submit button -->
						<AuthButton label="Sign in" theme="submit" @click="test" />
						<p class="text-base text-center w-full">
							Forgot your password?
							<NuxtLink to="/auth/forgot-password" class="cursor-pointer text-[#3488ED]">
								Reset it here
							</NuxtLink>
						</p>
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
