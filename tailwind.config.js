/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf2ff',
          200: '#b3e7ff',
          300: '#5ccaff',
          400: '#30b8ff',
          500: '#06a1fa',
          600: '#0080d7',
          700: '#0065ad',
          800: '#0A2540',
          900: '#061B30',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffe095',
          300: '#ffca58',
          400: '#ffb520',
          500: '#f99700',
          600: '#dd7500',
          700: '#b75500',
          800: '#964400',
          900: '#7c3900',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.imgur.com/nbMlj7I.jpeg')",
      },
    },
  },
  plugins: [],
};