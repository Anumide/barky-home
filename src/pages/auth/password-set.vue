<template>
	<div>
		<NuxtLayout name="auth">
			<template #route-link>
				<NuxtLink
					to="/auth/signin"
					class="underline cursor-pointer underline-offset-2"
				>
					Log in
				</NuxtLink>
			</template>
			<section
				class="relative bottom-0 left-0 right-0 flex justify-center h-full pt-20"
			>
				<div
					class="h-full w-full rounded-t-md md:w-[640px] max-w-[640px] md:border-[1px] md:border-b-0 md:border-primary md:py-[100px] md:px-[120px]"
				>
					<div
						class="mb-[78px] h-[100px] w-[100px] rounded-full bg-primary_light flex items-center justify-center mx-auto md:mx-0"
					>
						<icon name="thumbsUp" class="w-12 text-primary" />
					</div>
					<p
						class="mb-6 text-[32px] leading-[60px] text-dark md:text-[54px] font-semibold text-center md:text-left"
					>
						New Password Set
					</p>
					<p
						class="mb-[78px] text-dark text-base md:text-xl font-normal text-center md:text-left"
					>
						You’ve successfully reset your password
					</p>
					<div
						class="flex items-center justify-center w-full md:items-start md:justify-start"
					>
						<CustomButton
							label="Go to Login"
							link-to="/auth/signin"
							theme="link"
							class="w-[166px]"
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
