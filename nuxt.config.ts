import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
	ssr: false,
	target: 'static',
	head: {
		title: 'Barky Homes',
		htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
			   { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			   { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' },
			   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
		]
	},
	alias: {
		'@': './src'
	},
	modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
	css: ['/src/assets/css/tailwind.css'],
	components: [
		'@/components',
		{ path: '@/components/core', extensions: ['vue'] }
	],
	dir: {
		layouts: './src/layouts',
		pages: './src/pages',
		middleware: './src/middleware'
	},
	vite: {
		plugins: [eslintPlugin({
			useEslintrc: true
		})],
				resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
	}
})
