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
				class="flex items-center justify-center w-full h-full mx-auto overflow-x-hidden"
			>
				<form class="w-[650px]">
					<p class="text-[28px] font-medium text-dark">
						Verify Account
					</p>
					<p class="mb-[30px] text-[14px] font-medium text-dark">
						Please input the OTP sent to your email
					</p>
					<div class="w-full space-y-[30px]">
						<div class="grid grid-cols-6 gap-3 px-2 md:gap-6">
							<input
								v-for="(item, index) in otp"
								ref="inputRefs"
								:key="index"
								type="text"
								class="rounded-md text-center text-dark md:w-[74px] md:h-16 flex items-center justify-center text-2xl md:text-[32px] font-semibold focus:outline-primary outline-[1px] ring-1 ring-black/[0.12]"
								:class="{
									'bg-primary_light ring-primary': otp[index] !== '',
								}"
								:value="otp[index]"
								@keyup="handleChange($event, index)"
							>
						</div>
						<!-- submit button -->
						<CustomButton label="Verify OTP" theme="submit" @click="$router.push('/auth/signin')" />
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

const otp = ref(new Array(6).fill(''))
const inputRefs = ref([])

onMounted(() => inputRefs.value[0].focus())

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleChange = (e, index: number) => {
  const newOTP = [...otp.value]
  newOTP[index] = e.target.value.substring(e.target.value.length - 1)
  otp.value = newOTP
  if (
    (!inputRefs.value[index]?.value || inputRefs.value[index]?.value) &&
    inputRefs.value[index + 1] &&
    e.key === 'ArrowRight'
  ) {
    inputRefs.value[index + 1].focus()
  }
  if (inputRefs.value[index]?.value && inputRefs.value[index + 1]) {
    inputRefs.value[index + 1].focus()
  }
  if (
    (!inputRefs.value[index]?.value || inputRefs.value[index]?.value) &&
    inputRefs.value[index - 1] &&
    e.key === 'ArrowLeft'
  ) {
    inputRefs.value[index - 1].focus()
  }
  if (
    !inputRefs.value[index]?.value &&
    inputRefs.value[index - 1] &&
    e.key === 'Backspace'
  ) {
    inputRefs.value[index - 1].focus()
  }
}
</script>

<style scoped></style>
