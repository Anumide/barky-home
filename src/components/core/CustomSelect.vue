<template>
	<!-- select industry -->
	<div v-if="selectType === 'default'" class="w-full">
		<div class="relative mb-1 flex w-full flex-col">
			<span v-if="label" class="mb-2 text-base font-medium">{{ label }}</span>
			<div class="relative mb-1 w-full h-12" v-bind="$attrs">
				<select
					class="appearance-none h-full w-full rounded-[2px] bg-transparent bg-white py-2 px-6 pr-10 outline-primary ring-1 ring-black/[0.12] "
					:value="modelValue"
					@change="$emit('update:modelValue', $event.target.value)"
				>
					<option v-if="defaultOption" value="" disabled selected :hidden="hidden">
						{{ defaultOption }}
					</option>
					<option v-for="(option, index) in options" :key="index" :Value="option">
						{{ option }}
					</option>
				</select>
				<div
					class="absolute top-0 right-0 h-full w-10 flex items-center justify-center pointer-events-none"
				>
					<icon name="chevronDown" class="w-6" />
				</div>
			</div>
			<p
				v-if="errorMessage"
				class="space-x-2 text-xs flex items-center text-primary_error"
			>
				<icon name="infoCircle" class="w-[13px] h-[13px]" /><span>{{
					errorMessage
				}}</span>
			</p>
		</div>
	</div>
	<!-- slect ends here -->

	<!-- dropdown -->
	<div
		v-else-if="selectType === 'dropdown'"
		tabindex="0"
		:class="customClass"
		class="flex gap-2 items-start font-medium cursor-pointer relative"
		@click="$emit('click')"
		@blur="$emit('blur')"
	>
		<span>{{ label }}</span>
		<icon
			name="chevronDown"
			:class="iconWidth"
		/>
		<TransitionFade>
			<!-- dropdown options -->
			<div
				v-if="hidden"
				class="absolute top-6 right-0 z-20 drop-shadow bg-white rounded shadow-xl text-black w-36"
			>
				<ul
					class="divide-y divide-slate-50"
				>
					<li v-for="option in options" :key="option" class="py-2 pl-3 text-sm cursor-pointer hover:bg-neutral-200 transition" @click="$emit('itemsClick', option)">
						{{ option }}
					</li>
				</ul>
			</div>
		</TransitionFade>
	</div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
	default: ''
  },
  options: {
    type: Array,
    required: true
  },
  // eslint-disable-next-line vue/require-prop-types
  modelValue: {
    required: true,
    default: ''
  },
  customClass: {
	type: String,
	default: ''
  },
  iconWidth: {
	type: String,
	default: 'w-6'
  },
  errorMessage: {
    type: String,
    default: ''
  },
  defaultOption: {
	type: String,
	default: ''
  },
  hidden: {
	type: Boolean,
	default: false
  },
  selectType: {
	type: String,
	required: true,
	default: 'default'
  }
})

defineEmits(['update:modelValue', 'click', 'blur', 'itemsClick'])
</script>
