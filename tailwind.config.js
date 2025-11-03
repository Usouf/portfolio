/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          green: 'hsl(120, 100%, 50%)',
          'green-bright': 'hsl(120, 100%, 65%)',
          'green-dim': 'hsl(120, 60%, 40%)',
          'green-glow': 'hsl(120, 100%, 50%)',
          blue: 'hsl(200, 100%, 60%)',
        },
      },
    },
  },
  plugins: [],
}
