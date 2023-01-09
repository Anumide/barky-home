<template>
	<swiper
		class="w-full h-full"
		loop
		:slides-per-view="1"
		:space-between="50"
		navigation
		:pagination="{ clickable: true }"
	>
		<swiper-slide>Slide 1</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<swiper-slide>Slide 3</swiper-slide>
	</swiper>
</template>
<script setup lang="ts">
 import { Swiper, SwiperSlide } from 'swiper/vue'
 import SwiperCore, { Navigation, Pagination } from 'swiper'
 import 'swiper/css'
 import 'swiper/css/navigation'
 import 'swiper/css/pagination'

 SwiperCore.use([Navigation, Pagination])

</script>
