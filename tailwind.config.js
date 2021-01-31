module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme => ({
				'splash-lg': "url('/splash_island.jpg')",
				'splash-md': "url('/logo_med.png')",
			})
		},
	},
	variants: {
		extend: {
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
