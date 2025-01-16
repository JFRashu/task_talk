import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/Component/Rashu/**/*.{js,ts,jsx,tsx}", // Only target files in the Rashu folder
  ],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // or your preferred color
        }
      }
    },
  },
  daisyui: {
    styled: true,
    themes: ["light"],
    base: false,
    utils: true,
    logs: false,
    rtl: false,
  },
  important: '.tailwind-scope',
  plugins: [daisyui],
  corePlugins: {
    preflight: false,
  },
};