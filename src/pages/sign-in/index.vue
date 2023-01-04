<template>
	<div class="px-4 my-4 mx-auto max-w-md w-96">
		<form class="flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<label for="email" class="text-sm font-medium">Email</label>
				<input type="text" name="email" placeholder="Enter your email" class="placeholder:text-xs rounded py-2 px-4 bg-cover_background">
			</div>
			<div class="flex flex-col gap-2">
				<label for="password" class="text-sm font-medium">Password</label>
				<input type="password" name="password" placeholder="Enter your password" class="placeholder:text-xs rounded py-2 px-4 bg-cover_background">
			</div>
			<CustomButton text="Sign In" class="bg-primary p-2 text-white font-bold hover:bg-primary_dark transition duration-200" />
		</form>
		<p class="font-bold text-xs text-center my-6 cursor-pointer" @click="$router.push('/forgot-password')">
			Forgot password?
		</p>
		<hr>
		<div class="text-center my-4">
			<p class="text-xs">
				Or connect with:
			</p>
			<div class="my-4 flex flex-col gap-6">
				<CustomButton text="Connect with Apple" class="bg-black p-2 text-white w-full hover:scale-[1.01] duration-[550ms] transition-all" />
				<CustomButton text="Connect with facebook" class="bg-primary_dark p-2 text-white w-full hover:scale-[1.01] duration-[550ms] transition-all" />
				<CustomButton text="Connect with Google" class="p-2 text-blue-600 border-primary w-full hover:scale-[1.01] duration-[550ms] transition-all" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<style scoped>

</style>
