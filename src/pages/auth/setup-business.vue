<template>
	<div class="w-full">
		<NuxtLayout name="auth" class="border-b">
			<template #route-link>
				<div class="flex items-center space-x-[8px] md:space-x-[25px]">
					<div class="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full text-[#EA4335] bg-[#EA433536]/[21%] flex items-center justify-center">
						<span>BA</span>
					</div>
					<select class="text-sm md:text-[16px] outline-none bg-transparent">
						<option>Bayo Adenekan</option>
					</select>
				</div>
			</template>
			<section
				class="mx-auto w-full flex flex-col h-full relative items-center justify-center overflow-x-hidden pt-[45px]"
			>
				<div class="flex flex-col relative self-start lg:left-0 gap-y-[25px] border-l-[3px] border-[#F9FAFA] pt-2 pb-10">
					<div class="text-[13px] w-fit px-3 font-[500] cursor-pointer" :class="{ 'border-l-[3px]':currentComponent === 'CompanyInfo'}" @click="currentComponent='CompanyInfo'">
						Company Information
					</div>
					<div class="text-[13px] w-fit px-3 font-[500] cursor-pointer" :class="{ 'border-l-[3px]':currentComponent === 'BusinessType'}" @click="currentComponent='BusinessType'">
						Business Type
					</div>
				</div>
				<div class="h-full relative">
					<div class="h-full grow-1">
						<KeepAlive>
							<component :is="tabs[currentComponent]" />
						</KeepAlive>
					</div>
				</div>
			</section>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
import CompanyInfo from '@/components/CompanyInfo.vue'
import BusinessType from '@/components/BusinessType.vue'
definePageMeta({
  layout: false
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentComponent = ref('CompanyInfo')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tabs = {
  CompanyInfo, BusinessType
}
</script>

<style scoped></style>
