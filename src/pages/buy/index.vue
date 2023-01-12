<template>
	<div>
		<header>
			<TheHeader class="bg-white text-black shadow-md" />
		</header>
		<main class="mt-28 mb-12 w-11/12 mx-auto">
			<div class="my-8">
				<form class="w-1/2 mx-auto flex items-center gap-6 justify-center">
					<input type="text" placeholder="Price" class="w-24 bg-[#F3EFEF] rounded p-2 placeholder:font-medium placeholder:text-sm placeholder:text-[rgba(74, 64, 185, 0.4)] focus:outline-none focus:bg-primary/50">
					<input type="text" placeholder="State, City, Address" class="grow bg-[#F3EFEF] rounded p-2 placeholder:font-medium placeholder:text-sm placeholder:text-[rgba(74, 64, 185, 0.4)]">
					<CustomButton text="Save" class="bg-primary text-white py-3 px-6 font-semibold hover:bg-[#4A40B9]" />
				</form>
			</div>
			<h1>Homes for sale</h1>
			<div class="my-3">
				list of houses
			</div>
		</main>
	</div>
</template>
