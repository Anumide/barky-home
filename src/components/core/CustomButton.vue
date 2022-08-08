<template>
	<button
		v-if="theme === 'submit'"
		class="w-full cursor-pointer rounded-[6px] bg-primary h-[48px] py-2 text-[16px] text-white"
		:disabled="disabled"
		@click.prevent="$emit('click')"
	>
		{{ label }}
	</button>

	<NuxtLink
		v-else-if="theme == 'link'"
		:to="linkTo"
		class="inline-block cursor-pointer rounded-full bg-primary py-[18px] px-[45px] text-[16px] text-white"
	>
		{{ label }}
	</NuxtLink>

	<button v-else>
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
      return ['submit', 'link'].includes(value)
    }
  }
})
defineEmits(['click'])
</script>

<style scoped></style>
