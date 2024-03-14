/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-desktop': "url('./src/assets/images/hero-image-desktop.jpg')"
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#BA0C2F', // red
					secondary: '#DDDDDD', // gray
					accent: '#8065b1', // purple
					neutral: '#000000', // black
					'base-100': '#ffffff' // white
				}
			}
		]
	}
};
