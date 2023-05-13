/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
    },
    extend: {
      animation:{
        fadeIn:"fadeIn 400ms ease-in-out"
      },
      keyframes:{
        fadeIn :{
          "0%" :{ opacity:"0.20"},
          "100%": { opacity:"1"}
        },
      }
    }
  },
  plugins: [
		require("tailwindcss-animate"),
		// ...
	],
}