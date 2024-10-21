/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#c307f1',
            secondary: '#08f362',
            dark:'#110f1a'
        },
        boxShadow: {
            'custom': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
        }
    },
  },
  plugins: [],
}

