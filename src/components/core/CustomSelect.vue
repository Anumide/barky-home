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
		@click="hidden = !hidden"
		@blur="hidden = false"
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
				class="absolute top-6 right-0 z-20 drop-shadow bg-white rounded shadow-xl text-black w-32"
			>
				<ul
					class="divide-y divide-slate-50"
				>
					<li v-for="option in options" :key="option.name" class="py-2 pl-3 text-sm cursor-pointer hover:bg-neutral-200 transition text-left" @click="$emit('itemsClick', option)">
						{{ option.name }}
					</li>
				</ul>
			</div>
		</TransitionFade>
	</div>

	<!-- create button with dropdown -->
	<div
		v-else-if="selectType === 'btnDropdown'"
		class="w-48 bg-primary flex items-center divide-x-reverse divide-solid divide-white rounded-full text-white cursor-pointer relative"
	>
		<NuxtLink :to="link" class="bg-primary hover:ring-primary hover:ring-2 hover:ring-offset-2 transition text-sm border-r border-white/80 border-solid rounded-l-full pl-6 pr-3 py-3 leading-6 font-medium">
			{{ label }}
		</NuxtLink>
		<div
			tabindex="0"
			class="flex justify-center items-center bg-primary rounded-r-full pl-5 p-4"
			@click="hidden = !hidden"
			@blur="hidden = false"
		>
			<icon
				name="arrowDown"
				class="w-4"
			/>
		</div>

		<TransitionFade>
			<div v-if="hidden" class="absolute top-[3.3rem] right-3 z-10 bg-white rounded drop-shadow-lg shadow-xl text-black w-44">
				<ul class="divide-y divide-boder_color">
					<li v-for="option in options" :key="option.name" class="py-2 pl-3 cursor-pointer hover:bg-neutral-200 transition" @click="$emit('itemsClick', option)">
						<NuxtLink :to="option.link">
							{{ option.name }}
						</NuxtLink>
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
},
link: {
	type: String,
	required: true,
	default: ''
}
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hidden = ref(false)

defineEmits(['update:modelValue', 'click', 'blur', 'itemsClick'])
</script>
