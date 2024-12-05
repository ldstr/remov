import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1ED760',
          hover: '#3AE376'
        },
        gray: {
          50: '#F9F9F9', // Very light gray
          100: '#F2F2F2', // Light gray
          200: '#E5E5E5', // Lighter gray
          300: '#CCCCCC', // Light-medium gray
          400: '#A6A6A6', // Medium gray
          500: '#7C7C7C', // Your custom gray
          600: '#666666', // Dark-medium gray
          700: '#4D4D4D', // Dark gray
          800: '#333333', // Very dark gray
          900: '#1A1A1A' // Almost black
        }
      }
    }
  },
  plugins: []
} satisfies Config;
