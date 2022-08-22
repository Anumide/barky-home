<template>
	<div class="grid grid-cols-3 pl-24 pr-8 pt-8">
		<custom-sales-segment class="col-span-2">
			<div class="col-span-2">
				<div class="grid grid-cols-4 border border-border_color border-solid rounded p-4 divide-x divide-border_color">
					<CustomSalesInfo
						sales-type="Sales"
					/>
					<CustomSalesInfo
						sales-type="Cost of goods"
					/>
					<CustomSalesInfo
						sales-type="Expenses"
					/>
					<CustomSalesInfo
						sales-type="Profit/Loss"
					/>
				</div>
			</div>
		</custom-sales-segment>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'dashboard'
})
</script>

<style scoped></style>
