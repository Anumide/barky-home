<template>
	<div class="hover rounded-lg drop-shadow-md bg-white">
		<div class="flex justify-between p-4 border-b border-border_color border-solid">
			<p class="text-sm font-medium">
				{{ typeOfSales }}
			</p>
			<div tabindex="0" class="text-card_blue flex gap-2 items-center text-sm font-medium cursor-pointer relative" @click="isPeriod = !isPeriod" @blur="isPeriod = false">
				<span>{{ Period }}</span>
				<icon
					name="chevronDown"
					class="w-6"
				/>
				<TransitionFade>
					<div
						v-if="isPeriod"
						class="absolute top-6 right-0 z-20 drop-shadow bg-white rounded shadow-xl text-black w-36"
					>
						<ul
							class="divide-y divide-slate-50"
						>
							<li v-for="period in periods" :key="period" class="py-2 pl-3 cursor-pointer hover:bg-neutral-200 transition" @click="periodDisplay(period)">
								{{ period }}
							</li>
						</ul>
					</div>
				</TransitionFade>
			</div>
		</div>
		<!-- p-4 border border-border_color border-solid rounded-md -->
		<div class="p-4">
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
	Period.value = period
}
</script>
<style>

</style>
