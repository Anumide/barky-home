<template>
	<div class="text-8xl font-bold">
		Hello World
		<icon name="arrowForward" class="w-20 text-red-800" />
		<icon name="percentage" class="w-10 text-[#F0A202]" />
		<icon name="coin" class="w-20 text-[#D95D39]" />
		<icon name="invoice" class="w-20 text-[#F0A202]" />
		<icon name="invoice" class="w-20 text-[#D95D39]" />
		<custom-button theme="outline" label="Print" class="w-fit text-base px-10 rounded-full text-primary ring-2">
			<template #icon-left>
				<icon name="invoice" class="w-5 text-primary" />
			</template>
		</custom-button>

		<div class="grid grid-cols-3 pl-24 pr-8 pt-8">
			Home page
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
