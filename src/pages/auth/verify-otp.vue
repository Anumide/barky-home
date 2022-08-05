<template>
	<div>
		<NuxtLayout name="auth">
			<section
				class="mx-auto flex h-full w-full items-center justify-center overflow-x-hidden"
			>
				<form class="w-[650px]">
					<p class="text-[28px] font-[500]">
						Verify Account
					</p>
					<p class="mb-[30px] text-[14px] font-[500]">
						Please input the OTP sent to your email
					</p>
					<div class="w-full space-y-[30px]">
						<div class="grid grid-cols-6 gap-3 px-2 md:gap-6">
							<input
								v-for="(item, index) in otp"
								ref="inputRefs"
								:key="index"
								type="text"
								class="rounded-[6px] bg-transparent text-center md:w-[74px] md:h-[64px] flex items-center justify-center text-[24px] md:text-[32px] font-[600] focus:outline-[#536DFE] ring-2 ring-black/[0.12]"
								:class="{'bg-[#536DFE]/[14%] ring-[#536DFE]': otp[index] !== ''}"
								:value="otp[index]"
								@keyup="handleChange($event, index)"
							>
						</div>
						<!-- submit button -->
						<AuthButton label="Verify OTP" theme="submit" @click="test" />
						{{ otp }}
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
  if ((!inputRefs.value[index]?.value || inputRefs.value[index]?.value) && inputRefs.value[index + 1] && e.key === 'ArrowRight') {
	inputRefs.value[index + 1].focus()
  }
  if (inputRefs.value[index]?.value && inputRefs.value[index + 1]) {
    inputRefs.value[index + 1].focus()
  }
  if ((!inputRefs.value[index]?.value || inputRefs.value[index]?.value) && inputRefs.value[index - 1] && e.key === 'ArrowLeft') {
	inputRefs.value[index - 1].focus()
  }
  if (!inputRefs.value[index]?.value && inputRefs.value[index - 1] && e.key === 'Backspace') {
	inputRefs.value[index - 1].focus()
  }
}
</script>

<style scoped></style>
