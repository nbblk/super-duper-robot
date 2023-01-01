/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
    },
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#333333',
			overlay: 'rgba(0,0,0,0.5)'
		}
	},
	plugins: []
};
