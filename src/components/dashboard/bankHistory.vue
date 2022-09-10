<template>
	<div v-if="!bankHistories.length" class="mt-20 flex items-center flex-col gap-4">
		<div class="w-40">
			<img src="@/assets/icons/source/bankHistory.svg" alt="" class="w-full h-full">
		</div>
		<p class="font-medium text-sm font-sans">
			Oops! No bank history available
		</p>
	</div>
	<div v-else class="divide-y divide-cover_background divide-solid max-h-96 overflow-y-scroll">
		<div v-for="(bankHistory, index) in bankHistories" :key="index" class="flex items-start gap-2 p-6">
			<div>
				<!-- <img :src="bankHistory.bankLogo" alt=""> -->
				<icon name="invoice" class="w-4 text-primary_dark" />
			</div>
			<div class="grow">
				<p calss="text-xs font-medium font-poppins">
					{{ bankHistory.bankName }}
				</p>
				<div class="flex justify-between items-center font-poppins">
					<span class="text-xs font-normal">Bank Balance</span>
					<span class="text-xs font-semibold"> {{ bankHistory.bankBalance }} </span>
				</div>
				<div class="flex justify-between items-center font-poppins">
					<span class="text-xs font-normal">In-App Balance</span>
					<span class="text-xs font-semibold"> {{ bankHistory.InAppBalance }} </span>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
defineProps({
	bankHistories: {
		type: Array,
		required: true
	}
})

</script>
