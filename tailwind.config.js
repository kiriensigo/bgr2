/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#4b5563',
          foreground: '#ffffff',
        },
        accent: '#f59e0b',
        background: '#f3f4f6',
        foreground: '#111827',
      },
      fontFamily: {
        display: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 