/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefdf8',
          100: '#fef7e7',
          200: '#fdecc4',
          300: '#fbdc96',
          400: '#f7c556',
          500: '#f4b942',
          600: '#e09015',
          700: '#bc700f',
          800: '#985814',
          900: '#7c4a15',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f2ee',
          200: '#ebe6dd',
          300: '#ddd5c7',
          400: '#ccc0ad',
          500: '#bba993',
          600: '#a6957e',
          700: '#8a7c6a',
          800: '#716659',
          900: '#5c544a',
        },
        brown: {
          50: '#faf8f3',
          100: '#f4efe3',
          200: '#e8dcc5',
          300: '#d7c49e',
          400: '#c4a675',
          500: '#b7935a',
          600: '#a9814e',
          700: '#8c6a42',
          800: '#72563a',
          900: '#5d4731',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'rice-grain': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23f5f2ee\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}