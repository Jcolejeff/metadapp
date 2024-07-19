module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./partials/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./content/**/*.{md,mdx}",
	],
	theme: {
		screens: {
			xxs: "340px",
			xs: "475px",
			sm: "640px",
			md: "768px",
			xm: "900px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1440px",
			"2xl": "1536px",
		},
		fontFamily: {
			lato: ["Lato", "sans-serif"],
			jakarta: ["Plus Jakarta Sans Variable", "sans-serif"],
			manrope: ["Manrope", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
			inter: ["Inter", "sans-serif"],
			quicksand: ["Quicksand", "sans-serif"],

			DmSans: ["DM Sans", "sans-serif"],
		},
		container: {
			center: true,
			screens: {
				lg: "1440px",
			},
		},
		extend: {
			wordSpacing: {
				sm: "0.25rem",
				md: "0.5rem",
				lg: "0.75rem",
				xl: "1rem",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			padding: {
				"container-xl": "7.5rem",
				"container-lg": "5rem",
				"container-md": "3.5rem",
				"container-base": "1.5rem",
			},
			margin: {
				"container-xl": "7.5rem",
				"container-lg": "5rem",
				"container-base": "1.5rem",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: "#ffffff",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",

					1: "#0B0F16",
					2: "#00AE50",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					1: "#F6F6F93D",
				},
				success: {
					1: "#005A44",
				},
				info: {
					1: "#FDA741",
				},
			},
			boxShadow: {
				1: "0px 1px 4px 2px rgba(50, 71, 92, 0.02), 0px 2px 6px 1px rgba(50, 71, 92, 0.04), 0px 1px 6px 2px rgba(50, 71, 92, 0.06)",
				2: "0px 0px 32px 0px rgba(0, 0, 0, 0.10)",
				3: "0px 0px 32px 0px rgba(40, 40, 40, 0.10)",
				4: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
				5: "0px 2px 6px 4px rgba(50, 71, 92, 0.02), 0px 4px 9px 1px rgba(50, 71, 92, 0.04), 0px 2px 9px 0px rgba(50, 71, 92, 0.06)",
				6: "0px 0px 40.793495178222656px 0px rgba(0, 0, 0, 0.10)",
			},
			backgroundImage: {
				pattern: "url('/public/svgs/pattern.svg')",
			},
			transitionProperty: {
				font: "font-size, transform",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
				bounce: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(5px)" },
				},
				"collapsible-down": {
					from: { height: "0" },
					to: { height: "var(--radix-collapsible-content-height)" },
				},
				"collapsible-up": {
					from: { height: "var(--radix-collapsible-content-height)" },
					to: { height: "0" },
				},
				"pulse-loader": {
					"0%": { opacity: "0" },
					"50%": { transform: "scale(1.4)", opacity: "0.4" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				bounce: "bounce 1s  ease-in-out infinite",
				"collapsible-down": "collapsible-down 0.2s ease-out",
				"collapsible-up": "collapsible-up 0.2s ease-out",
				"pulse-loader":
					"pulse-loader 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite",
			},
			cursor: {
				cardCursor: "url('/src/assets/svg/cardHoverCursor.svg'), pointer",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		function ({ addUtilities }) {
			const newUtilities = {
				".gradient-text": {
					"background-image":
						"linear-gradient(90deg, #F8FAFC 0%, rgba(248, 250, 252, 0.50) 113.88%)",
					color: "transparent",
					"background-clip": "text",
					"-webkit-background-clip": "text",
					display: "inline-block",
				},
				".gradient-text-black": {
					"background-image":
						"linear-gradient(90deg, #0F172A 0%, rgba(15, 23, 42, 0.50) 103.86%)",
					color: "transparent",
					"background-clip": "text",
					"-webkit-background-clip": "text",
					display: "inline-block",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
