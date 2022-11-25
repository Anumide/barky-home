<template>
	<div class="relative w-full h-[600px]">
		<div class="w-[330px] h-full mx-auto relative overflow-hidden">
			<slot />
		</div>
		<button class="left-0" @click="$emit('prev')">
			<icon name="chevronDown" class="w-5 rotate-90 text-primary mx-auto" />
		</button>
		<button class="right-0" @click="$emit('next')">
			<icon name="chevronDown" class="w-5 -rotate-90 text-primary mx-auto" />
		</button>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

button{
    @apply w-10 h-10 rounded-full shadow-lg absolute top-[35%] z-10 active:outline-none hover:outline-none cursor-pointer;
}
</style>
