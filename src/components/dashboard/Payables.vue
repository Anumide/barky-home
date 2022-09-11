<template>
	<div v-if="!receivableInfos.length" class="mt-10 flex items-center flex-col gap-4">
		<div class="w-28">
			<img src="@/assets/icons/source/emptyDocument.svg" alt="" class="w-full h-full">
		</div>
		<p class="font-medium text-sm font-sans">
			Oops! No payables available
		</p>
	</div>
	<div v-else class="h-72 overflow-y-scroll">
		<table class="table-auto w-full text-left border-collapse">
			<thead class="text-sm font-medium font-poppins">
				<tr class=" border-b border-border_color border-solid">
					<th class="text-red-500">
						Due Days
					</th>
					<th>Bill No</th>
					<th>Vendor</th>
					<th>Amount</th>
					<th>Due Dates</th>
				</tr>
			</thead>
			<tbody class="text-sm font-normal text-[#292D32]">
				<tr v-for="(receivableInfo, index) in receivableInfos" :key="index" class="transition hover:bg-neutral-200 font-poppins border-b border-border_color border-solid">
					<td class="text-red-500">
						{{ receivableInfo.dueDays }} days
					</td>
					<td>{{ receivableInfo.billNo }}</td>
					<td>{{ receivableInfo.vendor }}</td>
					<td>{{ receivableInfo.amount }}</td>
					<td>{{ receivableInfo.dueDates }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script setup lang="ts">
defineProps({
	receivableInfos: {
		type: Array,
		required: true
	}
})
</script>
<style scoped>
table th, table td{
	@apply px-2 py-6;
}
</style>
