import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false,
	loadingIndicator: {
		name: 'rectangle-bounce',
		color: 'black',
		background: 'white',
	},

	target: 'static',
	head: {
		title: 'Traq',
		htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
	},
	alias: {
		'@': '/<rootDir>/src',
	},

	css: ['/src/assets/css/main.css'],
	// plugins: ['@/plugins/add'],
	components: [
		'@/components',
		// { path: '@/components/core', extensions: ['vue'] },
	],

	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js'),
		},
	},
	// generate: { fallback: true },

	runtimeConfig: {
		public: {
			GATEWAY_ENDPOINT: process.env.VITE_GATEWAY_ENDPOINT || '',
		},
	},
	env: { GATEWAY_ENDPOINT: process.env.VITE_GATEWAY_ENDPOINT || '' },
});
