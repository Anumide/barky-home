<template>
	<div>
		<NuxtLayout name="auth">
			<template #route-link>
				<NuxtLink
					to="/auth/signin"
					class="underline cursor-pointer underline-offset-2 text-dark"
				>
					Login
				</NuxtLink>
			</template>
			<section
				class="relative bottom-0 left-0 right-0 flex justify-center h-full pt-20"
			>
				<div
					class="h-full w-full rounded-t-md md:w-[640px] max-w-[640px] md:border-[1px] md:border-b-0 md:border-primary pb-[100px] md:py-[100px] md:px-[47px]"
				>
					<icon
						name="envelopeStars"
						class="mb-[37px] w-[184px] mx-auto md:mx-0"
					/>
					<p
						class="mb-6 text-[28px] text-dark md:text-[54px] leading-[60px] font-semibold text-center md:text-left"
					>
						Account Successfully Created
					</p>
					<p
						class="mb-16 text-base ftext-dark ont-normal text-center md:text-xl md:text-left"
					>
						Please check your mail, a verification link have been sent to you
					</p>
					<div
						class="flex items-center justify-center w-full md:items-start md:justify-start"
					>
						<CustomButton
							label="Continue"
							link-to="/auth/verify-otp"
							theme="link"
						/>
					</div>
				</div>
			</section>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>

<style scoped></style>
