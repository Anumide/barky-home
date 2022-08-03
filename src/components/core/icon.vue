<template>
	<svg viewBox="0 0 24 24">
		<use v-bind="{ 'xlink:href': `${iconSvg}#${name}` }" />
	</svg>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
import { PropType } from 'vue'
import { IconNames } from '../../assets/icons/iconNames'
import iconSvg from '@/assets/icons/sprite.svg'
export default {
	name: 'IconComp',
	props: {
		name: {
			required: true,
			type: String as PropType<IconNames>
		}
	},
	data() {
		return {
			iconSvg
		}
	}
}
</script>
