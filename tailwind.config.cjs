/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#003A6C",
          accent: "#C51E1E",
          gold: "#C8AA37"
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-africa.jpg')"
      }
    }
  },
  plugins: [],
};
