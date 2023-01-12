<template>
	<div class="relative w-full h-full">
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
		<Icon name="uil:github" class="absolute top-2 right-2" />
	</div>
</template>
<script setup lang="ts">
 import { Swiper, SwiperSlide } from 'swiper/vue'
 import SwiperCore, { Navigation, Pagination } from 'swiper'
 import 'swiper/css'
 import 'swiper/css/navigation'
 import 'swiper/css/pagination'

 SwiperCore.use([Navigation, Pagination])

const images = ref([
	'https://picsum.photos/id/233/320/224',
    'https://picsum.photos/id/236/320/224',
    'https://picsum.photos/id/253/320/224',
    'https://picsum.photos/id/231/320/224'
])
</script>
