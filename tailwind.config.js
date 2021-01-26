module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme => ({
				'splash': "url('/splash.png')",
			})
		},
	},
	variants: {
		extend: {
		},
	},
	plugins: [],
};
