import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
  
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', 
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
 
  plugins: [daisyui],
  corePlugins: {
    preflight: false,
  },
};