<template>
	<Transition name="modal">
		<div v-if="show" class="modal-mask" @click.self="$emit('close')">
			<div class="modal-container">
				<div class="w-full text-right">
					<Icon name="iconoir:cancel" size="24px" class="cursor-pointer" @click="$emit('close')" />
				</div>

				<div v-if="isLogin" class="flex items-center gap-3 text-sm px-3 py-4 border-b border-border_color border-solid">
					<div class="bg-pink-200 text-pink-500 flex justify-center items-center text-xs rounded-full w-8 h-8">
						BA
					</div>
					<p>Babatunde Adeola</p>
				</div>

				<ul>
					<li v-for="menu in menulist" :key="menu.name" class="p-3 text-sm border-b border-solid border-border_color">
						<NuxtLink :to="`/${menu.link}`" class="hover:underline cursor-pointer">
							{{ menu.name }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
defineProps({
    show: Boolean
})

const isLogin = ref(true)

const menulist = ref([
    { name: 'Buy', link: 'buy' },
    { name: 'Rent', link: 'rent' },
    { name: 'Shortlets', link: 'shortlets' },
    { name: 'Lands', link: 'lands' },
    { name: 'Agent finder', link: 'agent-finder' },
    { name: 'Advert', link: 'ads' },
    { name: 'Invest', link: '' }
])
</script>

<style scoped>
.modal-mask{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);
}

.modal-container{
    width: 45%;
    height: 100%;
    background-color: #fff;
    transition: all 850ms ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active{
    transition: opacity 0.35s ease;
}

.modal-leave-active{
    transition: opacity 1s 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateX(-14rem);
}
</style>
