/* eslint-disable no-mixed-spaces-and-tabs */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ],
  theme: {
   		extend: {
        colors: {
          primary: 'var(--primary)',
          primary_light: 'var(--primary_light)',
          dark: 'var(--dark)',
          primary_dark: 'var(--primary_dark)',
          card_blue: 'var(--card_blue)',
          card_red: 'var(--card_red)',
          card_orange: 'var(--card_orange)',
          card_green: 'var(--card_green)',
          card_yellow: 'var(--card_yellow)',
          cover_background: 'var(--cover_background)',
          primary_pink: 'var(--primary_pink)',
          primary_pink_light: 'var(--primary_pink_light)',
          primary_link: 'var(--primary_link)',
          primary_error: 'var(--primary_error)',
          border_color: 'var(--border_color'
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif']
        }
		}
  },
  plugins: []
}
