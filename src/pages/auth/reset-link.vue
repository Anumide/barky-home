<template>
	<div>
		<NuxtLayout name="auth">
			<template #route-link>
				<span class="cursor-pointer underline-offset-2 underline">
					Log in
				</span>
			</template>
			<section
				class="relative bottom-0 right-0 left-0 flex h-full justify-center pt-[80px]"
			>
				<div
					class="h-full w-full md:w-[640px] max-w-[640px] md:border-[1px] md:border-b-0 md:border-[#3F51B5] md:py-[100px] md:px-[120px]"
				>
					<div class="mb-[78px] h-[100px] w-[100px] rounded-full bg-[#3F51B5]/[14%] flex items-center justify-center mx-auto md:mx-0">
						<icon name="thumbsUp" class=" w-[48px] text-[#3F51B5]" />
					</div>
					<p class="mb-[24px] text-[32px] md:text-[54px] font-[600] text-center md:text-left">
						Reset link has been sent
					</p>
					<p class="mb-[78px] text-[16px] md:text-[20px] font-[400] text-center md:text-left">
						Kindly check your mail for the password reset link
					</p>
					<div class="w-full flex items-center justify-center md:items-start md:justify-start">
						<AuthButton label="Back to  website" link-to="#" theme="link" />
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
