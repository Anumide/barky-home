<template>
	<transition :name="animationDir" mode="in-out">
		<div class="w-[330px] h-[575px] mx-auto absolute inset-0 overflow-hidden">
			<slot />
		</div>
	</transition>
</template>

<script setup lang="ts">
defineProps({
	animationDir: { type: String, required: true }
})

</script>

<style scoped>
.prev-enter-active{
	animation: prevIn 400ms linear;
}

.prev-leave-active{
	animation: prevOut 400ms linear;
}

.next-enter-active{
	animation: nextIn 400ms linear;
}

.next-leave-active{
	animation: nextOut 400ms linear;
}

@keyframes prevIn {
	from{
		transform: translateX(-100%);
	}
	to{
		transform: translateX(0);
	}
}

@keyframes prevOut {
	from{
		transform: translateX(0);
	}
	to{
		transform: translateX(100%);
	}
}

@keyframes nextIn {
	from{
		transform: translateX(100%);
	}
	to{
		transform: translateX(0);
	}
}

@keyframes nextOut {
	from{
		transform: translateX(0);
	}
	to{
		transform: translateX(-100%);
	}
}
</style>
