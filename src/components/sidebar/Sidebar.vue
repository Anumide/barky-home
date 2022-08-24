<template>
	<aside class="text-white flex flex-col bg-primary_dark h-full z-[100] transition-[width] duration-300 ease relative shrink-0" :class="sidebarWidth">
		<div class="min-h-[115px] flex items-center sticky top-0">
			<NuxtLink v-if="!collapsed" to="/" class=" flex px-[81px]">
				<img src="@/assets/images/logoWhite.png" class="w-[98px] h-[30px]">
			</NuxtLink>
		</div>
		<div class="overflow-y-auto py-[45px]">
			<div class="w-full flex flex-col gap-y-1.5">
				<SidebarLink to="/dashboard" label="Dashboard" icon-name="category" :collapsed="collapsed" />
				<SidebarLink to="/sales" label="Sales" icon-name="sales" :collapsed="collapsed" />
				<SidebarLink to="/expense" label="Expense" icon-name="expense" :collapsed="collapsed" />
				<SidebarLink to="/bank" label="Bank" icon-name="bank" :collapsed="collapsed" />
				<SidebarLink to="/accounting" label="Accounting" icon-name="accountant" :collapsed="collapsed" />
				<SidebarLink to="/tax" label="Tax" icon-name="tax" :collapsed="collapsed" />
				<SidebarLink to="/reports" label="Reports" icon-name="report" :collapsed="collapsed" />
				<SidebarLink to="/hrm" label="HRM" icon-name="hrm" :collapsed="collapsed" />
			</div>
			<div class="mt-[100px]">
				<SidebarLink to="/settings" label="Settings" icon-name="setting" :collapsed="collapsed" />
				<SidebarLink
					to="/settings"
					label="Log out"
					is-button
					icon-name="logout"
					:collapsed="collapsed"
					@click="showAlert"
				/>
			</div>
		</div>
	</aside>
</template>

<script setup lang="ts">
defineProps({
    sidebarWidth: {
        type: String,
        required: true,
        default: 'w-[338px]'
    },
    collapsed: {
        type: Boolean,
        required: true
    }
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const showAlert = () => {
    alert('button test ')
}
</script>

<style lang="scss" scoped></style>
