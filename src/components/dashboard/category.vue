<template>
	<div>
		<div>
			<img src="" alt="">
		</div>
		<h1>{{ categoryType }}</h1>
		<p>{{ categoryText }}</p>
		<CustomButton text="" />
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
    }
})
</script>
