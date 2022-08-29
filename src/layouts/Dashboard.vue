<template>
	<div class="h-screen w-full overflow-hidden bg-[#F8F8F8]">
		<div class="flex w-full h-full overflow-hidden relative">
			<Sidebar :sidebar-width="selectedWidth" :collapsed="collapsed" />
			<!-- top nav here -->
			<div class="bg-[#F8F8F8] grow w-full flex flex-col overflow-y-auto">
				<nav class="h-[115px] flex shrink-0 items-center bg-white shadow-md sticky top-0 w-full border-b border-gray-300 z-[99999]">
					<icon name="hamburger" class="absolute top-9 left-2 cursor-pointer w-10 text-dark" @click="toggleSidebar" />
					<!-- <span class="absolute top-4 left-6 rounded bg-red-500 cursor-pointer text-white py-2 px-4 text-xs" @click="toggleSidebar">toggle</span> -->
					<div class="max-w-[1728px] mx-auto w-full flex items-center pl-[136px] pr-[70px]">
						<slot name="top_nav_menu">
							<div class="flex items-center justify-between w-full">
								<div class="text-2xl leading-6 text-dark font-medium capitalize">
									Beauty Care Company
								</div>
								<div class="flex items-center">
									<div class="flex items-center gap-x-6 pr-6 border-r py-6">
										<icon name="notification" class="w-6 text-dark cursor-pointer" fill="none" />
										<icon name="category" class="w-6 text-dark cursor-pointer" fill="none" />
									</div>
									<div class="flex items-center space-x-2 md:space-x-2 pl-6">
										<div
											class="w-[30px] h-[30px] md:w-10 md:h-10 rounded-full text-primary_pink bg-primary_pink_light flex items-center justify-center"
										>
											<span class="text-xs font-medium leading-6">BA</span>
										</div>
										<select class="text-sm cursor-pointer font-medium outline-none bg-transparent">
											<option class="font-medium">
												Bayo Adenekan
											</option>
										</select>
									</div>
								</div>
							</div>
						</slot>
					</div>
				</nav>

				<div class="bg-[#F8F8F8] pl-[136px] pr-[70px] pt-[45px] max-w-[1728px] w-full grow mx-auto">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

const collapsed = ref(false)
const sidebarWidth = ref('w-[250px]')
const sidebarWidthCollapsed = ref('w-[70px]')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectedWidth = computed(() => {
    return collapsed.value ? sidebarWidthCollapsed.value : sidebarWidth.value
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toggleSidebar = () => {
    collapsed.value = !collapsed.value
}

</script>

<style scoped></style>
