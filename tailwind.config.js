/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				transparent: "transparent",
				current: "currentColor",
				white: "#ffffff",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",

					1: "#0B0F16",
				},

				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
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
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
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
