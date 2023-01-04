<template>
	<div class="my-4">
		<p class="max-w-lg mx-auto mb-4 font-semibold text-xl text-center">
			Welcome to Barkyhomes
		</p>
		<section>
			<div class="px-4 my-8 mx-auto max-w-md w-96">
				<p class="font-medium text-center my-4">
					Forgot your password?
				</p>
				<p class="text-sm text-center w-3/4 mx-auto mt-4 font-light">
					Enter your email and we’ll send
					you a link to reset your password
				</p>
				<form class="my-8">
					<div class="flex flex-col gap-2">
						<label for="email" class="text-sm font-medium">Email</label>
						<input type="text" name="email" placeholder="Enter your email" class="placeholder:text-xs rounded py-2 px-4 bg-cover_background">
					</div>
					<CustomButton text="Send" class="w-full mt-4 bg-primary p-2 text-white font-bold hover:bg-primary_dark transition duration-200" />
				</form>
			</div>
		</section>
	</div>
</template>
