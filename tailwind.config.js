/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
			},
			colors: {
				primary: "#00693d",
        		primarylight: "#00a862",
				secondary: "#26272b",
			},
			backgroundImage: {
				'categories': "url('/background-Images/categories-bg.jpg')",
				'contact': "url('/background-Images/contact-bg.jpg')",
				'home': "url('/background-Images/home-bg.jpg')",
			},
		},
	},
	plugins: [],
};
