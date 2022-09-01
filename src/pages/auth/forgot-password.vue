<template>
	<div>
		<NuxtLayout name="auth">
			<template #route-link>
				<NuxtLink
					to="/auth/signup"
					class="cursor-pointer underline-offset-2 underline text-dark"
				>
					Create account
				</NuxtLink>
			</template>
			<section
				class="mx-auto flex w-full h-full items-center justify-center overflow-x-hidden"
			>
				<form class="w-[515px] px-2 text-dark">
					<p class="text-[28px] font-medium">
						Forgot your password?
					</p>
					<p class="mb-[30px] text-sm font-medium">
						Enter your email address to get a link to reset your password.
					</p>
					<div class="w-full space-y-[30px]">
						<!-- email address -->
						<CustomInput
							title="Email Address"
							type="email"
							placeholder=""
							error-message="this is a required field"
						/>
						<!-- submit button -->
						<CustomButton label="Continue" theme="submit" @click="$router.push('/auth/reset-link')" />
						<p class="text-base text-center w-full text-dark">
							Remember your password?
							<NuxtLink
								to="/auth/signin"
								class="cursor-pointer text-primary_link underline"
							>
								Login
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
