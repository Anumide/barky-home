<template>
	<div class="relative w-full">
		<swiper
			class="w-full h-full"
			loop
			:slides-per-view="1"
			:space-between="50"
			navigation
			:pagination="{ clickable: true }"
		>
			<swiper-slide v-for="image in images" :key="image">
				<img :src="image" class="object-cover">
			</swiper-slide>
		</swiper>
		<Icon name="ic:round-favorite" size="35px" class="absolute top-4 text-white right-4 z-50 cursor-pointer drop-shadow" />
	</div>
</template>
<script setup lang="ts">
 import { Swiper, SwiperSlide } from 'swiper/vue'
 import SwiperCore, { Navigation, Pagination } from 'swiper'
 import 'swiper/css'
 import 'swiper/css/navigation'
 import 'swiper/css/pagination'

 SwiperCore.use([Navigation, Pagination])

defineProps({
	images: {
		type: Array,
		required: true
	}
})
</script>
