const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-sarif"]
      },
      colors: {
        primary: {
          "50": "#f0f9ff",
          "100": "#e0f2fe", 
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e"
        },
        // primary: {
        //   "50": "#e8f9f1",
        //   "100": "#77d9ab",
        //   "200": "#61d29d",
        //   "300": "#4acc8f",
        //   "400": "#34c581",
        //   "500": "#1dbf73",
        //   "600": "#1aac68",
        //   "700": "#17995c",
        //   "800": "#148651",
        //   "900": "#117345",
        // },
        indigo: {
          "overlay": "rgba(99,102,241, 0.8)"
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.primary.500'),
              fontSize: theme('fontSize.xl'),
              fontStyle: 'not-italic',
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
