import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-35%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(35%)', opacity: '0' },
          '33%': { transform: 'translateX(35%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleXAndY: {
          '0%': { transform: 'scale(0, 0.05)' },
          '30%': { transform: 'scale(1, 0.05)' },
          '100%': { transform: 'scale(1, 1)'},
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        hiedToTop: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        }
      },
      screens: {
        'lg': '1060px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-green': 'rgb(21, 111, 46)',
        'primary-green-opacity': 'rgba(21, 111, 46, 0.9)',
        'primary-green-high-opacity': 'rgba(21, 111, 46, 0.25)',
        'black-opacity': 'rgba(0, 0, 0, 0.5)'
      },
      boxShadow: {
        '3xl': '0 0px 30px 15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
