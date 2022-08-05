<template>
	<div>
		<NuxtLayout name="auth">
			<template #route-link>
				<span class="cursor-pointer underline-offset-2 underline">
					Create account
				</span>
			</template>
			<section
				class="mx-auto flex w-full h-full items-center justify-center overflow-x-hidden"
			>
				<form class="w-[515px] px-2">
					<p class="text-[28px] font-[500]">
						Forgot your password?
					</p>
					<p class="mb-[30px] text-[14px] font-[500]">
						Enter your email address to get a link to reset your password.
					</p>
					<div class="w-full space-y-[30px]">
						<!-- email address -->
						<AuthInput
							title="Email Address"
							type="email"
							placeholder=""
							error-message="this is a required field"
						/>
						<!-- submit button -->
						<AuthButton label="Continue" theme="submit" @click="test" />
						<p class="text-[16px] text-center w-full">
							Remember your password?
							<NuxtLink class="cursor-pointer text-[#3488ED] underline">
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
