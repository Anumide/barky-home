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
						New Password
					</p>
                    <p class="mb-[30px] text-[14px] font-[500]">
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
