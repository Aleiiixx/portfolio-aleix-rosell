/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
        		secondary: 'var(--secondary-color)',
				tertiary: 'var(--tertiary-color)',
				primaryFont: 'var(--primary-font-color)'
			}
		},
	},
	plugins: [],
}
