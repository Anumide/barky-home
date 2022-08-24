<template>
	<div v-if="bankHistories.length == 0" class="mt-20 flex items-center flex-col gap-4">
		<div class="w-40">
			<img src="@/assets/icons/source/bankHistory.svg" alt="" class="w-full h-full">
		</div>
		<p class="font-medium text-sm font-sans">
			Oops! No bank history available
		</p>
	</div>
	<div v-else>
		<div v-for="(bankHistory, index) in bankHistories" :key="index">
			<div>
				<img :src="bankHistory.bankLogo" alt="">
			</div>
			<div>
				<p> {{ bankHistory.bankName }}</p>
				<div>
					<span>{{ bankHistory.bankBalance }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bankHistories = [
    {
    bankName: 'Fidelity',
    bankBalance: 'N900,000,000',
    InAppBalance: 'N900,000,000',
    bankLogo: '@/assets/icons/source/bankHistory.svg'
    }
]
</script>
