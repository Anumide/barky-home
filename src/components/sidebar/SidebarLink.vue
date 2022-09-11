<template>
	<div v-if="isButton" class="text-white h-[40px] flex items-center border-transparent border-l-[6px] space-x-2 w-full cursor-pointer hover:bg-primary_light transition-colors duration-300 px-[20px] justify-start" :class="{'justify-center px-0': collapsed}" @click.prevent="$emit('click')">
		<icon :name="iconName" class="text-white w-[22px] h-[22px]" fill="none" />
		<span v-if="!collapsed" class="font-medium">{{ label }}</span>
	</div>
	<NuxtLink v-else class="text-white h-[40px] flex items-center border-transparent border-l-[6px] space-x-2 w-full cursor-pointer hover:bg-primary_light transition-colors duration-300 px-[20px] justify-start" :class="{'justify-center px-0': collapsed, 'link-active': $route.path === to || $route.path.startsWith(to)|| $route.path.split('/')[1] == to.split('/')[1]}" :to="to">
		<icon :name="iconName" class="text-white w-[22px] h-[22px]" fill="none" />
		<span v-if="!collapsed" class="font-medium capitalize">{{ label }}</span>
	</NuxtLink>
</template>

<script setup>
defineProps({
    iconName: {
        required: true,
        type: String
    },
    label: {
        required: true,
        type: String
    },
    to: {
        required: true,
        type: String
    },
    collapsed: {
        type: Boolean,
        required: true
    },
    isButton: {
        type: Boolean,
        required: false,
        default: false
    }
})

defineEmits(['click'])
// eslint-disable-next-line @typescript-eslint/no-unused-vars

</script>

<style lang="scss" scoped>
.link-active {
  border-left: 6px solid white;
  background-color: var(--primary_light)
}
</style>
