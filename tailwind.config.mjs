const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,

      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        fsrome: 'FSRome, sans-serif',
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: `translateX(100%)`,
          },
          '100%': {
            transform: `translateX(0)`,
          },
        },
        slideOut: {
          '0%': {
            transform: `translateX(0)`,
          },
          '100%': {
            transform: `translateX(100%)`,
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
        },
      },
      animation: {
        slideIn: 'slideIn 400ms cubic-bezier(.14,.78,.36,1);',
        slideOut: 'slideOut 400ms cubic-bezier(.14,.78,.36,1)',
        fadeIn: 'fadeIn 400ms cubic-bezier(.14,.78,.36,1);',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
