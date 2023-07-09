/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': "#272e71",
        'custom-light-gray': "#f9fafb",
        'custom-gray': '#e5e7eb'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            fontFamily: 'Arial, sans-serif',
          }
        }
      }
    },
  },
  plugins: [],
}

