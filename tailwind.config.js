/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-black': '#1a1a1a',
				'brand-white': '#ffffff',
				'brand-gray': {
					light: '#6a6a6a',
					neutral: '#4a4a4a',
					dark: '#2a2a2a'
				}
			}
		}
	},
	plugins: []
};
