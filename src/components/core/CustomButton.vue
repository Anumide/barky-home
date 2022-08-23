<template>
	<button
		v-if="theme === 'submit'"
		v-bind="$attrs"
		class="w-full cursor-pointer flex items-center justify-center gap-x-1.5 rounded-md bg-primary py-[13px] text-base text-white"
		:disabled="disabled"
		@click.prevent="$emit('click')"
	>
		<slot name="icon-left" />
		{{ label }}
		<slot name="icon-right" />
	</button>

	<NuxtLink
		v-else-if="theme == 'link'"
		v-bind="$attrs"
		:to="linkTo"
		class="inline-block text-center cursor-pointer rounded-full bg-primary py-[18px] w-full text-base text-white"
	>
		{{ label }}
	</NuxtLink>

	<!-- outline -->
	<NuxtLink
		v-else-if="theme == 'outline_link'"
		v-bind="$attrs"
		:to="linkTo"
		class="w-full cursor-pointer text-center rounded-md ring-primary text-dark ring-1 py-[13px] text-base"
	>
		{{ label }}
	</NuxtLink>
	<button
		v-else-if="theme === 'outline'"
		v-bind="$attrs"
		class="w-full cursor-pointer flex items-center justify-center gap-x-1.5 rounded-md ring-primary text-dark ring-1  py-[13px] text-base"
		:disabled="disabled"
		@click.prevent="$emit('click')"
	>
		<slot name="icon-left" />
		{{ label }}
		<slot name="icon-right" />
	</button>

	<button v-else v-bind="$attrs">
		{{ label }}
	</button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  linkTo: {
    type: String,
    default: '#'
  },
  theme: {
    type: String,
    required: true,
    validator(value) {
      return ['submit', 'link', 'outline', 'outline_link', ''].includes(value)
    }
  }
})
defineEmits(['click'])
</script>

<style scoped></style>
