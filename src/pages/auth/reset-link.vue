<template>
	<div>
		<NuxtLayout name="auth">
			<template #route-link>
				<NuxtLink
					to="/auth/signin"
					class="underline cursor-pointer underline-offset-2 text-dark"
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
						class="mb-[24px] text-dark text-8 leading-[60px] md:text-[54px] font-semibold text-center md:text-left"
					>
						Reset link has been sent
					</p>
					<p
						class="mb-[78px] text-base md:text-xl font-normal text-dark text-center md:text-left"
					>
						Kindly check your mail for the password reset link
					</p>
					<div
						class="flex items-center justify-center w-full md:items-start md:justify-start"
					>
						<CustomButton label="Back to  website" link-to="/" theme="link" class="w-[213px]" />
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
