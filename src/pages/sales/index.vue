<template>
	<div class="h-full relative">
		<div class="flex items-center gap-x-6 border-b border-gray-300 font-medium text-lg leading-6 mb-9 text-dark_gray">
			<div
				:class="{
					'border-b-[3px] border-primary text-primary':
						currentComponent === 'Invoice',
				}"
				class="cursor-pointer py-2 border-b-[3px] border-transparent"
				@click="currentComponent = 'Invoice'"
			>
				Invoice
			</div>
			<div
				:class="{
					'border-b-[3px] border-primary text-primary':
						currentComponent === 'Customer',
				}"
				class="cursor-pointer py-2 border-b-[3px] border-transparent"
				@click="currentComponent = 'Customer'"
			>
				Customers
			</div>
			<div
				:class="{
					'border-b-[3px] border-primary text-primary':
						currentComponent === 'Product',
				}"
				class="cursor-pointer py-2 border-b-[3px] border-transparent"
				@click="currentComponent = 'Product'"
			>
				Products
			</div>
		</div>
		<div class="h-full">
			<KeepAlive>
				<TransitionFade>
					<component :is="tabs[currentComponent]" />
				</TransitionFade>
			</KeepAlive>
		</div>
	</div>
</template>

<script setup lang="ts">
import Customer from '@/components/sales/CustomerSales.vue'
import Invoice from '@/components/sales/InvoiceSales.vue'
import Product from '@/components/sales/ProductSales.vue'

definePageMeta({
  layout: 'dashboard'
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentComponent = ref('Invoice')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tabs = {
  Customer,
  Invoice,
  Product
}
</script>

<style lang="scss" scoped>

</style>
