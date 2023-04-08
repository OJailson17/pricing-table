/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1D539E',
				secondary: '#FFCC29',
				'primary-text': '#1E2338',
				'secondary-text': '#828799',
				'white-background': '#F9FBFC',
			},
		},
	},
	plugins: [],
};
