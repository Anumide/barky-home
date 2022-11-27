<template>
	<div class="px-4 my-4">
		<form>
			<div class="flex flex-col gap-2">
				<label for="email" class="text-sm font-medium">Email</label>
				<input type="text" name="email" placeholder="Enter your email" class="placeholder:text-xs rounded py-2 px-4 bg-cover_background">
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<style scoped>

</style>
