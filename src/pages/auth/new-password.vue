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
				<form class="w-[515px] px-2">
					<p class="text-[28px] font-medium">
						New Password
					</p>
                    <p class="mb-[30px] text-sm font-medium">
						Enter your new password
					</p>
					<div class="w-full space-y-[30px]">
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
						<!--confirm password -->
						<AuthInput
							title="Confirm Password"
							type="password"
							placeholder="Password (min of 8 characters)"
							error-message="this is a required field"
						>
							<template #icon>
								<icon name="eye" class="w-[19px]" @click="hide" />
							</template>
						</AuthInput>
						<!-- submit button -->
						<AuthButton label="Continue" theme="submit" @click="test" />
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
