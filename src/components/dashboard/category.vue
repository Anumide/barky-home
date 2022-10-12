<template>
	<div class="flex flex-col items-center justify-end gap-2 md:rounded-lg md:shadow-md md:w-[29%] lg:w-[27%] p-4 md:bg-cover_background md:hover:scale-[1.03]">
		<div class="w-1/2 md:w-[11rem]" :class="imageWidth">
			<img :src="imgUrl(imageSrc)" alt="" class="w-full">
		</div>
		<h1 class="text-xl font-medium">
			{{ categoryType }}
		</h1>
		<p class="text-xs text-center" :class="textClass">
			{{ categoryText }}
		</p>
		<CustomButton :text="text" class="my-2 px-2 py-1 font-medium text-primary hover:text-white hover:bg-primary" />
	</div>
</template>

<script setup lang="ts">
defineProps({
    categoryType: {
        type: String,
        required: true
    },
    categoryText: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    imageWidth: {
        type: String,
        required: false,
        default: ''
    },
    text: {
        type: String,
        required: true
    },
    textClass: {
        type: String,
        required: true,
        default: ''
    }
})

const imgUrl = (imageSrc) => {
    return new URL(`/src/assets/images/${imageSrc}.png`, import.meta.url).href
  }
</script>
