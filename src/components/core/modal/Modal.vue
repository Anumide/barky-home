<template>
	<transition name="slide" appear :duration="500">
		<div
			:close="closeModal"
			class="bg transition-all bg-modal"
			@click="close"
		>
			<div v-if="type === 'normal'" class=" modal bg-white  py-8 px-9  rounded-[10px] overflow-x-hidden overflow-y-auto shadow-xl transform transition-all  max-w-[60%] max-h-[90vh] w-[29.5rem] box-border">
				<div class="flex w-full justify-between h-full">
					<div class="flex flex-col items-center relative w-full overflow-y-auto">
						<div class="w-full flex">
							<h2 class="font-semibold text-xl text-center mx-auto mt-2">
								{{ title }}
							</h2>
						</div>
						<slot />
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import { modal } from '@/composables/core/modals'

const props = defineProps({
    modal: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: false,
		default: 'Modal Title'
	},
	type: {
		type: String,
		default: 'normal'
	}
})

const close = (e) => {
if (e.target.className.includes('bg-modal')) return closeModal()
}

const closeModal = () => {
	modal.close(props.modal)
}

</script>

<style scoped>
/* body{
	    filter: blur(8px);
  -webkit-filter: blur(8px);
} */
.bg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.50);
  width: 100vw;
  max-width: 100vw;
  min-height: 100%;
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  backdrop-filter: blur(2px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all .5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: scale(0);
  opacity: 0
}

</style>
