<template>
	<div>
		<div class="flex justify-between mb-4">
			<p class="text-sm font-medium">
				{{ typeOfSales }}
			</p>
			<div class="text-card_blue flex gap-2 items-center text-sm font-medium cursor-pointer relative" @click="isPeriod = !isPeriod">
				<span>{{ Period }}</span>
				<icon
					name="arrowDown"
					class="w-3"
				/>
				<TransitionFade>
					<div v-if="isPeriod" class="absolute top-6 right-0 z-10 bg-white rounded shadow-xl text-black w-36">
						<ul class="divide-y divide-slate-50">
							<li v-for="period in periods" :key="period" class="py-2 pl-3 cursor-pointer hover:bg-neutral-200 transition" @click="periodDisplay(period)">
								{{ period }}
							</li>
						</ul>
					</div>
				</TransitionFade>
			</div>
		</div>
		<div class="p-4 border border-border_color border-solid rounded-md">
			<slot />
		</div>
	</div>
</template>
<script setup lang="ts">

defineProps({
	typeOfSales: {
		type: String,
		required: true
	}
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Period = ref('This Week')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isPeriod = ref(false)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const periods = ['This Week', 'This Month', 'This Quarter', 'This Year']

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function periodDisplay(period: string) {
	console.log(period, Period.value, isPeriod.value)
	Period.value = period
	isPeriod.value = !isPeriod.value
}
</script>
