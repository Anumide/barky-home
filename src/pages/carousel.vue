<template>
	<div class="bg-white py-8 px-12">
		<div class="flex my-16">
			<Carousel
				@prev="prev"
				@next="next"
			>
				<CarouselSlide
					v-for="(slide, index) in slides"
					v-show="visibleSlide == index"
					:key="index"
					:animation-dir="Animationdir"
				>
					<img :src="slide">
				</CarouselSlide>
			</Carousel>
		</div>
	</div>
</template>

<script setup lang="ts">
const visibleSlide = ref(0)
const Animationdir = ref('')
const slides = ref([
    'https://picsum.photos/id/233/330/575',
    'https://picsum.photos/id/236/330/575',
    'https://picsum.photos/id/253/330/575',
    'https://picsum.photos/id/231/330/575'
])

const prev = () => {
	if (visibleSlide.value === 0) {
		visibleSlide.value = slides.value.length - 1
	} else {
		visibleSlide.value--
	}
	Animationdir.value = 'prev'
}

const next = () => {
	if (visibleSlide.value === slides.value.length - 1) {
		visibleSlide.value = 0
	} else {
		visibleSlide.value++
	}
	Animationdir.value = 'next'
}

</script>

<style scoped></style>
